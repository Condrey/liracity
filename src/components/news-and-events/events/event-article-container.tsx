"use client";

import { useSession } from "@/app/session-provider";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { eventStatuses, myPrivileges } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { cn, getEventStatusAndPeriod } from "@/lib/utils";
import { isAfter } from "date-fns";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import ArticleImage from "../article-image";

export default function EventsArticleContainer({
	eventsArticle: { title, id, coverImage, startDate, summary, status, location, endDate, description, slug },
	className
}: {
	eventsArticle: EventData;
	className?: string;
}) {
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const [mouseEntered, setMouseEntered] = useState(false);
	const [isPending, startTransition] = useTransition();
	const { eventStatus, icon, variant } = eventStatuses[status];
	const Icon = icon;
	const { user } = useSession();
	const isNotVisitor = myPrivileges[user?.role || Role.USER].includes(Role.STAFF);
	const now = new Date();
	const isPastEvent = !endDate ? isAfter(now, startDate) : isAfter(now, endDate);
	const { period, status: eventTag } = getEventStatusAndPeriod({ startDate, endDate });

	return (
		<Item
			variant="outline"
			className={cn(
				"p-0 pb-6 cursor-pointer  flex flex-col  hover:shadow-md  ",
				" justify-start items-start  aspect-video",
				isPending && "animate-pulse",
				mouseEntered && "shadow-md",
				className
			)}
			onClick={() => startTransition(() => {})}
			onMouseEnter={() => setMouseEntered(true)}
			onMouseLeave={() => setMouseEntered(false)}
			asChild
		>
			<Link
				href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/events/${slug}`)}
				className="size-full relative flex flex-col overflow-hidden  items-stretch "
			>
				<ArticleImage
					mediaIdentifier={coverImage?.url!}
					alt={title}
					width={500}
					height={600}
					className={cn(
						" w-full opacity-15  aspect-video bg-cover touch-none pointer-events-none rounded-sm object-cover",
						mouseEntered && "scale-110 transition-all duration-300"
					)}
				/>
				<ItemContent className="p-3  backdrop-blur-sm flex-1 absolute">
					<ItemFooter className="gap-1 flex  space-x-1 flex-wrap justify-start">
						{isNotVisitor && (
							<Badge variant={variant}>
								<Icon />
								{eventStatus}
							</Badge>
						)}
						<span className="text-muted-foreground inline *:inline text-sm">
							<MapPinIcon className="size-4.5 inline fill-muted-foreground text-card" />
							{location}
						</span>
						<p>
							<span className="text-xs capitalize">{period}</span>
						</p>
					</ItemFooter>
					<ItemTitle className={cn("line-clamp-2", mouseEntered && "scale-105 transition-all duration-200")}>
						{title}
					</ItemTitle>
					<ItemDescription>
						<TipTapViewer content={summary ?? description} />
					</ItemDescription>
				</ItemContent>
				<Badge className={cn("absolute  bottom-0 right-0")} variant={isPastEvent ? "destructive" : "success"}>
					<CalendarIcon className="" />
					{eventTag}
				</Badge>

				<LoadingButton
					loading={isPending}
					variant={isPastEvent ? "destructive" : "default"}
					className={cn(
						"hidden absolute  ",
						"max-w-fit  max-h-fit m-auto  size-full py-3",
						"-translate-x-1/2 top-1/2 -translate-y-1/2 start-1/2",
						(isPending || mouseEntered) && "block animate-in ease-in duration-500"
					)}
				>
					Read more...
				</LoadingButton>
			</Link>
		</Item>
	);
}
