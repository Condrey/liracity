import RelatedEventItem from "@/components/feature/news-and-events/events/related-event-item";
import EmptyContainer from "@/components/query-containers/empty-container";
import { EventData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
	relatedEvents: EventData[];
	className?: string;
}

export default function ListOfRelatedEvents({ relatedEvents, className }: Props) {
	return (
		<>
			{!relatedEvents.length ? (
				<EmptyContainer message="There are no related events to this headline." />
			) : (
				<div className={cn("gap-4 space-y-4", className)}>
					{relatedEvents.map((item) => (
						<RelatedEventItem relatedEvent={item} key={item.id} />
					))}
				</div>
			)}
		</>
	);
}
