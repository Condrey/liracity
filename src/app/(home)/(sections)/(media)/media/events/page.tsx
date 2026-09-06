import { getFilteredEvents } from "@/components/feature/news-and-events/events/action";
import { cityMediaCenterLinks, LINK_EVENTS } from "@/lib/constants";
import { Metadata } from "next";
import PageClient from "./page-client";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === LINK_EVENTS)!;

export const metadata: Metadata = {
	title,
	description
};

interface PageProps {
	searchParams: Promise<any>;
}
export default async function Page({ searchParams }: PageProps) {
	const _searchParams = await searchParams;
	const events = await getFilteredEvents(_searchParams.eventsFilter || undefined);

	return (
		<div className="">
			<PageClient initialEvents={events} searchParams={_searchParams} />
		</div>
	);
}
