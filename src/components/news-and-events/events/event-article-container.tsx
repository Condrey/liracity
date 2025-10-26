"use client";

import { useSession } from "@/app/session-provider";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { eventStatuses, myPrivileges } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import ArticleImage from "../article-image";

export default function EventsArticleContainer({
	eventsArticle: { title, id, coverImage, startDate, summary, status, location, endDate, description, slug },
	className
}: {
	eventsArticle: EventData;
	className?: string;
}) {
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const [isPending, startTransition] = useTransition();
	const { eventStatus, icon, variant } = eventStatuses[status];
	const Icon = icon;
	const { user } = useSession();
	const isNotVisitor = myPrivileges[user?.role || Role.USER].includes(Role.STAFF);
	const isPassedEvent = new Date() > startDate;
	return (
		<Link
			href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/events/${slug}`)}
			className="size-full  "
		>
			<Item
				variant="outline"
				className={cn(
					"p-0 pb-6 group/article cursor-pointer hover:bg-muted  hover:shadow-md",
					isPending && "animate-pulse",
					className
				)}
				onClick={() => startTransition(() => {})}
			>
				<ItemHeader className="px-0 relative flex-1 overflow-hidden flex flex-col justify-center items-center ">
					<ArticleImage
						mediaIdentifier={coverImage?.url!}
						alt={title}
						width={500}
						height={600}
						className=" w-full min-h-[180px] touch-none pointer-events-none aspect-video mask-b-from-10% mask-b-to-90% rounded-sm object-cover  group-hover/article:scale-110 transition-all duration-300"
					/>
					<div
						className={cn(
							"brightness-[100%] ",
							"max-w-fit absolute flex flex-col items-center max-h-fit m-auto size-full py-3"
						)}
					>
						<span className="bg-primary text-primary-foreground px-1 py-0.5 rounded-2xl overflow-clip">
							{format(startDate, "PPp")}
						</span>
						{endDate && (
							<>
								<span className="bg-destructive text-destructive-foreground px-1 py-0.5 rounded-2xl overflow-clip">
									upto
								</span>
								<span className="bg-primary text-primary-foreground px-1 py-0.5 rounded-2xl overflow-clip">
									{format(endDate, "PPp")}
								</span>
							</>
						)}
					</div>
					<LoadingButton
						loading={isPending}
						variant={isPassedEvent ? "destructive" : "default"}
						className={cn(
							"hidden group-hover/article:block",
							"max-w-fit absolute max-h-fit m-auto -translate-x-1/2 top-1/2 -translate-y-1/2 start-1/2 size-full py-3",
							isPending && "block"
						)}
					>
						View Event
					</LoadingButton>
					<Badge
						className={cn(
							"absolute  top-0 left-0",
							isPassedEvent ? "bg-destructive text-destructive-foreground" : "bg-green-300 text-green-950"
						)}
					>
						<CalendarIcon className="" />
						{isPassedEvent ? "Past" : "Upcoming"} Event
					</Badge>
				</ItemHeader>
				<ItemFooter className="gap-1 px-3 space-x-1 flex-wrap justify-start">
					{isNotVisitor && (
						<Badge variant={variant}>
							<Icon />
							{eventStatus}
						</Badge>
					)}
					<span className="text-muted-foreground text-sm">
						<MapPinIcon className="size-4 inline-flex fill-muted-foreground text-card" />
						{location}
					</span>
					<p>
						<span className="text-xs">
							{isPassedEvent ? "Happened" : "Happening"} {formatDateToLocal(endDate ?? startDate)}
						</span>
					</p>
				</ItemFooter>
				<ItemContent className="px-3">
					<ItemTitle>{title}</ItemTitle>
					<ItemDescription>
						<TipTapViewer content={summary ?? description} />
					</ItemDescription>
				</ItemContent>
			</Item>
		</Link>
	);
}
