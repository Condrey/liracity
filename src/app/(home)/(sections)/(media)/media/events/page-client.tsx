"use client";

import ButtonAddEditEvent from "@/components/news-and-events/events/button-add-edit-event";
import { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/event-article-container-skeleton";
import ListOfEvents from "@/components/news-and-events/events/list-of-events";
import { TypographyH4 } from "@/components/page-utils";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Footer from "@/components/user/footer";
import { User } from "@/lib/auth";
import { cityMediaCenterLinks, LINK_EVENTS } from "@/lib/constants";
import { EventData } from "@/lib/types";
import { PlusIcon } from "lucide-react";
import { Suspense } from "react";
import MediaPageHeader from "../../page-header";
import { PageSidebar } from "./page-sidebar";

const { title } = cityMediaCenterLinks.find((val) => val.href === LINK_EVENTS)!;

interface PageClientProps {
	searchParams: any;
	user: User | null;
	initialEvents: EventData[];
}
export default function PageClient({ searchParams, user, initialEvents }: PageClientProps) {
	const { eventsFilter } = searchParams;

	return (
		<>
			<SidebarInset className="space-y-6">
				<MediaPageHeader
					title={title}
					start={
						<ButtonAddEditEvent>
							<PlusIcon /> event
						</ButtonAddEditEvent>
					}
					end={<SidebarTrigger size="icon" variant={"destructive"} />}
					className=""
				/>

				{/* list of events */}
				<div className="mx-auto min-h-[44vh] w-full max-w-9xl space-y-4 px-3 md:min-h-[65vh]">
					<div className="flex items-center space-x-2">
						<TypographyH4 title="Events " />
						{eventsFilter && <span>({eventsFilter})</span>}
					</div>

					<Suspense
						fallback={
							<div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
								{Array.from({ length: 6 }, (_, index) => (
									<EventsArticleContainerSkeleton key={index} />
								))}
							</div>
						}
					>
						<ListOfEvents initialData={initialEvents} filter={eventsFilter || undefined} />
					</Suspense>
				</div>
				<Footer />
			</SidebarInset>
			<PageSidebar side="right" user={user} />
		</>
	);
}
