"use client";

import { Attachment } from "@/lib/types";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { PdfPreview } from "./pdf-preview";

interface AttachmentPreviewProps {
	isDeleting?: boolean;
	uploadProgress?: number;
	attachment: Attachment;
	className?: string;
	onRemoveClicked: () => void;
}

export function SingleAttachmentPreview({
	attachment: { file, isUploading },
	uploadProgress,
	className,
	isDeleting = false,
	onRemoveClicked
}: AttachmentPreviewProps) {
	const src = URL.createObjectURL(file);
	const fileTYpe = file.type;

	return (
		<div className={cn("relative mx-auto flex size-fit flex-col items-center justify-center", className)}>
			{fileTYpe === "application/pdf" ? (
				<PdfPreview source={src} fileName={file.name} className={className} />
			) : file.type.startsWith("image") ? (
				<Image
					src={src}
					alt="Attachment preview"
					width={1200}
					height={1200}
					className="aspect-square size-fit min-h-20 rounded-2xl"
				/>
			) : (
				<video controls className="aspect-square size-fit min-h-20 rounded-2xl">
					<source src={src} type={file.type} />
				</video>
			)}

			{isUploading && (
				<div className="absolute flex size-full animate-pulse flex-col items-center justify-center rounded-md bg-green-700/90 p-3 text-white">
					<span className="font-mono text-2xl oldstyle-nums">{uploadProgress ?? 0}%</span>
					<span>uploading...</span>
				</div>
			)}
			{!isUploading && (
				<Button
					onClick={onRemoveClicked}
					disabled={isDeleting}
					title="Remove media"
					size={isDeleting ? "sm" : "icon"}
					variant={"destructive"}
					className="absolute top-3 right-3 rounded-full"
				>
					{isDeleting ? (
						<span className="text-xs">
							<Spinner className="mr-2 inline" />
							deleting
						</span>
					) : (
						<XIcon className="size-4" />
					)}
				</Button>
			)}
		</div>
	);
}
