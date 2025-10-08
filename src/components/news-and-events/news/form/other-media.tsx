import { AttachmentPreviews } from "@/components/attachment/attachment-previews";
import { ButtonAddMultipleAttachments } from "@/components/attachment/button-add-attachment";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { MAX_ATTACHMENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDropzone } from "@uploadthing/react";
import { UploadCloudIcon } from "lucide-react";
import { ClipboardEvent, useEffect } from "react";
import { useDeleteNewsArticleMediaMutation } from "./mutation";
import { useOtherMediaUploads } from "./use-media-upload";

export default function OtherMedia({
	newsArticleId,
	mediaIds: setMediaIds
}: {
	newsArticleId: string;
	mediaIds: (ids: string[]) => void;
}) {
	const mediaMutation = useDeleteNewsArticleMediaMutation();

	const {
		startUpload,
		attachments,
		addInitialAttachments,
		isUploading,
		uploadProgress,
		removeAttachment,
		reset: resetMediaUploads
	} = useOtherMediaUploads();

	useEffect(() => {
		setMediaIds(attachments.map((a) => a.mediaId!).filter(Boolean) as string[]);
	}, [attachments]);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: startUpload
	});
	const { onClick, ...routeprops } = getRootProps();

	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				bold: false,
				italic: false
			}),
			Placeholder.configure({
				placeholder: "...or paste media url here"
			})
		],
		immediatelyRender: false
	});
	function onPaste(e: ClipboardEvent<HTMLInputElement>) {
		const files = Array.from(e.clipboardData.items)
			.filter((item) => item.kind === "file")
			.map((item) => item.getAsFile()) as File[];
		startUpload(files);
	}
	return (
		<FormItem className="flex flex-col gap-3">
			<FormLabel>Additional Media (image/video) ~ MAX {MAX_ATTACHMENTS}</FormLabel>
			{attachments.length < MAX_ATTACHMENTS && (
				<div className="space-y-4">
					<div
						{...routeprops}
						className={cn(
							"flex h-[200px] w-full items-center justify-center rounded-2xl px-5 py-3 outline-dashed outline-2 outline-border",
							isDragActive && "outline-primary"
						)}
					>
						<input
							// type="file"
							{...getInputProps()}
							className="size-full min-h-10"
						/>
						{isDragActive ? (
							<p className="text-center text-primary">Drop it here ...</p>
						) : (
							<div className="flex flex-col items-center gap-3">
								<UploadCloudIcon size={50} className="" strokeWidth={1.0} />
								<p className="text-center text-muted-foreground">{`Drag 'n' drop some media, or click to select image`}</p>
								<ButtonAddMultipleAttachments
									onFilesSelected={startUpload}
									disabled={isUploading || attachments.length >= MAX_ATTACHMENTS}
								>
									Choose
								</ButtonAddMultipleAttachments>
							</div>
						)}
					</div>
					<EditorContent
						editor={editor}
						onPaste={onPaste}
						className={cn(
							"size-full max-h-[20rem] overflow-y-auto  rounded-md bg-secondary/20 h-12 dark:bg-background px-5 py-3"
						)}
					/>
				</div>
			)}
			{!!attachments.length && (
				<AttachmentPreviews
					attachments={attachments}
					onRemoveClicked={(attachment) => {
						removeAttachment(attachment.file.name);
						mediaMutation.mutate({
							newsArticleId,
							mediaId: attachment.mediaId!
						});
					}}
				/>
			)}
			{}
			{isUploading && (
				<>
					<span className="text-sm">{uploadProgress ?? 0}</span>
					<Spinner className="size-5 text-primary" />
				</>
			)}
		</FormItem>
	);
}
