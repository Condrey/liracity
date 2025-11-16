"use server";

import { validateRequest } from "@/auth";
import { NewsArticleStatus, Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { NewsArticleData, newsArticleDataInclude } from "@/lib/types";
import { cache } from "react";

async function newsArticlesByHashtag(hashtag: string): Promise<NewsArticleData[]> {
	const data = await prisma.newsArticle.findMany({
		where: { tags: { some: { name: hashtag } } },
		include: newsArticleDataInclude
	});
	return filterArticlesByAuthorization(data);
}

async function relatedArticlesFromTag({
	currentNewsArticlesIds,
	hashtag
}: {
	hashtag: string;
	currentNewsArticlesIds: string[];
}): Promise<NewsArticleData[]> {
	const relatedTags = await prisma.tag.findMany({
		where: { name: { equals: hashtag } },
		include: { articles: { include: newsArticleDataInclude, where: { id: { notIn: currentNewsArticlesIds } } } },
		take: 10
	});
	const data = relatedTags.map((r) => r.articles).flat();
	return filterArticlesByAuthorization(data);
}

async function otherNewsArticleHashtags(hashtag: string) {
	return await prisma.tag.findMany({
		where: { name: { not: hashtag } },
		take: 10
	});
}

async function newsArticles(limit?: number) {
	const data = await prisma.newsArticle.findMany({
		take: limit,
		orderBy: { createdAt: "desc" },
		include: newsArticleDataInclude
	});
	return filterArticlesByAuthorization(data);
}

async function filteredNewsArticles(filter: NewsArticleStatus | undefined, limit?: number) {
	let data: NewsArticleData[];

	if (!filter) {
		data = await prisma.newsArticle.findMany({
			take: limit,
			orderBy: { createdAt: "desc" },
			include: newsArticleDataInclude
		});
	}
	data = await prisma.newsArticle.findMany({
		where: { status: { equals: filter } },
		take: limit,
		orderBy: { createdAt: "desc" },
		include: newsArticleDataInclude
	});
	return filterArticlesByAuthorization(data);
}

async function newsArticleBySlug(slug: string) {
	return await prisma.newsArticle.findFirst({
		where: { slug },
		include: newsArticleDataInclude
	});
}

async function relatedArticlesFromTags({
	currentArticleId,
	categoryId,
	tagIds
}: {
	currentArticleId: string;
	categoryId: string;
	tagIds: string[];
}): Promise<NewsArticleData[]> {
	const [relatedWithCategory, tags, otherArticles] = await Promise.all([
		await prisma.newsArticle.findMany({ where: { categoryId }, include: newsArticleDataInclude, take: 5 }),
		await prisma.tag.findMany({
			where: { id: { in: tagIds } },
			include: { articles: { include: newsArticleDataInclude, take: 3 } },
			take: 20
		}),
		await prisma.newsArticle.findMany({
			where: { id: { not: currentArticleId } },
			include: newsArticleDataInclude,
			take: 5
		})
	]);
	const relatedByTag = tags.map((t) => t.articles).flat();
	const allArticles = [...relatedWithCategory, ...relatedByTag, ...otherArticles];
	const uniqueArticles = Array.from(
		new Map(allArticles.filter((a) => a.id !== currentArticleId).map((a) => [a.id, a])).values()
	);
	const data = uniqueArticles.slice(0, 10);
	return filterArticlesByAuthorization(data);
}

async function latestNews() {
	const { user } = await validateRequest();
	const isAnEditor = !!user && myPrivileges[user.role].includes(Role.MODERATOR);
	const isAStaff = !!user && myPrivileges[user.role].includes(Role.STAFF);
	const latestNews = await prisma.newsArticle.findFirst({
		where: {
			createdAt: { lt: new Date() },
			status: !isAnEditor ? { not: NewsArticleStatus.DRAFT } : !isAStaff ? { not: NewsArticleStatus.PRIVATE } : {}
		},
		orderBy: { createdAt: "desc" },
		include: newsArticleDataInclude
	});
	return latestNews;
}

const filterArticlesByAuthorization = async (articles: NewsArticleData[]): Promise<NewsArticleData[]> => {
	const { user } = await validateRequest();
	const isAnEditor = !!user && myPrivileges[user.role].includes(Role.MODERATOR);
	const isAStaff = !!user && myPrivileges[user.role].includes(Role.STAFF);
	return articles.filter((a) => {
		if (a.status === NewsArticleStatus.DRAFT && !isAnEditor) return null;
		else if (a.status === NewsArticleStatus.PRIVATE && !isAStaff) return null;
		return a;
	});
};

export const getLatestNews = cache(latestNews);
export const getNewsArticleBySlug = cache(newsArticleBySlug);
export const getRelatedNewsArticlesFromTag = cache(relatedArticlesFromTag);
export const getRelatedNewsArticlesFromTags = cache(relatedArticlesFromTags);
export const getAllNewsArticles = cache(newsArticles);
export const getFilteredNewsArticles = cache(filteredNewsArticles);
export const getNewsArticlesByHashtag = cache(newsArticlesByHashtag);
export const getOtherNewsArticleHashtags = cache(otherNewsArticleHashtags);
