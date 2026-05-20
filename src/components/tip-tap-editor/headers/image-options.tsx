import { useUploadThing } from "@/utils/uploadthing";
import { Editor } from "@tiptap/react";
import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { UploadThingError } from "uploadthing/server";
import { useUploadTiptapImageMedia } from "../custom-extensions/hooks";

export default function ImageToolbarButton({ editor }: { editor: Editor }) {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [loading, setLoading] = useState(false);
	const {
		isUploading,
		uploadGallery: sendMany,
		uploadProgress,
		uploadSingle: sendSingle
	} = useUploadTiptapImageMedia(editor);
	const { startUpload } = useUploadThing("attachment");

	async function uploadSingle(file: File) {
		// temp Local preview
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
					tempId
				}
			})
			.run();

		try {
			setLoading(true);

			const uploaded = await startUpload([file]);
			if (!uploaded?.[0]) return;

			// update the inserted node
			editor.state.doc.descendants((node, pos) => {
				if (node.type.name === "customImage" && node.attrs.tempId === tempId) {
					editor
						.chain()
						.focus()
						.command(({ tr }) => {
							tr.setNodeMarkup(pos, undefined, {
								...node.attrs,
								src: uploaded[0].url,
								alt: file.name,
								title: file.name,
								fileKey: uploaded[0].key,
								uploading: false
							});
							return true;
						})
						.run();
				}
			});
		} finally {
			setLoading(false);
			inputRef.current!.value = "";
			// Clean up blob memory
			URL.revokeObjectURL(blobUrl);
		}
	}

	async function uploadGallery(files: File[]) {
		// Insert temp nodes for all images
		const tempId = crypto.randomUUID();
		const previews = files.map((file) => ({
			src: URL.createObjectURL(file),
			alt: file.name,
			uploading: true,
			title: file.name,
			fileKey: tempId,
			tempId
		}));

		let galleryPos: number | null = null;
		editor.commands.command(({ tr, dispatch }) => {
			const pos = tr.selection.from;
			console.log("BLOB: Inserting gallery at position:", pos);
			tr.insert(
				pos,
				editor.schema.nodes.imageGallery.create({
					tempId,
					images: previews
				})
			);
			// galleryPos = tr.mapping.map(pos);
			galleryPos = pos + 1;

			console.log("BLOB: Gallery inserted at position:", { galleryPos, newPos: tr.mapping.map(pos) });
			if (dispatch) {
				dispatch(tr);
			}
			const node = tr.doc.nodeAt(galleryPos);
			console.log("BLOB: TR Node at gallery position after insert:", node);
			return true;
		});
		const node = editor.state.doc.nodeAt(galleryPos ?? 0);
		console.log("BLOB: STATE Node at gallery position after insert:", node, "pos", galleryPos);
		try {
			setLoading(true);

			const uploadedFiles = await startUpload(files);
			if (!uploadedFiles?.length) return;

			const finalImages = uploadedFiles.map((file) => ({
				src: file.url,
				alt: file.name,
				uploading: false,
				title: file.name,
				fileKey: file.key
			}));

			// Update the gallery node with final image URLs
			// gallery node now exists exactly at insertPos
			queueMicrotask(() => {
				if (galleryPos === null) return;
				const node = editor.state.doc.nodeAt(galleryPos);

				if (!node) {
					console.log("CLOUD: Gallery node not found at expected position", galleryPos);
					return;
				}
				console.log("CLOUD: Updating gallery node at position:", galleryPos, "with images:", finalImages);
				const tr = editor.state.tr;

				tr.setNodeMarkup(galleryPos, undefined, {
					...node.attrs,
					images: finalImages
				});

				editor.view.dispatch(tr);
			});
		} catch (e) {
			console.error("UploadErr: ", e);
			if (e instanceof UploadThingError) {
				toast.error(e.message);
			}
		} finally {
			setLoading(false);

			if (inputRef.current) {
				inputRef.current.value = "";
			}
			previews.forEach((img) => URL.revokeObjectURL(img.src));
		}
	}

	return (
		<>
			<button
				type="button"
				onClick={() => inputRef.current?.click()}
				className="flex h-9 items-center gap-2 rounded-lg border px-3 transition-colors hover:bg-muted"
			>
				<ImagePlus className="size-4" />
				{isUploading ? "Uploading..." : "Image"}
			</button>
			<input
				multiple
				ref={inputRef}
				type="file"
				accept="image/*"
				className="hidden"
				onChange={async (e) => {
					const files = Array.from(e.target.files || []);

					if (!files.length) return;

					// single image
					if (files.length === 1) {
						await sendSingle(files[0]);
						// await uploadSingle(files[0]);
						return;
					}

					// multiple images
					await sendMany(files);
					// await uploadGallery(files);
				}}
			/>
		</>
	);
}
