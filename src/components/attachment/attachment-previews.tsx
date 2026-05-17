import { Attachment } from "@/lib/types";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import Image from "next/image";

interface AttachmentPreviewsProps {
	attachments: Attachment[];
	onRemoveClicked: (attachment: Attachment) => void;

	// removeAttachment: (filename: string) => void;
}

export function AttachmentPreviews({ attachments, onRemoveClicked }: AttachmentPreviewsProps) {
	return (
		<div className={cn("flex flex-col gap-3", attachments.length > 1 && "sm:grid sm:grid-cols-2")}>
			{attachments.map((attachment) => (
				<AttachmentPreview
					key={attachment.file.name}
					attachment={attachment}
					onRemoveClicked={() => onRemoveClicked(attachment)}
				/>
			))}
		</div>
	);
}

interface AttachmentPreviewProps {
	attachment: Attachment;
	onRemoveClicked: () => void;
}

export function AttachmentPreview({ attachment: { file, isUploading }, onRemoveClicked }: AttachmentPreviewProps) {
	const src = URL.createObjectURL(file);

	return (
		<div className={cn("relative mx-auto size-fit", isUploading && "opacity-50")}>
			{file.type.startsWith("image") ? (
				<Image
					src={src}
					alt="Attachment preview"
					width={1200}
					height={1200}
					className="aspect-square size-fit min-h-[80px] rounded-2xl"
				/>
			) : (
				<video controls className="aspect-square size-fit min-h-[80px] rounded-2xl">
					<source src={src} type={file.type} />
				</video>
			)}

			{!isUploading && (
				<button
					onClick={onRemoveClicked}
					title="Remove media"
					className="absolute top-3 right-3 rounded-full bg-destructive p-1.5 text-destructive-foreground transition-colors hover:bg-foreground/60"
				>
					<XIcon size={20} />
				</button>
			)}
		</div>
	);
}
