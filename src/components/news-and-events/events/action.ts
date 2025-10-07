"use server";

import prisma from "@/lib/prisma";
import { eventDataInclude } from "@/lib/types";
import { cache } from "react";

async function events(limit?: number) {
	return await prisma.event.findMany({
		take: limit,
		orderBy: { startDate: "desc" },
		include: eventDataInclude
	});
}

export const getAllEvents = cache(events);
