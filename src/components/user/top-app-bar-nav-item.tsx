"use client";

import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TransitionStartFunction, useTransition } from "react";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { NavLinkGroup } from "./constants";

interface NavigationMenuItemContentProps {
	nav: NavLinkGroup;
	array: NavLinkGroup[];
	index: number;
}
export function NavigationMenuItemContent({ nav, array, index }: NavigationMenuItemContentProps) {
	const parentLink = nav.href;
	const Icon = nav.icon;
	const alignRight = array.length >= 5 && index >= 4;
	const [isPending, startTransition] = useTransition();
	return (
		<NavigationMenuItem
			key={parentLink}
			className={cn("hidden  md:flex", !nav.showOnMediumScreen && "md:hidden lg:flex")}
		>
			{!!nav.children?.length ? (
				<>
					<NavigationMenuTrigger loading={isPending}>{nav.title}</NavigationMenuTrigger>
					<NavigationMenuContent 
					// className={cn("z-50 left-0", alignRight ? "md:-right-10 md:left-auto" : "md:-left-10")}
					>
						<ul className={cn(
                            "grid gap-3 p-4 md:w-[400px]  lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
                            alignRight&&'flex flex-col *:break-all ', 
                        )}>
							{!alignRight&&<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link
										className="flex flex-row h-full items-center lg:justify-center w-full select-none lg:flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href={parentLink}
									>
										{Icon && <Icon className="size-16" strokeWidth={0.5} />}
										<div className="flex flex-col lg:items-center lg:*:text-center">
											<div className="mb-2 mt-4 text-lg font-medium tracking-tight uppercase">{nav.title}</div>
											<p className="text-sm leading-tight text-muted-foreground">{nav.description}</p>
										</div>
									</Link>
								</NavigationMenuLink>
							</li>}
							{nav.children.map(({ title, href, description }) => {
								return (
									<ListItem key={href} href={href} title={title} startTransition={startTransition}>
										{description}
									</ListItem>
								);
							})}
						</ul>
					</NavigationMenuContent>
				</>
			) : (
				<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
					<Link href={parentLink} passHref >
						{nav.title}
					</Link>
				</NavigationMenuLink>
			)}
		</NavigationMenuItem>
	);
}

interface ListItemProps {
	className?: string;
	href: string;
	title: string;
	children: React.ReactNode;
	startTransition: TransitionStartFunction;
}
function ListItem({ className, title, children, href, startTransition }: ListItemProps) {
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const newUrl = getNavigationLinkWithPathnameWithoutUpdate(href);
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					passHref
					href={newUrl}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					onClick={() => startTransition(() => {})}
				>
					<div className="text-sm font-medium leading-none uppercase tracking-tight">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
