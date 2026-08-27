"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { teamDataInclude } from "@/lib/types";
import { TeamSchema, teamSchema } from "@/lib/validation";
import { headers } from "next/headers";
import { cache } from "react";

async function teamById(id: string) {
	return await prisma.team.findUnique({
		where: { id },
		include: teamDataInclude
	});
}
export const getTeamById = cache(teamById);

export async function upsertTeam(formData: TeamSchema) {
	const { id, name, organizationId } = teamSchema.parse(formData);
	if (id) {
		return await auth.api.updateTeam({
			body: {
				teamId: id,
				data: {
					name,
					organizationId
				}
			},
			headers: await headers()
		});
	} else {
		return await auth.api.createTeam({
			body: {
				name,
				organizationId
			},
			headers: await headers()
		});
	}
}

export async function deleteTeam(team: TeamSchema) {
	const { id, organizationId } = teamSchema.parse(team);
	return await auth.api.removeTeam({
		body: {
			teamId: id!,
			organizationId
		}
	});
}
