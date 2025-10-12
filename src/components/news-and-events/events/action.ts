"use server";

import { validateRequest } from "@/auth";
import { EventStatus, Role } from "@/generated/prisma";
import { allEventStatuses, myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { EventData, eventDataInclude } from "@/lib/types";
import { cache } from "react";

async function events(limit?: number) {
	const data = await prisma.event.findMany({
		take: limit,
		orderBy: { startDate: "desc" },
		include: eventDataInclude
	});
	return filterEventsByAuthorization(data);
}

async function filteredEvents(filter: string | EventStatus, limit?: number) {
	let data: EventData[];

	if (allEventStatuses.includes(filter as EventStatus)) {
		const newFilter = filter as EventStatus;
		data = await prisma.event.findMany({
			where: { status: { equals: newFilter } },
			take: limit,
			orderBy: { createdAt: "desc" },
			include: eventDataInclude
		});
	} else {
		switch (filter) {
			case "UPCOMING":
				data = await prisma.event.findMany({
					where: { startDate: { gt: new Date() } },
					take: limit,
					orderBy: { createdAt: "desc" },
					include: eventDataInclude
				});
				break;
			case "PAST":
				data = await prisma.event.findMany({
					where: { startDate: { lte: new Date() } },
					take: limit,
					orderBy: { createdAt: "desc" },
					include: eventDataInclude
				});
				break;
			default:
				data = [];
				break;
		}
	}
	return filterEventsByAuthorization(data);
}

async function eventBySlug(slug: string) {
	return await prisma.event.findFirst({
		where: { slug },
		include: eventDataInclude
	});
}

async function relatedArticlesByCategory({
	currentArticleId,
	categoryId
}: {
	currentArticleId: string;
	categoryId: string;
}): Promise<EventData[]> {
	const [relatedWithCategory, otherEvents] = await Promise.all([
		await prisma.event.findMany({ where: { categoryId }, include: eventDataInclude, take: 5 }),
		await prisma.event.findMany({
			where: { id: { not: currentArticleId } },
			include: eventDataInclude,
			take: 5
		})
	]);
	const allEvents = [...relatedWithCategory, ...otherEvents];
	const uniqueEvents = Array.from(
		new Map(allEvents.filter((a) => a.id !== currentArticleId).map((a) => [a.id, a])).values()
	);
	const data = uniqueEvents.slice(0, 10);
	return filterEventsByAuthorization(data);
}

const filterEventsByAuthorization = async (events: EventData[]): Promise<EventData[]> => {
	const { user } = await validateRequest();
	const isAnEditor = !!user && myPrivileges[user.role].includes(Role.MODERATOR);
	const isAStaff = !!user && myPrivileges[user.role].includes(Role.STAFF);
	return events.filter((a) => {
		if (a.status === EventStatus.DRAFT && !isAnEditor) return null;
		else if (a.status === EventStatus.PRIVATE && !isAStaff) return null;
		return a;
	});
};

export const getAllEvents = cache(events);
export const getFilteredEvents = cache(filteredEvents);
export const getEventBySlug = cache(eventBySlug);
export const getRelatedArticlesByCategory = cache(relatedArticlesByCategory)