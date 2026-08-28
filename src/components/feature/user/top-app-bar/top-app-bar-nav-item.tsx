"use client";

import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Spinner } from "@/components/ui/spinner";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { NavLinkGroup } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TransitionStartFunction, useTransition } from "react";

interface NavigationMenuItemContentProps {
	nav: NavLinkGroup;
	
}
export function NavigationMenuItemContent({ nav,  }: NavigationMenuItemContentProps) {
	const parentLink = nav.href;
	const Icon = nav.icon;
	const [isPending, startTransition] = useTransition();
	return (
		<NavigationMenuItem key={parentLink}>
			{!!nav.children?.length ? (
				<>
					<NavigationMenuTrigger className="bg-primary hover:bg-background hover:text-foreground dark:bg-background">
						{isPending && <Spinner className="mr-1 inline self-center" />}
						{nav.title}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							<li className="row-span-3">
								<NavigationMenuLink
									render={<Link href={parentLink} />}
									className="flex h-full w-full flex-row items-center justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none focus:shadow-md lg:flex-col lg:justify-center"
								>
									{Icon && <Icon className="size-16" strokeWidth={0.5} />}
									<div className="flex flex-col lg:items-center lg:*:text-center">
										<div className="mt-4 mb-2 text-lg font-medium tracking-tight uppercase">{nav.title}</div>
										<p className="text-sm leading-tight text-muted-foreground">{nav.description}</p>
									</div>
								</NavigationMenuLink>
							</li>

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
				<NavigationMenuLink
					render={<Link href={parentLink} passHref></Link>}
					className={cn(
						navigationMenuTriggerStyle(),
						"bg-primary dark:hover:bg-accent hover:bg-background hover:text-foreground dark:bg-background"
					)}
					onClick={() => startTransition(() => {})}
				>
					{isPending && <Spinner className="mr-1 inline self-center" />} {nav.title}
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
		<li className="bg-accent">
			<NavigationMenuLink
				render={<Link passHref href={newUrl} />}
				className={cn(
					"block space-y-0.5 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-primary hover:*:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
					className
				)}
				onClick={() => startTransition(() => {})}
			>
				<span className="text-sm leading-none font-medium tracking-tight uppercase">{title}</span>
				<p className="line-clamp-1 text-sm leading-snug text-muted-foreground">{children}</p>
			</NavigationMenuLink>
		</li>
	);
}
