"use server";

import prisma from "@/lib/prisma";
import { newsArticleDataInclude } from "@/lib/types";
import { cache } from "react";

async function newsArticles() {
	return await prisma.newsArticle.findMany({ orderBy: { createdAt: "desc" }, include: newsArticleDataInclude });
}

export const getAllNewsArticles = cache(newsArticles);
