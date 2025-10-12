"use server";

import { validateRequest } from "@/auth";
import { EventStatus, Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { eventDataInclude } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { eventCategorySchema, EventCategorySchema, eventSchema, EventSchema } from "@/lib/validation";

export async function getAllEventCategories() {
	return await prisma.eventCategory.findMany({ orderBy: { name: "asc" } });
}

export async function upsertEventCategory(formData: EventCategorySchema) {
	const input = eventCategorySchema.parse(formData);
	const slug = slugify(input.name);
	return await prisma.eventCategory.upsert({
		where: { id: input.id },
		create: { ...input, slug },
		update: { ...input, slug }
	});
}

export async function upsertEventTag(formData: EventCategorySchema) {
	const input = eventCategorySchema.parse(formData);
	return await prisma.tag.upsert({
		where: { id: input.id },
		create: { ...input },
		update: { ...input }
	});
}

export async function removeEventMedia(input: { eventId: string; mediaId: string }) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");

	const { eventId, mediaId } = input;

	const data = await prisma.event.update({
		where: { id: eventId },
		data: {
			media: {
				disconnect: { id: mediaId }
			}
		},
		include: eventDataInclude
	});
	return data;
}

export async function upsertEvent({ formData, mediaIds }: { formData: EventSchema; mediaIds: string[] }) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");
	const input = eventSchema.parse(formData);
	const slug = slugify(input.title);
	const authorId = user.id;
	const coverImageId = input.coverImageId;
	const media = mediaIds.length ? mediaIds.map((mediaId) => ({ id: mediaId })) : [];
	return await prisma.event.upsert({
		where: { id: input.id },
		create: {
			title: input.title,
			description: input.description,
			id: input.id,
			location: input.location,
			summary: input.summary,
			status: input.status,
			slug,
			startDate: input.startDate,
			endDate: input.endDate,
			category: { connect: { id: input.categoryId } },
			...(coverImageId && { coverImage: { connect: { id: coverImageId } } }),
			author: { connect: { id: authorId } },
			media: { connect: media }
		},
		update: {
			title: input.title,
			description: input.description,
			id: input.id,
			location: input.location,
			summary: input.summary,
			status: input.status,
			slug,
			startDate: input.startDate,
			endDate: input.endDate,
			category: { connect: { id: input.categoryId } },
			...(coverImageId && { coverImage: { connect: { id: coverImageId } } }),
			author: { connect: { id: authorId } },
			media: { connect: media }
		}
	});
}

export async function updateEventStatus({ eventId, status }: { eventId: string; status: EventStatus }) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");
	await prisma.event.update({ where: { id: eventId }, data: { status } });
}

export async function deleteEvent(id: string) {
	const { user } = await validateRequest();
	if (!user) throw new Error("Unauthorized!");
	const isAuthorized = myPrivileges[user.role].includes(Role.MODERATOR);
	if (!isAuthorized) throw new Error("Unauthorized!");
	return await prisma.event.delete({
		where: { id },
		include: eventDataInclude
	});
}
