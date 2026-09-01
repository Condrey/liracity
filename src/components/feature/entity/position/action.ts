"use server";

import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { positionDataInclude } from "@/lib/types";
import { positionSchema, PositionSchema } from "@/lib/validation";
import { cache } from "react";

async function positions() {
	const positions = await prisma.position.findMany({
		orderBy: [{ jobTitle: "asc" }],
		include: positionDataInclude
	});
	return positions;
}
export const getAllPositions = cache(positions);

export const getPositionById = cache(async (id: string) => {
	return await prisma.position.findUnique({
		where: {
			id
		},
		include: positionDataInclude
	});
});

export async function upsertPosition(position: PositionSchema) {
	const { user } = await validateRequest();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.SUPER_ADMIN);
	if (!isAuthorized) throw Error("Unauthorized to perform this action.");
	const { id, departmentalSectionId, dutiesAndQualifications, jobPurpose, jobTitle, salaryScale, reportsToId } =
		positionSchema.parse(position);

	const value = reportsToId
		? {
				departmentalSectionId,
				dutiesAndQualifications,
				jobPurpose,
				jobTitle,
				salaryScale,
				reportsToId
			}
		: {
				departmentalSectionId,
				dutiesAndQualifications,
				jobPurpose,
				jobTitle,
				salaryScale
			};

	return await prisma.position.upsert({
		where: { id },
		create: value,
		update: value
	});
}

export async function deletePosition(id: string) {
	const { user } = await validateRequest();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.SUPER_ADMIN);
	if (!isAuthorized) throw Error("Unauthorized to perform this action.");
	return await prisma.position.delete({
		where: {
			id
		},
		include: positionDataInclude
	});
}
