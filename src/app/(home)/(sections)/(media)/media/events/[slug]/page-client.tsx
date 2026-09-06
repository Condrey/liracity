"use client";

import { useEventBySlugQuery } from "@/components/feature/news-and-events/events/query";
import EventContent from "@/components/feature/news-and-events/events/single-event/page-content";
import PageHeader from "@/components/feature/news-and-events/events/single-event/page-header";
import { PageSidebar } from "@/components/feature/news-and-events/events/single-event/page-sidebar";
import Footer from "@/components/feature/user/footer";
import ErrorContainer from "@/components/query-containers/error-container";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { EventData } from "@/lib/types";
import { notFound } from "next/navigation";

interface EventClientProps {
	initialData: EventData;
	relatedEvents: EventData[];
	slug: string;
}

export function PageClient({ initialData, slug, relatedEvents }: EventClientProps) {
	const query = useEventBySlugQuery(slug, initialData);
	const { data: event, status } = query;

	if (status === "error") return <ErrorContainer errorMessage="Failed to fetch event. Please retry" query={query} />;
	if (!event) return notFound();

	return (
		<div className="h-[calc(100vh-var(--header-height))] overflow-y-auto">
			<SidebarProvider>
				<SidebarInset className="">
					{/* Page header  */}
					<PageHeader event={event} />
					{/* Page content  */}
					<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 p-4">
						<EventContent event={event} relatedEvents={relatedEvents} />
					</div>
					{/* Page Footer  */}
					<Footer />
				</SidebarInset>
				{/* Page Sidebar for related events  */}
				<PageSidebar side="right" relatedEvents={relatedEvents} />
			</SidebarProvider>
		</div>
	);
}
