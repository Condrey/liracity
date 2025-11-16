"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { ItemGroup } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { EventStatus } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { EventData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useTransition } from "react";
import { getFilteredEvents } from "./action";
import ButtonAddEditEventsArticle from "./button-add-edit-event";
import EventsArticleContainer from "./event-article-container";

interface ListOfEventsProps {
	initialData: EventData[];
	limit?: number;
	filter?: EventStatus | undefined;
}

export default function ListOfEvents({ initialData, limit, filter }: ListOfEventsProps) {
	const query = useQuery({
		queryKey: ["events", "filter", filter, "limit", limit],
		queryFn: async () => getFilteredEvents(filter),
		initialData
	});
	const { data, status } = query;
	const [isPending, startTransition] = useTransition();
	const { updateSearchParamsAndNavigate } = useCustomSearchParams();

	if (status === "error")
		return <ErrorContainer errorMessage={"Failed to fetch events. Please try again!"} query={query} />;
	if (status === "success" && !data.length)
		return (
			<EmptyContainer
				message={`There are no events for this user/ there are no events in the database ${
					filter ? `matching "${filter}" event filter` : ""
				}.`}
			>
				{!!filter && (
					<LoadingButton
						loading={isPending}
						onClick={() => startTransition(() => updateSearchParamsAndNavigate("eventFilter", ""))}
						size={"lg"}
						variant={"link"}
					>
						View all events instead
					</LoadingButton>
				)}
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
