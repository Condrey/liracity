"use client";

import { MAX_ATTACHMENTS } from "@/lib/constants";
import { Attachment } from "@/lib/types";
import { useUploadThing } from "@/utils/uploadthing";
import { useState } from "react";
import { toast } from "sonner";

export function useMediaSingleUpload() {
	const [downloads, setDownloads] = useState<Attachment[]>([]);
	const [uploadProgress, setUploadProgress] = useState<number>();

	const { startUpload, isUploading } = useUploadThing("attachment", {
		onBeforeUploadBegin(files) {
			setDownloads((prev) => [...prev, ...files.map((file) => ({ file, isUploading: true }))]);
			return files;
		},
		onUploadProgress: setUploadProgress,
		onClientUploadComplete(res) {
			setDownloads((prev) =>
				prev.map((a) => {
					const uploadResult = res.find((r) => r.name === a.file.name);
					if (!uploadResult) return a;
					const { size, type, name } = uploadResult;
					return {
						...a,
						mediaId: uploadResult.serverData.mediaId,
						isUploading: false,
						size,
						extension: type,
						name
					};
				})
			);
		},
		onUploadError(e) {
			setDownloads((prev) => prev?.filter((a) => !a.isUploading));
			toast.error("Failed", {
				description: e.message
			});
		}
	});

	function handleStartUpload(files: File[]) {
		if (isUploading) {
			toast.info("Hold on a  bit", {
				description: "Please wait for the current upload to finish."
			});
			return;
		}
		if (downloads.length + files.length > MAX_ATTACHMENTS) {
			toast.error("MAX UPLOAD EXCEEDED", {
				description: `You can only upload up to ${MAX_ATTACHMENTS} attachments per event.`
			});
			return;
		}
		startUpload(files);
	}

	function removeAttachment(fileName: string) {
		setDownloads((prev) => prev.filter((a) => a.file.name !== fileName));
	}

	function reset() {
		setDownloads([]);
		setUploadProgress(undefined);
	}

	function addAttachment(attachments: Attachment[]) {
		// Create a Map to remove duplicates and keep only one instance per mediaId
		const uniqueAttachmentsMap = new Map(attachments.map((attachment) => [attachment.mediaId, attachment]));
		// Convert the Map back to an array
		const uniqueAttachments = Array.from(uniqueAttachmentsMap.values());
		setDownloads((prev) => [...prev, ...uniqueAttachments]);
	}
	return {
		startUpload: handleStartUpload,
		attachment: downloads[downloads.length - 1],
		addInitialAttachments: addAttachment,
		isUploading,
		uploadProgress,
		removeAttachment,
		reset
	};
}
