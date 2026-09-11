import { MediaData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllDownloads } from "./action";

export const downloadsQuery = (initialData: MediaData[]) =>
	useQuery({
		queryKey: ["downloads"],
		queryFn: getAllDownloads,
		initialData
	});
