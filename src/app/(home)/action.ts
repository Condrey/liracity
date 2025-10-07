"use server";

import prisma from "@/lib/prisma";
import { eventDataInclude, newsArticleDataInclude } from "@/lib/types";
import { cache } from "react";

async function lastTenNewsArticles() {
	return await prisma.newsArticle.findMany({
		orderBy: { createdAt: "desc" },
		take: 10,
		include: newsArticleDataInclude
	});
}
async function lastTenEvents() {
	return await prisma.event.findMany({
		orderBy: { startDate: "desc" },
		take: 10,
		include: eventDataInclude
	});
}
async function latestNews() {
	const latestNews = await prisma.newsArticle.findFirst({
		where: { createdAt: { lt: new Date() } },
		orderBy: { createdAt: "desc" },
		include: newsArticleDataInclude
	});
	return latestNews;
}
export const getLastTenNewsArticles = cache(lastTenNewsArticles);
export const getNextTenEvents = cache(lastTenEvents);
export const getLatestNews = cache(latestNews);
