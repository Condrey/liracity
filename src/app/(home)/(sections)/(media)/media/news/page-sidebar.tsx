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
import { NewsArticleStatus, Role } from "@/generated/prisma/enums";
import { User } from "@/lib/auth";
import { myPrivileges } from "@/lib/enums";
import { SideBarItem } from "@/lib/types";
import { NewspaperIcon } from "lucide-react";
import MenuItemContainer from "../../menu-item-container";

export function PageSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: User | null }) {
	const isStaff = !!user && myPrivileges[user.role as Role].includes(Role.STAFF);
	const isModerator = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);

	const items: SideBarItem[] = [
		{
			title: "News Articles",
			url: "",
			icon: NewspaperIcon,
			isActive: true,
			items: [
				{
					title: "All articles",
					url: "",
					paramValue: ""
				},
				...(isStaff
					? [
							{
								title: "Private articles",
								url: "",
								paramValue: NewsArticleStatus.PRIVATE
							}
						]
					: []),
				...(isModerator
					? [
							{
								title: "Drafted articles",
								url: "",
								paramValue: NewsArticleStatus.DRAFT
							}
						]
					: []),
				{
					title: "Published articles",
					url: "",
					paramValue: NewsArticleStatus.PUBLISHED
				},
				{
					title: "Archived articles",
					url: "",
					paramValue: NewsArticleStatus.ARCHIVED
				}
			],
			filter: "newsFilter"
		}
	];
	return (
		<Sidebar variant="inset" collapsible="offcanvas" className="pt-[var(--header-height)]" {...props}>
			<SidebarHeader className="flex-row items-center">Filter news articles </SidebarHeader>

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
