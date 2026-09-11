"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { PdfPreview } from "@/components/uploadthing/pdf-preview";
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
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{data.map((attachment) => (
				<Item variant="outline" key={attachment.id} className="">
					<ItemMedia>
						<PdfPreview source={attachment.url} />
					</ItemMedia>
					<ItemContent>
						<ItemTitle className="line-clamp-2">{attachment.name}</ItemTitle>
						<ItemDescription>{attachment.description}</ItemDescription>
					</ItemContent>
					<ItemActions>
						<Button size="icon-lg" variant="secondary" onClick={() => window.open(attachment.url, "_blank")}>
							<DownloadCloudIcon className="" />
						</Button>
					</ItemActions>
				</Item>
			))}
		</div>
	);
}
