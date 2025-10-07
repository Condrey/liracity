"use server";

import prisma from "@/lib/prisma";
import { NewsArticleData, newsArticleDataInclude } from "@/lib/types";
import { cache } from "react";

async function newsArticleBySlug(slug: string) {
	return await prisma.newsArticle.findFirst({
		where: { slug },
		include: newsArticleDataInclude
	});
}

async function relatedArticles({
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
	return uniqueArticles.slice(0, 10);
}

export const getNewsArticleBySlug = cache(newsArticleBySlug);
export const getRelatedNewsArticles = cache(relatedArticles);
