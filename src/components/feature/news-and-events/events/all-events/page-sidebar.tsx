"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarRail
} from "@/components/ui/sidebar";
import { EventStatus, Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { SideBarItem } from "@/lib/types";
import { CalendarIcon } from "lucide-react";
import MenuItemContainer from "../../../menu-item-container";

export function PageSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user } = useSession();
	const isStaff = !!user && myPrivileges[user.role as Role].includes(Role.STAFF);
	const isModerator = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);

	const items: SideBarItem[] = [
		{
			title: "Events",
			url: "",
			icon: CalendarIcon,
			isActive: true,
			items: [
				{
					title: "All events",
					url: "",
					paramValue: ""
				},
				...(isModerator
					? [
							{
								title: "Drafted events",
								url: "",
								paramValue: EventStatus.DRAFT
							}
						]
					: []),

				{
					title: "Published events",
					url: "",
					paramValue: EventStatus.PUBLISHED
				},
				...(isStaff
					? [
							{
								title: "Private events",
								url: "",
								paramValue: EventStatus.PRIVATE
							}
						]
					: []),
				{
					title: "Upcoming events",
					url: "",
					paramValue: "UPCOMING"
				},
				{
					title: "Ongoing events",
					url: "",
					paramValue: "ONGOING"
				},
				{
					title: "Past events",
					url: "",
					paramValue: "PAST"
				},
				{
					title: "Cancelled events",
					url: "",
					paramValue: EventStatus.CANCELLED
				}
			],
			filter: "eventsFilter"
		}
	];
	return (
		<Sidebar variant="inset" collapsible="offcanvas" className="pt-[var(--header-height)]" {...props}>
			<SidebarHeader className="flex-row items-center">Filter event</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Navigation</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<MenuItemContainer key={item.title} item={item} />
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
