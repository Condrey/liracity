import { validateRequest } from "@/auth";
import {
	getAllNewsArticles,
	getNewsArticleBySlug,
	getRelatedNewsArticlesFromTags
} from "@/components/news-and-events/news/action";
import { NewsArticleStatus, Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import { siteConfig } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import { notFound, unauthorized } from "next/navigation";
import { NewsArticleClient } from "./news-article-client";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export const revalidate = 86400; //Refresh cached pages once every 24 hours
export async function generateStaticParams() {
	const allNewsArticles = await getAllNewsArticles(10);
	return allNewsArticles.map((e) => ({
		slug: e.slug
	}));
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { slug } = await params;
	const decodedSlug = decodeURIComponent(slug);
	const newsArticle = await getNewsArticleBySlug(decodedSlug);
	if (!newsArticle)
		return {
			title: "Unknown news article",
			description: "This news article could not be found or may have been removed."
		};

	const previousImages = (await parent).openGraph?.images || [];
	const title = newsArticle.title;
	const description = (newsArticle.summary || newsArticle.content).replace(/<[^>]+>/g, "").slice(0, 160) + "...";
	const imageUrl = newsArticle.coverImage?.url || `${siteConfig.url}/${siteConfig.defaultCoverImage}`;
	const articleUrl = `${siteConfig.url}/media/news-and-events/news/${newsArticle.slug}`;
	const authorName = newsArticle.author?.name || "Lira City Correspondent";

	return {
		title,
		description,
		alternates: { canonical: articleUrl },
		openGraph: {
			title,
			description,
			url: articleUrl,
			type: "article",
			publishedTime: newsArticle.publishedAt?.toISOString(),
			modifiedTime: newsArticle.updatedAt?.toISOString(),
			authors: [authorName],
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: newsArticle.title
				},
				...previousImages
			]
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [imageUrl, ...previousImages]
		}
	};
}
export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	const decodedSlug = decodeURIComponent(slug);
	const { user } = await validateRequest();
	const newsArticle = await getNewsArticleBySlug(decodedSlug);
	if (!newsArticle) return notFound();
	const relatedArticles = await getRelatedNewsArticlesFromTags({
		categoryId: newsArticle.categoryId,
		currentArticleId: newsArticle.id,
		tagIds: newsArticle.tags.map((t) => t.id)
	});
	const isAStaff = !!user && myPrivileges[user.role].includes(Role.STAFF);
	const isAnEditor = !!user && myPrivileges[user.role].includes(Role.MODERATOR);
	if (newsArticle.status === NewsArticleStatus.DRAFT && !isAnEditor) return unauthorized();
	if (newsArticle.status === NewsArticleStatus.PRIVATE && !isAStaff) return unauthorized();

	return (
		<div className="">
			<NewsArticleClient initialData={newsArticle} slug={decodedSlug} relatedArticles={relatedArticles} />
		</div>
	);
}
