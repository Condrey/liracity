import { getFilteredEvents } from "@/components/news-and-events/events/action";
import { getFilteredNewsArticles } from "@/components/news-and-events/news/action";
import { cityMediaCenterLinks } from "@/lib/constants";
import { validateRequest } from "@/lib/get-session";
import { Metadata } from "next";
import PageClient from "./page-client";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/news-events")!;

export const metadata: Metadata = {
	title,
	description
};

interface PageProps {
	searchParams: Promise<any>;
}
export default async function Page({ searchParams }: PageProps) {
	const [validatedRequest, _searchParams] = await Promise.all([await validateRequest(), await searchParams]);
	const [newsArticles, events] = await Promise.all([
		await getFilteredNewsArticles(_searchParams.newsFilter || undefined),
		await getFilteredEvents(_searchParams.eventsFilter || undefined)
	]);

	return (
		<PageClient
			initialNewsArticles={newsArticles}
			initialEvents={events}
			searchParams={_searchParams}
			user={validatedRequest.user}
		/>
	);
}
