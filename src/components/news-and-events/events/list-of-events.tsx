"use client";

import { useSession } from "@/app/session-provider";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemTitle } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { Role } from "@/generated/prisma";
import { eventStatuses, myPrivileges } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import { getAllEvents } from "./action";
import ButtonAddEditEventsArticle from "./button-add-edit-event";

interface ListOfEventsProps {
	initialData: EventData[];
	limit?: number;
}

export default function ListOfEvents({ initialData, limit }: ListOfEventsProps) {
	const query = useQuery({
		queryKey: ["events"],
		queryFn: async () => getAllEvents(limit),
		initialData
	});
	const { data, status } = query;
	if (status === "error")
		return <ErrorContainer errorMessage={"Failed to fetch events. Please try again!"} query={query} />;
	if (status === "success" && !data.length)
		return (
			<EmptyContainer message={"There are no events in the database. Please add"}>
				<ButtonAddEditEventsArticle>Add events Article</ButtonAddEditEventsArticle>
			</EmptyContainer>
		);
	return (
		<div className="flex w-full max-w-9xl flex-col gap-6">
			<ItemGroup className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{data.map((eventsArticle) => (
					<EventsArticleContainer key={eventsArticle.id} eventsArticle={eventsArticle} />
				))}
			</ItemGroup>
		</div>
	);
}

export function EventsArticleContainer({
	eventsArticle: { title, id, coverImage, startDate, summary, status, location, endDate, description },
	className
}: {
	eventsArticle: EventData;
	className?: string;
}) {
	const { eventStatus, icon, variant } = eventStatuses[status];
	const Icon = icon;
	const { user } = useSession();
	const isNotVisitor = myPrivileges[user?.role || Role.USER].includes(Role.STAFF);
	return (
		<Item
			variant="outline"
			className={cn("p-0 pb-6 group/article cursor-pointer hover:bg-muted  hover:shadow-md", className)}
		>
			<ItemHeader className="px-0 relative flex-1 overflow-hidden flex flex-col justify-center items-center ">
				<Image
					src={coverImage?.url!}
					alt={title}
					width={500}
					height={600}
					className=" w-full aspect-video mask-b-from-10% mask-b-to-90% rounded-sm object-cover  group-hover/article:scale-110 transition-all duration-300"
				/>
				<div
					className={cn(
						"brightness-[30%] ",
						"max-w-fit absolute flex flex-col items-center max-h-fit m-auto size-full py-3"
					)}
				>
					<span className="bg-primary/20 text-primary backdrop-blur-2xl px-1 py-0.5 rounded-2xl overflow-clip">
						{formatDate(startDate, "PPp")}
					</span>
					{endDate && (
						<>
							<span className="bg-destructive/20 text-destructive backdrop-blur-2xl px-1 py-0.5 rounded-2xl overflow-clip">
								upto
							</span>
							<span className="bg-primary/20 text-primary backdrop-blur-2xl px-1 py-0.5 rounded-2xl overflow-clip">
								{formatDate(endDate, "PPp")}
							</span>
						</>
					)}
				</div>
				<Button
					variant={"destructive"}
					className={cn("hidden group-hover/article:block", "max-w-fit absolute max-h-fit m-auto size-full py-3")}
				>
					View Event
				</Button>
				<Badge className="absolute bg-sky-300 text-sky-950 top-0 left-0">Upcoming Event</Badge>
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
				{!!endDate && (
					<p>
						<span className="text-xs">Happening {formatDateToLocal(endDate)}</span>
					</p>
				)}
			</ItemFooter>
			<ItemContent className="px-3">
				<ItemTitle>{title}</ItemTitle>
				<ItemDescription>
					<TipTapViewer content={summary ?? description} />
				</ItemDescription>
			</ItemContent>
		</Item>
	);
}

export function EventsArticleContainerSkeleton() {
	return (
		<Item variant="outline" className={cn("p-0 pb-6 animate-pulse cursor-wait")}>
			<Skeleton className="w-full h-[250px]  rounded-sm " />
			<ItemFooter className="gap-1 px-3 space-x-1 flex-wrap justify-start">
				<Skeleton className="h-9 w-16" />
				<div className="space-x-1.5 flex ">
					{Array.from({ length: 3 }, (_, index) => (
						<Skeleton key={index} className="h-6 w-12" />
					))}
				</div>
				<Skeleton className="h-6 w-12" />
			</ItemFooter>
			<ItemContent className="px-3">
				<Skeleton className="h-6 w-2/3" />

				<div className="gap-0.5 flex flex-col">
					{Array.from({ length: 3 }, (_, index) => (
						<Skeleton key={index} className="h-6 w-full" />
					))}
				</div>
			</ItemContent>
		</Item>
	);
}
