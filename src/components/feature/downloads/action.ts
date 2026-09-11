"use server";

import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { MediaData, mediaDataInclude } from "@/lib/types";
import { mediaSchema, MediaSchema } from "@/lib/validation";
import { cache } from "react";

async function allDownloads() {
	const data: MediaData[] = await prisma.media.findMany({
		where: { type: { in: ["PDF", "SPREADSHEET", "POWER_POINT", "WORD"] }, isForDownloads: true },
		include: mediaDataInclude
	});
	return data;
}
export const getAllDownloads = cache(allDownloads);

export async function upsertDownload({ download, mediaId }: { download: MediaSchema; mediaId: string }) {
	const { id, name, description } = mediaSchema.parse(download);
	const { user } = await validateRequest();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
	if (!isAuthorized) throw Error("Unauthorized.");
	return await prisma.media.upsert({
		where: { id: id || mediaId },
		create: { name, description, url: mediaId, type: "PDF", isForDownloads: true },
		update: { name, description, type: "PDF", isForDownloads: true },
		include: mediaDataInclude
	});
}

export async function deleteDownload(id: string) {
	const { user } = await validateRequest();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
	if (!isAuthorized) throw Error("Unauthorized.");
	return await prisma.media.delete({
		where: { id },
		include: mediaDataInclude
	});
}
