"use client";

import ArticleImage from "@/components/news-and-events/article-image";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemDescription, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { EventData } from "@/lib/types";
import { cn, getEventStatusAndPeriod } from "@/lib/utils";
import { isAfter } from "date-fns";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useTransition } from "react";

export default function RelatedEventItem({ relatedEvent: item }: { relatedEvent: EventData }) {
	const { theme } = useTheme();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const [isPending, startTransition] = useTransition();
	const now = new Date();
	const isPastEvent = !item.endDate ? isAfter(now, item.startDate) : isAfter(now, item.endDate);
	const { period, status: eventTag } = getEventStatusAndPeriod({ startDate: item.startDate, endDate: item.endDate });

	return (
		<Item
			key={item.id}
			variant={theme === "dark" ? "muted" : "outline"}
			size="sm"
			onClick={() => startTransition(() => {})}
			className={cn(
				"px-2 py-1 bg-card transition-shadow hover:shadow-md dark:bg-muted hover:bg-muted hover:cursor-pointer group/item",
				isPending && "bg-muted animate-pulse"
			)}
			asChild
		>
			<Link href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/events/${item.slug}`)}>
				{item.coverImage && (
					<ItemMedia className="pointer-events-none overflow-hidden touch-auto w-full flex *:flex-1">
						<ArticleImage
							mediaIdentifier={item.coverImage.url}
							height={180}
							width={180}
							className="h-[110px] w-full object-cover transition-all group-hover/item:scale-110 "
						/>
					</ItemMedia>
				)}
				<ItemHeader className="flex-col items-start gap-0.5">
					<ItemTitle className="border-b mb-1 group-hover/item:font-bold transition-all">{item.title}</ItemTitle>
					<div className="text-xs block text-start space-x-2 space-y-1.5">
						{item.location && (
							<address>
								<MapPin className="size-4 inline-flex mr-0.5 fill-muted-foreground text-muted " />
								{item.location},
							</address>
						)}
						<Badge variant={isPastEvent ? "destructive" : "success"}>
							{/* <StatusIcon className="mr-1" /> */}
							{eventTag}
						</Badge>
						<span className="  uppercase">{period}</span>
					</div>
					<ItemDescription>
						<TipTapViewer content={item.summary || item.description} />
					</ItemDescription>
				</ItemHeader>
			</Link>
		</Item>
	);
}
