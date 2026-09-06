import { EventData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getEventBySlug } from "./action";

export const useEventBySlugQuery = (slug: string, initialData: EventData) =>
	useQuery({
		queryKey: ["event", "slug", slug],
		queryFn: async () => getEventBySlug(slug),
		initialData
	});
