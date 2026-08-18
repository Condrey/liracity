import { Media } from "@/generated/prisma/client";
import { MediaData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import ArticleImage from "./article-image";

interface ArticleMediaProps {
	media: MediaData[] | undefined;
}

export default function ArticleMedia({ media }: ArticleMediaProps) {
	const [selectedMedia, setSelectedMedia] = useState<Media | undefined>(media?.[0]);

	useEffect(() => {
		setSelectedMedia(media?.[0]);
	}, [media]);

	if (!media?.length) return null;

	const isImage = selectedMedia?.type === "IMAGE";

	return (
		<div className="h-fit basis-2/5 space-y-5 md:sticky md:top-10">
			<div className="aspect-square bg-secondary">
				{isImage && selectedMedia?.url ? (
					<Zoom key={selectedMedia.url}>
						<ArticleImage mediaIdentifier={selectedMedia.url} alt={selectedMedia.id} width={1000} height={1000} />
					</Zoom>
				) : selectedMedia?.url ? (
					<div className="flex size-full items-center bg-black">
						<video controls className="size-full">
							<source src={selectedMedia.url} type={`video/${selectedMedia.format}`} />
						</video>
					</div>
				) : null}
			</div>
			{media.length > 1 && (
				<div className="flex flex-wrap gap-5">
					{media.map((mediaItem) => (
						<MediaPreview
							key={mediaItem.id}
							mediaItem={mediaItem}
							isSelected={mediaItem.id === selectedMedia?.id}
							onSelect={() => setSelectedMedia(mediaItem)}
						/>
					))}
				</div>
			)}
		</div>
	);
}

interface MediaPreviewProps {
	mediaItem: MediaData;
	isSelected: boolean;
	onSelect: () => void;
}

function MediaPreview({ mediaItem, isSelected, onSelect }: MediaPreviewProps) {
	const imageUrl = mediaItem.url;

	return (
		<div className={cn("relative cursor-pointer bg-secondary", isSelected && "outline outline-primary")}>
			<ArticleImage mediaIdentifier={imageUrl} alt={mediaItem.id} width={100} height={100} onMouseEnter={onSelect} />
			{imageUrl && (
				<span className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/40">
					<PlayIcon className="size-5 text-white/60" />
				</span>
			)}
		</div>
	);
}
