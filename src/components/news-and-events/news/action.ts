"use server";

import prisma from "@/lib/prisma";
import { newsArticleDataInclude } from "@/lib/types";
import { cache } from "react";

async function newsArticles(limit?: number) {
	return await prisma.newsArticle.findMany({
		take: limit,
		orderBy: { createdAt: "desc" },
		include: newsArticleDataInclude
	});
}

export const getAllNewsArticles = cache(newsArticles);
