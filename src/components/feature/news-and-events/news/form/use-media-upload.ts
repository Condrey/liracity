import { MAX_ATTACHMENTS } from "@/lib/constants";
import { Attachment } from "@/lib/types";
import { useUploadThing } from "@/utils/uploadthing";
import { useState } from "react";
import { toast } from "sonner";

export function useOtherMediaUploads() {
	const [attachments, setAttachments] = useState<Attachment[]>([]);
	const [uploadProgress, setUploadProgress] = useState<number>();

	const { startUpload, isUploading } = useUploadThing("attachment", {
		onBeforeUploadBegin(files) {
			console.log("1. UPLOAD: BEFORE_UPLOAD_BEGIN: Renaming files for submission");
			console.log({ files });
			const renamedFiles = files.map((file) => {
				const extension = file.name.split(".").pop();
				return new File([file], `news_${crypto.randomUUID()}.${extension}`, {
					type: file.type
				});
			});

			setAttachments((prev) => [...prev, ...renamedFiles.map((file) => ({ file, isUploading: true }))]);
			return renamedFiles;
		},
		onUploadProgress: setUploadProgress,
		onClientUploadComplete(res) {
			console.log("2. UPLOAD: UPLOAD_COMPLETE: Setting attachments for returning values");
			console.log({ res });
			setAttachments((prev) =>
				prev.map((a) => {
					const uploadResult = res.find((r) => r.name === a.file.name);
					if (!uploadResult) return a;

					return {
						...a,
						mediaId: uploadResult.serverData.mediaId,
						isUploading: false,
						extension: a.file.type,
						name: a.file.name
					};
				})
			);
		},
		onUploadError(e) {
			console.error("3. UPLOAD: UPLOAD_ERROR: ", e.message);

			setAttachments((prev) => prev?.filter((a) => !a.isUploading));
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
		if (attachments.length + files.length > MAX_ATTACHMENTS) {
			toast.error("MAX UPLOAD EXCEEDED", {
				description: `You can only upload up to ${MAX_ATTACHMENTS} attachments per news article.`
			});
			return;
		}
		startUpload(files);
	}

	function removeAttachment(fileName: string) {
		setAttachments((prev) => prev.filter((a) => a.file.name !== fileName));
	}

	function reset() {
		setAttachments([]);
		setUploadProgress(undefined);
	}
	function addAttachment(attachments: Attachment[]) {
		// Create a Map to remove duplicates and keep only one instance per mediaId
		const uniqueAttachmentsMap = new Map(attachments.map((attachment) => [attachment.mediaId, attachment]));
		// Convert the Map back to an array
		const uniqueAttachments = Array.from(uniqueAttachmentsMap.values());
		setAttachments((prev) => [...prev, ...uniqueAttachments]);
	}
	return {
		startUpload: handleStartUpload,
		attachments,
		addInitialAttachments: addAttachment,
		isUploading,
		uploadProgress,
		removeAttachment,
		reset
	};
}

export function useCoverImageUpload() {
	const [coverImages, setCoverImages] = useState<Attachment[]>([]);
	const [uploadProgress, setUploadProgress] = useState<number>();

	const { startUpload, isUploading } = useUploadThing("coverImageAttachment", {
		onBeforeUploadBegin(files) {
			const renamedFiles = files.map((file) => {
				const extension = file.name.split(".").pop();
				return new File([file], `news_cover_image_${crypto.randomUUID()}.${extension}`, {
					type: file.type
				});
			});

			setCoverImages((prev) => [...prev, ...renamedFiles.map((file) => ({ file, isUploading: true }))]);
			return renamedFiles;
		},
		onUploadProgress: setUploadProgress,
		onClientUploadComplete(res) {
			setCoverImages((prev) =>
				prev.map((a) => {
					const uploadResult = res.find((r) => r.name === a.file.name);
					if (!uploadResult) return a;

					return {
						...a,
						mediaId: uploadResult.serverData.mediaId,
						isUploading: false
					};
				})
			);
		},
		onUploadError(e) {
			setCoverImages((prev) => prev?.filter((a) => !a.isUploading));
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
		if (coverImages.length + files.length > MAX_ATTACHMENTS) {
			toast.error("MAX UPLOAD EXCEEDED", {
				description: `You can only upload up to ${MAX_ATTACHMENTS} attachments per news article.`
			});
			return;
		}
		startUpload(files);
	}

	function removeAttachment(fileName: string) {
		setCoverImages((prev) => prev.filter((a) => a.file.name !== fileName));
	}

	function reset() {
		setCoverImages([]);
		setUploadProgress(undefined);
	}
	function addAttachment(attachments: Attachment[]) {
		// Create a Map to remove duplicates and keep only one instance per mediaId
		const uniqueAttachmentsMap = new Map(attachments.map((attachment) => [attachment.mediaId, attachment]));
		// Convert the Map back to an array
		const uniqueAttachments = Array.from(uniqueAttachmentsMap.values());
		setCoverImages((prev) => [...prev, ...uniqueAttachments]);
	}
	return {
		startUpload: handleStartUpload,
		attachment: coverImages[coverImages.length - 1],
		addInitialAttachments: addAttachment,
		isUploading,
		uploadProgress,
		removeAttachment,
		reset
	};
}
