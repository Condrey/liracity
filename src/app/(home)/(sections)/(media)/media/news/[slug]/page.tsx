import { getNewsArticleBySlug, getRelatedNewsArticlesFromTags } from "@/components/feature/news-and-events/news/action";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NewsArticleStatus, Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { siteConfig } from "@/lib/utils";
import { htmlToText } from "html-to-text";
import { Metadata, ResolvingMetadata } from "next";
import { notFound, unauthorized } from "next/navigation";
import { NewsArticleClient } from "./news-article-client";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export const revalidate = 86400; //24 hours
export async function generateStaticParams() {
	const allEvents = await prisma.newsArticle.findMany({
		take: 10,
		orderBy: { createdAt: "desc" }
	});
	return allEvents
		.map((e) => {
			if (e.status === NewsArticleStatus.PUBLISHED)
				return {
					slug: e.slug
				};
		})
		.filter(Boolean) as { slug: string }[];
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
	const description = htmlToText(newsArticle.summary || newsArticle.content).slice(0, 160);
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

	if (!newsArticle) {
		notFound();
	}

	const relatedArticles = await getRelatedNewsArticlesFromTags({
		categoryId: newsArticle.categoryId,
		currentArticleId: newsArticle.id,
		tagIds: newsArticle.tags.map((t) => t.id)
	});

	const isAStaff = !!user && myPrivileges[user.role as Role].includes(Role.STAFF);

	const isAnEditor = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);

	if (newsArticle.status === NewsArticleStatus.DRAFT && !isAnEditor) {
		unauthorized();
	}

	if (newsArticle.status === NewsArticleStatus.PRIVATE && !isAStaff) {
		unauthorized();
	}

	return (
		<div className="h-[calc(100vh-var(--header-height))] overflow-y-auto">
			<SidebarProvider>
				<NewsArticleClient initialData={newsArticle} slug={decodedSlug} relatedArticles={relatedArticles} />
			</SidebarProvider>
		</div>
	);
}
