import { validateRequest } from "@/auth";
import { getFilteredEvents } from "@/components/news-and-events/events/action";
import { getFilteredNewsArticles } from "@/components/news-and-events/news/action";
import { cityMediaCenterLinks } from "@/lib/constants";
import { Metadata } from "next";
import PageClient from "./page-client";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/news-events")!;

export const metadata: Metadata = {
	title,
	description
};

interface PageProps {
	searchParams: Promise<any>;
}
export default async function Page({ searchParams }: PageProps) {
	const { user } = await validateRequest();
	const _searchParams = await searchParams;
	const newsArticles = await getFilteredNewsArticles(_searchParams.newsFilter || undefined);
	const events = await getFilteredEvents(_searchParams.eventFilter || undefined);

	return (
		<div>
			<PageClient initialNewsArticles={newsArticles} initialEvents={events} searchParams={_searchParams} user={user} />
		</div>
	);
}
