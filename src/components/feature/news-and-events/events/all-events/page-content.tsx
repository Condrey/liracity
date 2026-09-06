import { TypographyH4 } from "@/components/page-utils";
import { EventData } from "@/lib/types";
import { Suspense } from "react";
import { EventsArticleContainerSkeleton } from "../event-article-container-skeleton";
import ListOfEvents from "../list-of-events";

interface Props {
	events: EventData[];
	eventsFilter: any;
}
export default function PageContent({ events, eventsFilter }: Props) {
	return (
		<>
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
				<ListOfEvents initialData={events} filter={eventsFilter || undefined} />
			</Suspense>
		</>
	);
}
