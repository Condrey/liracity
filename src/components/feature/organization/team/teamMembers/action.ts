"use server";

import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { multipleMembersSignUpSchema, MultipleMembersSignUpSchema } from "@/lib/validation";

export async function addTeamMembers({ input, teamId }: { input: MultipleMembersSignUpSchema; teamId: string }) {
	const { members } = multipleMembersSignUpSchema.parse(input);
	const { user } = await validateRequest();
	const canAddMembers = myPrivileges[(user?.role as Role) || Role.USER].includes("MODERATOR");
	if (!canAddMembers) throw Error("Unauthorized to add members");

	await prisma.$transaction(async (tx) => {
		// --------------------------------------------------
		// 1. Get the team and its organization
		// --------------------------------------------------

		const team = await tx.team.findUnique({
			where: {
				id: teamId
			},
			select: {
				id: true,
				organizationId: true
			}
		});

		if (!team) {
			throw new Error("Team not found");
		}

		const emails = [...new Set(members.map((member) => member.email.trim().toLowerCase()))];

		// --------------------------------------------------
		// 2. Find existing users
		// --------------------------------------------------

		const existingUsers = await tx.user.findMany({
			where: {
				email: {
					in: emails
				}
			},
			select: {
				id: true,
				email: true
			}
		});

		const existingUserEmails = new Set(existingUsers.map((user) => user?.email?.toLowerCase()));

		// --------------------------------------------------
		// 3. Create users that don't exist
		// --------------------------------------------------

		const newUsers = members
			.filter((member) => !existingUserEmails.has(member.email.trim().toLowerCase()))
			.map((member) => ({
				email: member.email.trim().toLowerCase(),
				name: member.name,
				role: member.role ?? "user"
			}));

		if (newUsers.length > 0) {
			await tx.user.createMany({
				data: newUsers,
				skipDuplicates: true
			});
		}

		// --------------------------------------------------
		// 4. Fetch all users again
		// --------------------------------------------------

		const users = await tx.user.findMany({
			where: {
				email: {
					in: emails
				}
			},
			select: {
				id: true,
				email: true
			}
		});

		const userByEmail = new Map(users.map((user) => [user?.email?.toLowerCase(), user.id]));

		// --------------------------------------------------
		// 5. Find existing organization members
		// --------------------------------------------------

		const existingMembers = await tx.member.findMany({
			where: {
				organizationId: team.organizationId,
				userId: {
					in: users.map((user) => user.id)
				}
			},
			select: {
				userId: true
			}
		});

		const existingMemberUserIds = new Set(existingMembers.map((member) => member.userId));

		// --------------------------------------------------
		// 6. Create missing organization members
		// --------------------------------------------------

		const newMembers = users
			.filter((user) => !existingMemberUserIds.has(user.id))
			.map((user) => ({
				organizationId: team.organizationId,
				userId: user.id,
				role: "member"
			}));

		if (newMembers.length > 0) {
			await tx.member.createMany({
				data: newMembers,
				skipDuplicates: true
			});
		}

		// --------------------------------------------------
		// 7. Create TeamMembers
		// --------------------------------------------------

		await tx.teamMember.createMany({
			data: users.map((user) => ({
				teamId: team.id,
				userId: user.id
			})),
			skipDuplicates: true
		});
	});
}
