import {
	getNewsArticlesByHashtag,
	getOtherNewsArticleHashtags,
	getRelatedNewsArticlesFromTag
} from "@/components/news-and-events/news/action";
import HashtagItem from "@/components/news-and-events/news/hashtag-item";
import EmptyContainer from "@/components/query-containers/empty-container";
import { badgeVariants } from "@/components/ui/badge";
import { siteConfig } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
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
	const relatedArticles = await getRelatedNewsArticlesFromTag({
		hashtag: decodedHashtag,
		currentNewsArticlesIds: newsArticles.map((n) => n.id)
	});

	if (!newsArticles.length)
		return (
			<EmptyContainer message="You may not have the authorization to view the content of this tag, otherwise check your url for typing or pasting errors">
				<h1 className="text-xl sm:text-2xl first-letter:text-destructive">#{decodedHashtag}</h1>
				<div className={badgeVariants({ variant: "outline", className: "mt-12 flex gap-4 flex-wrap-reverse px-4 py-4" })}>
					<p className=" block">Try to choose from other hashtags</p>
					<div className="flex flex-wrap gap-1">
						{otherHashTags.map((t) => (
							<HashtagItem key={t.id} hashtag={t} />
						))}
					</div>
				</div>
			</EmptyContainer>
		);

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
