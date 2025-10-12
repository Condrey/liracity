import RelatedEventItem from "@/components/news-and-events/events/related-event-item";
import EmptyContainer from "@/components/query-containers/empty-container";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarRail
} from "@/components/ui/sidebar";
import { EventData } from "@/lib/types";

export function PageSidebar({
	relatedEvents,
	...props
}: React.ComponentProps<typeof Sidebar> & { relatedEvents: EventData[] }) {
	return (
		<Sidebar variant="sidebar" {...props} className="">
			<SidebarHeader>Related Event</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Browse Related Events</SidebarGroupLabel>
					<SidebarGroupContent>
						{!relatedEvents.length ? (
							<EmptyContainer message="There are no related events to this headline." />
						) : (
							<div className="space-y-2">
								{relatedEvents.map((item) => (
									<RelatedEventItem relatedEvent={item} key={item.id} />
								))}
							</div>
						)}
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
