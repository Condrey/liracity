"use client";

import { LuciaUser } from "@/app/(auth)/lib/session";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail
} from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { EventStatus, NewsArticleStatus, Role } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges } from "@/lib/enums";
import { CalendarIcon, ChevronRightIcon, LucideIcon, NewspaperIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

type SideBarSubItem = {
	title: string;
	url: string;
	paramValue: string;
};
type SideBarItem = {
	title: string;
	url: string;
	icon?: LucideIcon;
	filter: string;
	isActive?: boolean;
	items?: SideBarSubItem[];
};

export function PageSidebar({ user, ...props }: React.ComponentProps<typeof Sidebar> & { user: LuciaUser | null }) {
	const isStaff = !!user && myPrivileges[user.role].includes(Role.STAFF);
	const isModerator = !!user && myPrivileges[user.role].includes(Role.MODERATOR);
	const items: SideBarItem[] = [
		{
			title: "For events",
			url: "",
			icon: CalendarIcon,
			isActive: true,
			items: [
				{
					title: "Published events",
					url: "",
					paramValue: EventStatus.PUBLISHED
				},
				{
					title: "Upcoming events",
					url: "",
					paramValue: "UPCOMING"
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
			filter: "eventFilter"
		},
		{
			title: "For News Articles",
			url: "",
			icon: NewspaperIcon,
			isActive: true,
			items: [
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
		<Sidebar variant="sidebar" collapsible="icon" className="" {...props}>
			<SidebarHeader>Navigation</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>For Events and Articles</SidebarGroupLabel>
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

export function MenuItemContainer({ item }: { item: SideBarItem }) {
	const Icon = item.icon!;
	return (
		<Collapsible asChild defaultOpen={item.isActive} className="group/collapsible">
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton tooltip={item.title}>
						{item.icon && <Icon />}
						<span>{item.title}</span>
						<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{item.items?.map((subItem) => (
							<SubmenuItemContainer key={subItem.title} item={item} subItem={subItem} />
						))}
					</SidebarMenuSub>
				</CollapsibleContent>
			</SidebarMenuItem>
		</Collapsible>
	);
}

function SubmenuItemContainer({ item, subItem }: { item: SideBarItem; subItem: SideBarSubItem }) {
	const [isPending, startTransition] = useTransition();
	const { navigateOnclick } = useCustomSearchParams();
	const searchParams = useSearchParams();
	const filter = searchParams.get(item.filter);

	return (
		<SidebarMenuSubItem key={subItem.title}>
			<SidebarMenuSubButton
				isActive={filter === subItem.paramValue}
				onClick={() =>
					startTransition(() => {
						navigateOnclick(item.filter, subItem.paramValue);
					})
				}
				className="cursor-pointer"
			>
				{isPending && <Spinner />}
				<span>{subItem.title}</span>
			</SidebarMenuSubButton>
		</SidebarMenuSubItem>
	);
}
