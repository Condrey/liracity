"use client";

import { Button } from "@/components/ui/button";
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
import { EventStatus, NewsArticleStatus, Role } from "@/generated/prisma/enums";
import { User } from "@/lib/auth";
import { SEARCH_PARAMS_NEWS_EVENTS } from "@/lib/constants";
import { myPrivileges } from "@/lib/enums";
import { CalendarIcon, ChevronRightIcon, LucideIcon, NewspaperIcon, XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

type SideBarSubItem = {
	title: string;
	url: string;
	paramValue: string | undefined;
};
type SideBarItem = {
	title: string;
	url: string;
	icon?: LucideIcon;
	filter: string;
	isActive?: boolean;
	items?: SideBarSubItem[];
};

export function PageSidebar({
	user,
	setOpen,
	...props
}: React.ComponentProps<typeof Sidebar> & { user: User | null; setOpen: (open: boolean) => void }) {
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
		},
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
			<SidebarHeader className="flex-row items-center">
				{
					<Button className="" size="icon" variant={"destructive"} onClick={() => setOpen(false)}>
						<XIcon />
					</Button>
				}
				Navigation
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>For Events and Articles </SidebarGroupLabel>
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
	const searchParams = useSearchParams();
	const subItems = item.items;
	if (!subItems) {
		return null;
	}

	const defaultNewsEventsTabs = searchParams.get(SEARCH_PARAMS_NEWS_EVENTS) || "news";
	const hasChildActive = subItems.slice(1).some((subItem) => searchParams.get(item.filter) === subItem.paramValue);
	const isInitialActive = item.filter.startsWith(defaultNewsEventsTabs) && !hasChildActive;

	return (
		<>
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
							<SubmenuItemContainer item={item} subItem={subItems[0]} isActive={isInitialActive} />
							{subItems.slice(1).map((subItem) => {
								const filter = searchParams.get(item.filter);
								const isActive = filter === subItem.paramValue;
								return <SubmenuItemContainer key={subItem.title} item={item} subItem={subItem} isActive={isActive} />;
							})}
						</SidebarMenuSub>
					</CollapsibleContent>
				</SidebarMenuItem>
			</Collapsible>
		</>
	);
}

function SubmenuItemContainer({
	item,
	subItem,
	isActive
}: {
	item: SideBarItem;
	subItem: SideBarSubItem;
	isActive: boolean;
}) {
	const [isPending, startTransition] = useTransition();
	const searchParams = useSearchParams();
	const newsEvent = searchParams.get(SEARCH_PARAMS_NEWS_EVENTS);
	const pathname = usePathname();
	const router = useRouter();
	const params = new URLSearchParams(searchParams.toString());

	function handleClick() {
		startTransition(() => {
			params.set(item.filter, subItem.paramValue!);
			params.set(SEARCH_PARAMS_NEWS_EVENTS, item.filter.startsWith("event") ? "events" : "news");
			router.push((!pathname ? "" : pathname) + "?" + params.toString());
		});
	}

	isActive = isActive && item.filter.startsWith(newsEvent || "");
	return (
		<SidebarMenuSubItem key={subItem.title}>
			{/* <pre>{JSON.stringify({ filter: item.filter, newsEvent }, null, 2)}</pre> */}
			<SidebarMenuSubButton isActive={isActive} onClick={handleClick}>
				{isPending && <Spinner />}
				<span>{subItem.title}</span>
			</SidebarMenuSubButton>
		</SidebarMenuSubItem>
	);
}
