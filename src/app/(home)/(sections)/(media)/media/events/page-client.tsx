"use client";

import PageContent from "@/components/feature/news-and-events/events/all-events/page-content";
import PageHeader from "@/components/feature/news-and-events/events/all-events/page-header";
import { PageSidebar } from "@/components/feature/news-and-events/events/all-events/page-sidebar";
import Footer from "@/components/feature/user/footer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cityMediaCenterLinks, LINK_EVENTS } from "@/lib/constants";
import { EventData } from "@/lib/types";

const { title } = cityMediaCenterLinks.find((val) => val.href === LINK_EVENTS)!;

interface PageClientProps {
	searchParams: any;
	initialEvents: EventData[];
}
export default function PageClient({ searchParams, initialEvents }: PageClientProps) {
	const { eventsFilter } = searchParams;

	return (
		<div className="h-[calc(100vh-var(--header-height))] overflow-y-auto">
			<SidebarProvider>
				<SidebarInset className="">
					{/* Page header  */}
					<PageHeader title={title} />
					{/* Page content  */}
					<div className="mx-auto min-h-[44vh] w-full max-w-9xl space-y-4 px-3 md:min-h-[65vh]">
						<PageContent events={initialEvents} eventsFilter={eventsFilter} />
					</div>
					{/* Page Footer  */}
					<Footer />
				</SidebarInset>
				{/* Page Sidebar for filtering events  */}
				<PageSidebar side="right" />
			</SidebarProvider>
		</div>
	);
}
