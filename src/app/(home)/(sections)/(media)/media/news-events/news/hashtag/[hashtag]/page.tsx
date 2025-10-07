import { siteConfig } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getNewsArticlesByHashtag, getOtherNewsArticleHashtags, getRelatedNewsArticles } from "./action";
import { NewsHashtagClient } from "./news-hashtag-client";

interface PageProps {
	params: Promise<{ hashtag: string }>;
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { hashtag } = await params;
	const decodedHashtag = decodeURIComponent(hashtag);
	const newsArticles = await getNewsArticlesByHashtag(decodedHashtag);
	if (!newsArticles.length)
		return {
			title: "Unknown Topic ",
			description: "This tag or topic does not exist."
		};

	const previousImages = (await parent).openGraph?.images || [];
	const title = `#${decodedHashtag} News`;
	const description = `All recent news articles and updates about ${decodedHashtag} from Lira City Council.`;
	const logoUrl = `${siteConfig.url}/${siteConfig.logo}`;
	const defaultCover = `${siteConfig.url}/${siteConfig.defaultCoverImage}`;
	const hashtagUrl = `${siteConfig.url}/media/news-events/news/hashtag/${hashtag}`;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: `${decodedHashtag} News`,
		description,
		url: hashtagUrl,
		numberOfItems: newsArticles.length,
		itemListElement: newsArticles.map((article, index) => ({
			"@type": "ListItem",
			position: index + 1,
			url: `${siteConfig.url}/media/news-events/news/${article.slug}`,
			item: {
				"@type": "NewsArticle",
				headline: article.title,
				image: [article.coverImage?.url || defaultCover],
				datePublished: article.publishedAt?.toISOString(),
				author: {
					"@type": "Person",
					name: article.author?.name || "Lira City Correspondent"
				},
				publisher: {
					"@type": "Organization",
					name: siteConfig.name,
					logo: {
						"@type": "ImageObject",
						url: logoUrl
					}
				},
				description: (article.summary || article.content).replace(/<[^>]+>/g, "").slice(0, 160) + "..."
			}
		}))
	};

	return {
		title,
		description,
		alternates: { canonical: hashtagUrl },
		openGraph: {
			title,
			description,
			url: hashtagUrl,
			images: [...previousImages]
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [...previousImages]
		},
		other: {
			"script:type": "application/ld+json",
			"script:innerHTML": JSON.stringify(jsonLd)
		}
	};
}
export default async function Page({ params }: PageProps) {
	const { hashtag } = await params;
	const decodedHashtag = decodeURIComponent(hashtag);
	const newsArticles = await getNewsArticlesByHashtag(decodedHashtag);
	const otherHashTags = await getOtherNewsArticleHashtags(decodedHashtag);
	const relatedArticles = await getRelatedNewsArticles({
		hashtag: decodedHashtag,
		currentNewsArticlesIds: newsArticles.map((n) => n.id)
	});

	if (!newsArticles.length) notFound();

	return (
		<div className="">
			<NewsHashtagClient
				initialData={newsArticles}
				hashtag={decodedHashtag}
				relatedArticles={relatedArticles}
				otherHashTags={otherHashTags}
			/>
		</div>
	);
}
