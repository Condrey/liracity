"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { PdfPreview } from "@/components/uploadthing/pdf-preview";
import { MediaData } from "@/lib/types";
import { formatDate } from "date-fns";
import { DownloadCloudIcon, DownloadIcon, HistoryIcon, PlusIcon } from "lucide-react";
import prettyBytes from "pretty-bytes";
import { useState } from "react";
import ButtonAddEditDownload from "./button-add-edit-download";
import { downloadsQuery } from "./query";
import DownloadItemContainer from "./download-item-container";

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
		<div className="grid grid-cols-1 gap-4 *:flex-1 md:grid-cols-2">
			{data.map((attachment) => {
				return <DownloadItemContainer key={attachment.id} attachment={attachment} />;
			})}
		</div>
	);
}
