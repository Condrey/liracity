"use client";

import { cn } from "@/lib/utils";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { useUploadTiptapImageMedia } from "../custom-extensions/hooks";
import { GalleryImage, ImageBlockNodeView } from "./image-node-view";

export function GalleryNodeView({ node, updateAttributes, editor }: NodeViewProps) {
	const isEditable = editor.isEditable;
	const images = node.attrs.images || [];

	const gridClass =
		images.length === 1
			? "grid-cols-1"
			: images.length === 2
				? "grid-cols-2"
				: images.length === 3
					? "grid-cols-2"
					: "grid-cols-2 md:grid-cols-3";
	return (
		<NodeViewWrapper className="my-4">
			<div className={cn("grid gap-2 overflow-hidden rounded-xl", gridClass)}>
				{images.map((image: any, index: number) => {
					return (
						<GalleryImageView
							key={index}
							image={image}
							images={images}
							index={index}
							updateAttributes={updateAttributes}
							isEditable={isEditable}
							className=""
						/>
					);
				})}
			</div>
		</NodeViewWrapper>
	);
}

function GalleryImageView({
	image,
	index,
	images,
	updateAttributes,
	isEditable,
	className
}: {
	image: GalleryImage;
	index: number;
	images: GalleryImage[];
	updateAttributes: (attrs: any) => void;
	isEditable: boolean;
	className?: string;
}) {
	const { replaceImage, removeImage, isRemoving, isUploading, uploadProgress } = useUploadTiptapImageMedia(null);

	async function replaceFile(file: File) {
		const blobUrl = URL.createObjectURL(file);
		const updated = [...images];
		updated[index] = {
			...image,
			src: blobUrl,
			alt: file.name,
			title: file.name,
			uploading: true
		};
		updateAttributes({ images: updated });
		try {
			const uploaded = await replaceImage({ newFile: file, oldFileKey: image.fileKey! });
			if (uploaded) {
				const finalImages = [...updated];
				finalImages[index] = uploaded;

				updateAttributes({ images: finalImages });
			}
		} finally {
			URL.revokeObjectURL(blobUrl);
		}
	}

	async function deleteImage() {
		try {
			await removeImage(image.fileKey);
			const updated = images.filter((_, i) => i !== index);

			updateAttributes({ images: updated });
		} catch (e) {
			console.error("Failed to delete file from storage", e);
		}
	}

	return (
		<ImageBlockNodeView
			image={image}
			isRemoving={isRemoving}
			isUploading={isUploading}
			onDelete={deleteImage}
			onReplace={replaceFile}
			uploadProgress={uploadProgress}
			isEditable={isEditable}
			className={className}
		/>
	);
}
