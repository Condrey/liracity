"use server";

import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { webName } from "@/lib/utils";
import { singleContentSchema, SingleContentSchema } from "@/lib/validation";
import { cache } from "react";

async function entity() {
	return await prisma.entity.findFirst();
}
export const getEntity = cache(entity);

export async function upsertAbout(input: SingleContentSchema) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");
	const isAuthorized = myPrivileges[user.role as Role].includes(Role.MODERATOR);
	if (!isAuthorized) throw Error("Unauthorized");

	const { singleContent } = singleContentSchema.parse(input);
	return await prisma.entity.upsert({
		where: { id: "entity" },
		create: { about: singleContent, id: "entity", webName },
		update: { about: singleContent, webName }
	});
}

export async function upsertHistoryAndCulture(input: SingleContentSchema) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");
	const isAuthorized = myPrivileges[user.role as Role].includes(Role.MODERATOR);
	if (!isAuthorized) throw Error("Unauthorized");

	const { singleContent } = singleContentSchema.parse(input);
	return await prisma.entity.upsert({
		where: { id: "entity" },
		create: { historyAndCulture: singleContent, id: "entity", webName },
		update: { historyAndCulture: singleContent, webName }
	});
}

export async function upsertGeographyAndLandmarks(input: SingleContentSchema) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");
	const isAuthorized = myPrivileges[user.role as Role].includes(Role.MODERATOR);
	if (!isAuthorized) throw Error("Unauthorized");

	const { singleContent } = singleContentSchema.parse(input);
	return await prisma.entity.upsert({
		where: { id: "entity" },
		create: { geographicalLandmarks: singleContent, id: "entity", webName },
		update: { geographicalLandmarks: singleContent, webName }
	});
}
