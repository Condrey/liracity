"use client";

import { badgeVariants } from "@/components/ui/badge";
import { Tag } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTransition } from "react";

export default function HashtagItem({ hashtag: t }: { hashtag: Tag }) {
	const [isPending, startTransition] = useTransition();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();

	return (
		<Link key={t.id} href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/hashtag/${t.name}`)}>
			<button
				onClick={() => startTransition(() => {})}
				className={badgeVariants({
					variant: "secondary",
					className: cn("px-2 py-1 font-extrabold", isPending && "animate-pulse")
				})}
			>
				<span className={cn("font-bold", isPending && "animate-spin")}>#</span>
				{t.name}
			</button>
		</Link>
	);
}
