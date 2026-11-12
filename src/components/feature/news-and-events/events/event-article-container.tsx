"use client";

import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { LINK_EVENTS } from "@/lib/constants";
import { eventStatuses, myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { EventData } from "@/lib/types";
import { cn, getEventStatusAndPeriod } from "@/lib/utils";
import { isAfter } from "date-fns";
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
	const isNotVisitor = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.STAFF);
	const now = new Date();
	const isPastEvent = !endDate ? isAfter(now, startDate) : isAfter(now, endDate);
	const { period, status: eventTag } = getEventStatusAndPeriod({ startDate, endDate });

	return (
		<Item
			variant="outline"
			className={cn(
				"mb-4 group/event flex cursor-pointer flex-col bg-card p-0 hover:bg-primary/20 md:pb-6",
				"mb:aspect-video items-start justify-start hover:shadow-md",
				isPending && "animate-pulse",
				className
			)}
			onClick={() => startTransition(() => {})}
			asChild
		>
			<Link
				href={getNavigationLinkWithPathnameWithoutUpdate(`${LINK_EVENTS}/${slug}`)}
				className="relative flex size-full flex-col items-stretch overflow-hidden"
			>
				<ArticleImage
					mediaIdentifier={coverImage?.url!}
					alt={title}
					width={500}
					height={600}
					className={cn(
						" pointer-events-none hidden max-h-40 min-h-40 w-full blur-3xl touch-none rounded-sm bg-cover object-cover opacity-50 md:block md:aspect-video md:max-h-none",
						"group-hover/event:scale-110 group-hover/event:transition-all group-hover/event:duration-300  group-hover/event:opacity-100 group-hover/event:blur-xl"
					)}
				/>
				<div className="size-full flex-1 p-3  md:absolute md:mb-8">
					<ItemContent className="overflow-clip">
						<ItemFooter className="flex flex-wrap justify-start gap-1 space-x-1">
							{isNotVisitor && (
								<Badge variant={variant}>
									<Icon />
									{eventStatus}
								</Badge>
							)}
							<span className="inline text-sm font-bold text-amber-900 *:inline dark:font-normal dark:text-warning">
								<MapPinIcon className="inline size-4.5 fill-amber-900 text-card dark:fill-warning/20 dark:text-warning" />
								{location}
							</span>
							<p>
								<span className="text-xs capitalize">{period}</span>
							</p>
						</ItemFooter>
						<ItemTitle
							className={cn(
								"mb-1.5 line-clamp-2 font-bold uppercase",
							)}
						>
							{title}
						</ItemTitle>
						<ItemDescription className="line-clamp-4 md:line-clamp-3">
							<TipTapViewer
								content={summary ?? description}
								className="text-start text-sm md:text-sm dark:text-muted-foreground"
							/>
						</ItemDescription>
					</ItemContent>
				</div>
				<Badge
					className={cn("absolute right-0 bottom-0 backdrop-blur-2xl")}
					variant={isPastEvent ? "destructive" : "success"}
				>
					<CalendarIcon className="" />
					{eventTag}
				</Badge>

				<LoadingButton
					loading={isPending}
					variant={isPastEvent ? "destructive" : "default"}
					className={cn(
						"absolute hidden",
						"max-w-fit backdrop-blur-2xl",
						"inset-s-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
						'group-hover/event:block group-hover/event:animate-in group-hover/event:duration-500 group-hover/event:ease-in',
						isPending && "block animate-in duration-500 ease-in"
					)}
				>
					Read more...
				</LoadingButton>
			</Link>
		</Item>
	);
}
