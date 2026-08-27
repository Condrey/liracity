import { getFilteredEvents } from "@/components/feature/news-and-events/events/action";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cityMediaCenterLinks, LINK_EVENTS } from "@/lib/constants";
import { validateRequest } from "@/lib/get-session";
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
	const [validatedRequest, _searchParams] = await Promise.all([await validateRequest(), await searchParams]);

	const [events] = await Promise.all([await getFilteredEvents(_searchParams.eventsFilter || undefined)]);

	return (
		<div className="h-[calc(100vh-var(--header-height))]">
			<SidebarProvider cookieName="NEWS_EVENT_SIDEBAR">
				<PageClient initialEvents={events} searchParams={_searchParams} user={validatedRequest.user} />
			</SidebarProvider>
		</div>
	);
}
