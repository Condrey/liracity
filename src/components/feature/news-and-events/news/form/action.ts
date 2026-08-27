"use server";

import { NewsArticleStatus, Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { newsArticleDataInclude } from "@/lib/types";
import { slugify } from "@/lib/utils";
import {
	newsArticleCategorySchema,
	NewsArticleCategorySchema,
	newsArticleSchema,
	NewsArticleSchema
} from "@/lib/validation";

export async function getAllNewsArticleCategories() {
	return await prisma.newsArticleCategory.findMany({ orderBy: { name: "asc" } });
}

export async function upsertNewsArticleCategory(formData: NewsArticleCategorySchema) {
	const input = newsArticleCategorySchema.parse(formData);
	const slug = slugify(input.name);
	return await prisma.newsArticleCategory.upsert({
		where: { id: input.id },
		create: { ...input, slug },
		update: { ...input, slug }
	});
}

export async function upsertNewsArticleTag(formData: NewsArticleCategorySchema) {
	const input = newsArticleCategorySchema.parse(formData);
	return await prisma.tag.upsert({
		where: { id: input.id },
		create: { ...input },
		update: { ...input }
	});
}

export async function removeNewsArticleMedia(input: { newsArticleId: string; mediaId: string }) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");

	const { newsArticleId, mediaId } = input;

	const data = await prisma.newsArticle.update({
		where: { id: newsArticleId },
		data: {
			media: {
				disconnect: { id: mediaId }
			}
		},
		include: newsArticleDataInclude
	});
	return data;
}

export async function updateNewsArticleStatus({
	newsArticleId,
	status
}: {
	newsArticleId: string;
	status: NewsArticleStatus;
}) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");
	await prisma.newsArticle.update({ where: { id: newsArticleId }, data: { status } });
}

export async function upsertNewsArticle({ formData, mediaIds }: { formData: NewsArticleSchema; mediaIds: string[] }) {
	const { user } = await validateRequest();
	if (!user) throw Error("Unauthorized");
	const input = newsArticleSchema.parse(formData);
	const slug = slugify(input.title);
	const authorId = user.id;
	const tags =
		input.tags?.map((tag) => ({
			where: { name: tag.name },
			create: { name: tag.name }
		})) ?? [];
	const media = mediaIds?.map((mediaId) => ({ id: mediaId })) ?? [];
	const coverImageId = input.coverImageId;

	return await prisma.newsArticle.upsert({
		where: { id: input.id },
		create: {
			title: input.title,
			content: input.content,
			id: input.id,
			location: input.location,
			summary: input.summary,
			status: input.status,
			slug,
			category: { connect: { id: input.categoryId } },
			...(coverImageId && { coverImage: { connect: { id: coverImageId } } }),
			author: { connect: { id: authorId } },
			tags: { connectOrCreate: tags },
			media: { connect: media }
		},
		update: {
			title: input.title,
			content: input.content,
			id: input.id,
			location: input.location,
			summary: input.summary,
			status: input.status,
			slug,
			category: { connect: { id: input.categoryId } },
			...(coverImageId && { coverImage: { connect: { id: coverImageId } } }),
			author: { connect: { id: authorId } },
			tags: { connectOrCreate: tags },
			media: { connect: media }
		}
	});
}

export async function deleteNewsArticle(id: string) {
	const { user } = await validateRequest();
	if (!user) throw new Error("Unauthorized!");
	const isAuthorized = myPrivileges[user.role as Role].includes(Role.MODERATOR);
	if (!isAuthorized) throw new Error("Unauthorized!");
	return await prisma.newsArticle.delete({
		where: { id },
		include: newsArticleDataInclude
	});
}
