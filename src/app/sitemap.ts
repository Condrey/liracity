import { getAllEvents } from "@/components/news-and-events/events/action";
import { getAllNewsArticles } from "@/components/news-and-events/news/action";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const [allNewsArticles, allEvents] = await Promise.all([await getAllNewsArticles(), await getAllEvents()]);

	// For news articles
	const newsArticleSitemaps: MetadataRoute.Sitemap = allNewsArticles.map((n) => ({
		url: `${baseUrl}/media/news-events/news/${n.slug}`,
		lastModified: n.updatedAt,
		changeFrequency: "always",
		priority: 1
	}));

	// For events
	const eventsSitemaps: MetadataRoute.Sitemap = allEvents.map((n) => ({
		url: `${baseUrl}/media/news-events/events/${n.slug}`,
		lastModified: n.updatedAt,
		changeFrequency: "always",
		priority: 1
	}));

	return [
		// Insert other pages
		// { url: `${baseUrl}/media/news-events/news`, lastModified: "2025-12-31", changeFrequency: "always", priority: 0.8 },
		// Our pSEO pages:
		...eventsSitemaps,
		...newsArticleSitemaps
	];
}
