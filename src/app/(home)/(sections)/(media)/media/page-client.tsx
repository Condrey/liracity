"use client";

import { Item, ItemDescription, ItemGroup, ItemHeader, ItemTitle } from "@/components/ui/item";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { cityMediaCenterLinks, NavLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTransition } from "react";

export default function PageClient() {
	return (
		<ItemGroup className="max-w-md gap-3">
			{cityMediaCenterLinks.map((link) => (
				<PageClientItem key={link.title} link={link} />
			))}
		</ItemGroup>
	);
}

function PageClientItem({ link }: { link: NavLink }) {
	const [isPending, startTransition] = useTransition();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();

	return (
		<Item
			variant={"outline"}
			onClick={() => startTransition(() => {})}
			className={cn(isPending && "animate-pulse bg-muted")}
			asChild
		>
			<Link href={getNavigationLinkWithPathnameWithoutUpdate(link.href)}>
				<ItemHeader className="flex-col items-start">
					<ItemTitle>{link.title}</ItemTitle>
					<ItemDescription>{link.description}</ItemDescription>
				</ItemHeader>
			</Link>
		</Item>
	);
}
