"use server";

import { Role } from "@/generated/prisma/enums";
import { auth } from "@/lib/auth";
import { DEFAULT_PASSWORD } from "@/lib/constants";
import prisma from "@/lib/prisma";
import { MemberData, memberDataInclude } from "@/lib/types";
import { memberSignUpSchema, MemberSignUpSchema } from "@/lib/validation";
import { headers } from "next/headers";
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

export async function addMember(input: MemberSignUpSchema) {
	const { email, name, role, ippsNumber, organizationId } = memberSignUpSchema.parse(input);
	await prisma.$transaction(
		async (tx) => {
			const user = await auth.api.signUpEmail({
				body: {
					email,
					password: DEFAULT_PASSWORD,
					name,
					role
				},
				headers: await headers()
			});
			await Promise.all([
				await auth.api.addMember({
					body: {
						userId: user.user.id,
						role: role === Role.STAFF ? "member" : "admin",
						organizationId: organizationId
					},
					headers: await headers()
				}),
				await tx.employee.upsert({
					where: { ippsNumber: String(ippsNumber) },
					create: {
						ippsNumber: String(ippsNumber),
						userId: user.user.id
					},
					update: {}
				})
			]);
			return user;
		},
		{ maxWait: 18000, timeout: 18000 }
	);
}
