"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { ItemGroup } from "@/components/ui/item";
import { EventData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents, getFilteredEvents } from "./action";
import ButtonAddEditEventsArticle from "./button-add-edit-event";
import EventsArticleContainer from "./event-article-container";
import { EventStatus } from "@/generated/prisma";

interface ListOfEventsProps {
	initialData: EventData[];
	limit?: number;
		filter?: EventStatus;
	
}

export default function ListOfEvents({ initialData, limit,filter }: ListOfEventsProps) {
	const query = useQuery({
		queryKey: ["events","filter",filter,"limit",limit],
		queryFn: async () => (filter?getFilteredEvents(filter): getAllEvents(limit)),
		initialData
	});
	const { data, status } = query;
	if (status === "error")
		return <ErrorContainer errorMessage={"Failed to fetch events. Please try again!"} query={query} />;
	if (status === "success" && !data.length)
		return (
			<EmptyContainer message={`There are no events in the database/ for this user  ${filter ? `matching "${filter}" event filter` : ""}.`}>
				<ButtonAddEditEventsArticle>Add event</ButtonAddEditEventsArticle>
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
