"use client";

import { Attachment as DocumentAttachment } from "@/lib/types";
import { cn } from "@/lib/utils";
import { PaperclipIcon, XIcon } from "lucide-react";
import Image from "next/image";
import prettyBytes from "pretty-bytes";
import {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentGroup,
	AttachmentMedia,
	AttachmentTitle
} from "../ui/attachment";
import { Spinner } from "../ui/spinner";
import { PdfPreview } from "./pdf-preview";

interface AttachmentPreviewsProps {
	uploadProgress?: number;
	isDeleting?: boolean;
	attachments: DocumentAttachment[];
	onRemoveClicked: (attachment: DocumentAttachment) => void;
}

export function AttachmentPreviews({
	attachments,
	uploadProgress,
	isDeleting = false,
	onRemoveClicked
}: AttachmentPreviewsProps) {
	if (!attachments.length) return null;

	return (
		<div className="space-y-4">
			{/* for uploaded attachments */}
			<AttachmentGroup className={cn("space-y-2")}>
				{attachments.map((attachment, index) => {
					const { file, extension, mediaId } = attachment;
					const src = URL.createObjectURL(file);
					const fileTYpe = file.type;

					return (
						<Attachment
							key={mediaId ?? index}
							orientation={"vertical"}
							state="done"
							className={cn(!mediaId && "hidden")}
						>
							<AttachmentActions>
								<AttachmentAction
									onClick={() => onRemoveClicked(attachment)}
									disabled={isDeleting}
									title="Remove media"
									aria-label="Remove media"
								>
									{isDeleting ? <Spinner /> : <XIcon />}
								</AttachmentAction>
							</AttachmentActions>

							<AttachmentMedia variant={"image"}>
								{fileTYpe === "application/pdf" ? (
									<PdfPreview source={src} fileName={file.name} />
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
							</AttachmentMedia>
							<AttachmentContent>
								<AttachmentTitle>{file.name}</AttachmentTitle>
								<AttachmentDescription>
									<span className="uppercase">{extension}</span> · {prettyBytes(file.size)}
								</AttachmentDescription>
							</AttachmentContent>
						</Attachment>
					);
				})}
			</AttachmentGroup>

			{/* for uploading attachments  */}
			<div className={cn("space-y-2")}>
				{attachments.map((attachment) => {
					return (
						<Attachment
							key={attachment.mediaId}
							state={attachment.isUploading && (uploadProgress || 0) < 100 ? "uploading" : "done"}
							className={cn(!!attachment.mediaId && "hidden")}
						>
							<AttachmentMedia>{attachment.isUploading ? <Spinner /> : <PaperclipIcon />}</AttachmentMedia>
							<AttachmentContent>
								<AttachmentTitle>{attachment.file.name}</AttachmentTitle>
								<AttachmentDescription>
									<span className="uppercase">{attachment.extension}</span> · {prettyBytes(attachment.file.size)}
								</AttachmentDescription>
								{attachment.isUploading && <AttachmentDescription>uploading · {uploadProgress}%</AttachmentDescription>}
							</AttachmentContent>
							<AttachmentActions>
								<AttachmentAction
									onClick={() => onRemoveClicked(attachment)}
									disabled={isDeleting}
									title="Remove media"
									aria-label="Remove media"
								>
									{isDeleting ? <Spinner /> : <XIcon />}
								</AttachmentAction>
							</AttachmentActions>
						</Attachment>
					);
				})}
			</div>
		</div>
	);
}
