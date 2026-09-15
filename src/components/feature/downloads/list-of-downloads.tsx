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
				return <DownloadItem key={attachment.id} attachment={attachment} />;
			})}
		</div>
	);
}

function DownloadItem({ attachment }: { attachment: MediaData }) {
	const [fileSize, setFileSize] = useState<number | null | undefined>(undefined);
	const [pages, setPages] = useState<number | undefined>(undefined);
	return (
		<Item
			variant="outline"
			size="sm"
			key={attachment.id}
			className="overflow-clip rounded-xl bg-card p-0 dark:bg-foreground/5"
		>
			<ItemMedia variant={"image"} className="relative mx-auto aspect-square min-h-32 min-w-32">
				<PdfPreview
					source={attachment.url}
					onExtractionComplete={({ fileSize, pages }) => {
						setFileSize(fileSize);
						setPages(pages);
					}}
				/>
				<Badge className="absolute top-0 left-0 bg-red-500 text-white">{attachment.type}</Badge>
			</ItemMedia>
			<ItemContent className="py-2 ps-4 pe-4 sm:ps-0">
				<ItemTitle className="line-clamp-2">{attachment.name}</ItemTitle>
				<ItemDescription>{attachment.description}</ItemDescription>
				<ItemActions className="flex-wrap justify-between">
					<div className="flex flex-col justify-center text-sm text-muted-foreground">
						{pages && fileSize && (
							<div className="flex flex-row items-center font-bold">
								<DownloadIcon className="mr-1 inline size-3.5" /> {prettyBytes(fileSize)}s [{pages} pages]
							</div>
						)}
						<span className="text-xs text-amber-600 dark:text-warning">
							<HistoryIcon className="mr-1 inline size-3.5" />
							{formatDate(attachment.createdAt, "PPP")}
						</span>
					</div>
					<Button
						size="lg"
						variant="secondary"
						onClick={() => window.open(attachment.url, "_blank")}
						className="mx-auto sm:mx-0 sm:ms-auto"
					>
						<DownloadCloudIcon className="" /> Download file
					</Button>
				</ItemActions>
			</ItemContent>
		</Item>
	);
}
