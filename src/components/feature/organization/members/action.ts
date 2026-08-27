"use server";

import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { MemberData, memberDataInclude } from "@/lib/types";
import { multipleMembersSignUpSchema, MultipleMembersSignUpSchema } from "@/lib/validation";
import { cache } from "react";

export const getMemberByMemberId = cache(async (memberId: string) => {
	return await prisma.member.findUnique({
		where: {
			id: memberId
		},
		include: memberDataInclude
	});
});

export const getOrganizationMembersBySlug = cache(
	async (organizationSlug: string): Promise<MemberData[]> =>
		await prisma.member.findMany({
			where: { organization: { slug: organizationSlug }, role: { not: "owner" } },
			orderBy: [{ role: "asc" }, { user: { name: "asc" } }],
			include: memberDataInclude
		})

	//   {
	// 	const data = await auth.api.listMembers({
	// 		query: { organizationSlug, filterField: "role", filterOperator: "ne", filterValue: "owner" },
	// 		headers: await headers()
	// 	});
	// 	return data.members;
	// }
);

export const getOrganizationMembersById = cache(
	async (organizationId: string): Promise<MemberData[]> =>
		await prisma.member.findMany({
			where: { organizationId, role: { not: "owner" } },
			orderBy: [{ role: "asc" }, { user: { name: "asc" } }],
			include: memberDataInclude
		})
	//   {
	// 	const data = await auth.api.listMembers({
	// 		query: { organizationId, filterField: "role", filterOperator: "ne", filterValue: "owner" },
	// 		headers: await headers()
	// 	});
	// 	return data.members;
	// }
);

export async function addMembers(input: MultipleMembersSignUpSchema) {
	const { members } = multipleMembersSignUpSchema.parse(input);
	const { user } = await validateRequest();
	const canAddMembers = myPrivileges[(user?.role as Role) || Role.USER].includes("MODERATOR");
	if (!canAddMembers) throw Error("Unauthorized to add members");

	await prisma.$transaction(
		async (tx) => {
			// 1. Create users that don't already exist
			await tx.user.createMany({
				data: members.map(({ email, name, role }) => ({
					email,
					name,
					role
				})),
				skipDuplicates: true
			});

			// 2. Get all users we need
			const users = await tx.user.findMany({
				where: {
					email: {
						in: members.map((member) => member.email)
					}
				},
				select: {
					id: true,
					email: true
				}
			});

			const userByEmail = new Map(users.map((user) => [user.email, user.id]));

			// 3. Create employees
			await tx.employee.createMany({
				data: members.map(({ email, ippsNumber }) => ({
					ippsNumber: String(ippsNumber),
					userId: userByEmail.get(email)!
				})),
				skipDuplicates: true
			});

			// 4. Get employees
			const employees = await tx.employee.findMany({
				where: {
					ippsNumber: {
						in: members.map(({ ippsNumber }) => String(ippsNumber))
					}
				},
				select: {
					id: true,
					ippsNumber: true
				}
			});

			const employeeByIpps = new Map(employees.map((employee) => [employee.ippsNumber, employee.id]));

			// 5. Create members
			await tx.member.createMany({
				data: members.map(({ email, organizationId, ippsNumber, role }) => ({
					organizationId,
					userId: userByEmail.get(email)!,
					employeeId: employeeByIpps.get(String(ippsNumber))!,
					role: role === Role.STAFF ? "member" : "admin"
				})),
				skipDuplicates: true
			});
		},
		{ maxWait: 18000, timeout: 18000 }
	);
}
