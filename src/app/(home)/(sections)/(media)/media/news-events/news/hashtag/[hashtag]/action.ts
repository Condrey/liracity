"use server";

import prisma from "@/lib/prisma";
import { NewsArticleData, newsArticleDataInclude } from "@/lib/types";
import { cache } from "react";

async function newsArticlesByHashtag(hashtag: string) {
	return await prisma.newsArticle.findMany({
		where: { tags: { some: { name: hashtag } } },
		include: newsArticleDataInclude
	});
}

async function relatedArticles({
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
	return relatedTags.map((r) => r.articles).flat();
}

async function otherNewsArticleHashtags(hashtag: string) {
	return await prisma.tag.findMany({
		where: { name: { not: hashtag } },
		take: 10
	});
}

export const getNewsArticlesByHashtag = cache(newsArticlesByHashtag);
export const getRelatedNewsArticles = cache(relatedArticles);
export const getOtherNewsArticleHashtags = cache(otherNewsArticleHashtags);
