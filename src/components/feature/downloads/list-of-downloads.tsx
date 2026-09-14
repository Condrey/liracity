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
import { Badge } from "@/components/ui/badge";

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
				return (
					<Item variant="outline" size='sm' key={attachment.id} className="p-0 rounded-xl overflow-clip bg-card">
						<ItemMedia variant={"image"} className="aspect-square relative min-h-32 min-w-32">
							<PdfPreview source={attachment.url} />
							<Badge className='absolute top-0 bg-red-500 text-white left-0'>{attachment.type}</Badge>
						</ItemMedia>
						<ItemContent className='pe-4'>
							<ItemTitle className="line-clamp-2">{attachment.name}</ItemTitle>
							<ItemDescription>{attachment.description}</ItemDescription>
							<ItemActions className='justify-end '>
								<Button size="lg" variant="secondary" onClick={() => window.open(attachment.url, "_blank")}>
									<DownloadCloudIcon className="" /> Download file
								</Button>
							</ItemActions>
						</ItemContent>
					</Item>
				);
			})}
		</div>
	);
}
