"use server";

import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { departmentalSectionDataInclude } from "@/lib/types";
import { departmentalSectionSchema, DepartmentalSectionSchema } from "@/lib/validation";
import { cache } from "react";

async function departmentalSections() {
	const departmentalSections = await prisma.departmentalSection.findMany({
		orderBy: [{stationType:'desc'},{ sectionName: "asc" }],
		include: departmentalSectionDataInclude
	});
	return departmentalSections;
}
export const getAllDepartmentalSections = cache(departmentalSections);

export const getDepartmentalSectionById = cache(async (id: string) => {
	return await prisma.departmentalSection.findUnique({
		where: {
			id
		},
		include: departmentalSectionDataInclude
	});
});

export async function upsertDepartmentalSection(departmentalSection: DepartmentalSectionSchema) {
	const { user } = await validateRequest();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.SUPER_ADMIN);
	if (!isAuthorized) throw Error("Unauthorized to perform this action.");
	const { id, sectionName, stationType } =
		departmentalSectionSchema.parse(departmentalSection);

	return await prisma.departmentalSection.upsert({
		where: { id },
		create: {
			sectionName, stationType
		},
		update: {
			sectionName, stationType
		}
	});
}

export async function deleteDepartmentalSection(id: string) {
	const { user } = await validateRequest();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.SUPER_ADMIN);
	if (!isAuthorized) throw Error("Unauthorized to perform this action.");
	return await prisma.departmentalSection.delete({
		where: {
			id
		},
		include: departmentalSectionDataInclude
	});
}
