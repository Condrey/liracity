import { EventData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getEventBySlug, getFilteredEvents } from "./action";

export const useEventBySlugQuery = (slug: string, initialData: EventData) =>
	useQuery({
		queryKey: ["event", "slug", slug],
		queryFn: async () => getEventBySlug(slug),
		initialData
	});

export const useEventsByFilterQuery = ({
	filter,
	limit,
	initialData
}: {
	filter: string;
	limit: number;
	initialData: EventData[];
}) =>
	useQuery({
		queryKey: ["events", "filter", filter, "limit", limit],
		queryFn: async () => getFilteredEvents(filter),
		initialData
	});
