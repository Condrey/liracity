"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { MediaData } from "@/lib/types";
import { DownloadCloudIcon, PlusIcon } from "lucide-react";
import ButtonAddEditDownload from "./button-add-edit-download";
import { downloadsQuery } from "./query";

interface Props {
	initialData: MediaData[];
}
export default function ListOfDownloads({ initialData }: Props) {
	const query = downloadsQuery(initialData);
	const { data, status } = query;

	if (status === "error") {
		return <ErrorContainer errorMessage="Failed to fetch downloads" query={query} />;
	}
	if (!data.length) {
		return (
			<EmptyContainer
				message="There are no downloads in the system yet"
				description="All downloads shall appear here."
				icon={DownloadCloudIcon}
			>
				<ButtonAddEditDownload variant="outline">
					<PlusIcon /> Downloadable
				</ButtonAddEditDownload>
			</EmptyContainer>
		);
	}

	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
