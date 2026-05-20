import { useUploadThing } from "@/utils/uploadthing";
import { Editor } from "@tiptap/react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export function useUploadTiptapImageMedia(editor: Editor | null) {
	const [uploadProgress, setUploadProgress] = useState<number>(0);
	const { startUpload, isUploading } = useUploadThing("attachment", {
		onUploadProgress: (progress) => {
			setUploadProgress(progress);
		},
		onUploadError(e) {
			console.error("Upload failed", e);

			toast.error("Failed", {
				description: e.message
			});
		}
	});

	const uploadSingle = useCallback(
		async (file: File) => {
			if (!editor) return;

			const blobUrl = URL.createObjectURL(file);
			const tempId = crypto.randomUUID();

			editor
				.chain()
				.focus()
				.insertContent({
					type: "customImage",
					attrs: {
						src: blobUrl,
						alt: file.name,
						title: file.name,
						fileKey: tempId,
						uploading: true,
						tempId,
						progress: 0
					}
				})
				.run();

			try {
				const uploaded = await startUpload([file]);
				if (!uploaded?.[0]) return;

				queueMicrotask(() => {
					editor.state.doc.descendants((node, pos) => {
						if (node.type.name === "customImage" && node.attrs.tempId === tempId) {
							const tr = editor.state.tr;

							tr.setNodeMarkup(pos, undefined, {
								...node.attrs,
								src: uploaded[0].url,
								alt: file.name,
								title: file.name,
								fileKey: uploaded[0].key,
								uploading: false,
								progress: 100
							});

							editor.view.dispatch(tr);
							return false;
						}
					});
				});
			} finally {
				URL.revokeObjectURL(blobUrl);
				setUploadProgress(0);
			}
		},
		[editor, startUpload]
	);

	const uploadGallery = useCallback(
		async (files: File[]) => {
			if (!editor) return;

			const tempId = crypto.randomUUID();
			const previews = files.map((file) => ({
				src: URL.createObjectURL(file),
				alt: file.name,
				uploading: true,
				title: file.name,
				fileKey: tempId,
				tempId,
				progress: 0
			}));

			let galleryPos: number | null = null;
			editor.commands.command(({ tr, dispatch }) => {
				const pos = tr.selection.from;
				tr.insert(
					pos,
					editor.schema.nodes.imageGallery.create({
						tempId,
						images: previews
					})
				);
				galleryPos = pos + 1;

				if (dispatch) {
					dispatch(tr);
				}
				return true;
			});
			try {
				const uploadedFiles = await startUpload(files);
				if (!uploadedFiles?.length) return;

				const finalImages = uploadedFiles.map((file) => ({
					src: file.url,
					alt: file.name,
					uploading: false,
					title: file.name,
					fileKey: file.key,
					progress: 100
				}));

				// Update the gallery node with final image URLs
				// gallery node now exists exactly at insertPos
				queueMicrotask(() => {
					if (galleryPos === null) return;
					const node = editor.state.doc.nodeAt(galleryPos);

					if (!node) {
						return;
					}
					const tr = editor.state.tr;

					tr.setNodeMarkup(galleryPos, undefined, {
						...node.attrs,
						images: finalImages
					});

					editor.view.dispatch(tr);
				});
			} finally {
				previews.forEach((img) => URL.revokeObjectURL(img.src));
			}
		},
		[editor, startUpload]
	);

	return {
		uploadSingle,
		uploadGallery,
		uploadProgress,
		isUploading
	};
}
