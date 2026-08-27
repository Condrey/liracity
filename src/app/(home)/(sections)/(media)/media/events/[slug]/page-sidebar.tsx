import RelatedEventItem from "@/components/feature/news-and-events/events/related-event-item";
import EmptyContainer from "@/components/query-containers/empty-container";
import { Button } from "@/components/ui/button";
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
import { XIcon } from "lucide-react";

export function PageSidebar({
	relatedEvents,
	setOpen,
	...props
}: React.ComponentProps<typeof Sidebar> & { relatedEvents: EventData[]; setOpen: (open: boolean) => void }) {
	return (
		<Sidebar variant="sidebar" {...props} className="pt-[var(--header-height)]">
			<SidebarHeader className="flex-row items-center">
				{
					<Button className="" size="icon" variant={"destructive"} onClick={() => setOpen(false)}>
						<XIcon />
					</Button>
				}
				Related Event
			</SidebarHeader>
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
