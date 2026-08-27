"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavLink, NavLinkGroup, navLinks } from "@/lib/constants";
import { cn, webName } from "@/lib/utils";
import { ChevronRight, Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
	useSidebar
} from "../../ui/sidebar";
import { Spinner } from "../../ui/spinner";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]! md:hidden"
			collapsible="icon"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton className="flex h-fit w-full flex-col items-center justify-center rounded-lg bg-sidebar text-sidebar-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<div className="flex aspect-square size-[160px] flex-col items-center">
								<Image src={"/logo.png"} alt="logo" width={150} height={150} />
								<span className="text-xl tracking-tight uppercase">{webName}</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="hidden sm:flex">Navigation Menu</SidebarGroupLabel>
					<SidebarMenu className="">
						{navLinks.map((item, index) => {
							return <CollapsibleItem key={item.href} item={item} index={index} />;
						})}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

function CollapsibleItem({ item, index }: { item: NavLinkGroup; index: number }) {
	const pathname = usePathname();
	const isSmallScreen = useIsMobile();
	const ItemIcon = item.icon!;
	const isActive = !item.children.length
		? index > 0
			? pathname.startsWith(item.href)
			: pathname.endsWith("/")
		: item.children.some((i) => pathname.startsWith(i.href));
	const { isMobile, setOpenMobile, openMobile } = useSidebar();
	const [isPending, startTransition] = useTransition();

	function handleClickEvent() {
		!item.children.length &&
			startTransition(() => {
				isMobile && setOpenMobile(!openMobile);
			});
	}
	return (
		<Collapsible key={item.title} defaultOpen={index === 1} asChild className="group/collapsible">
			<SidebarMenuItem>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton
						tooltip={item.title}
						isActive={isActive}
						variant={"default"}
						size={isSmallScreen ? "default" : "lg"}
						onClick={handleClickEvent}
						asChild
					>
						<Link href={!item.children.length ? item.href : "#"}>
							{isPending ? <Spinner /> : item.icon && <ItemIcon className="hidden sm:flex" />}
							<span className={cn("line-clamp-1 break-words text-ellipsis")}>{item.title}</span>
							<ChevronRight
								className={cn(
									"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90",
									!item.children.length && "hidden"
								)}
							/>
						</Link>
					</SidebarMenuButton>
				</CollapsibleTrigger>
				{item.children?.length ? (
					<CollapsibleContent>
						<SidebarMenuSub>
							{item.children.map((i) => (
								<MenuItem item={i} key={i.href} />
							))}
						</SidebarMenuSub>
					</CollapsibleContent>
				) : null}
			</SidebarMenuItem>
		</Collapsible>
	);
}

function MenuItem({ item }: { item: NavLink }) {
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();
	const isActive = pathname.startsWith(item.href) && pathname !== "/";
	const { isMobile, setOpenMobile, openMobile } = useSidebar();

	function handleClickEvent() {
		startTransition(() => {
			isMobile && setOpenMobile(!openMobile);
		});
	}
	return (
		<SidebarMenuSubItem key={item.title}>
			<SidebarMenuSubButton title={item.description} onClick={handleClickEvent} asChild isActive={isActive}>
				<Link href={item.href} className="flex h-fit gap-2 py-1">
					{isPending && <Loader2Icon className="size-4 animate-spin" />}
					{item.title}
				</Link>
			</SidebarMenuSubButton>
		</SidebarMenuSubItem>
	);
}
