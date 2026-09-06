import ListOfRelatedEvents from "@/components/feature/news-and-events/events/list-of-related-events";
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
		<Sidebar variant="inset" collapsible="offcanvas" className="pt-[var(--header-height)]" {...props}>
			<SidebarHeader className="flex-row items-center">Related Event</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Browse Related Events</SidebarGroupLabel>
					<SidebarGroupContent>
						<ListOfRelatedEvents relatedEvents={relatedEvents} />
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
