"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { Trash2Icon, UploadIcon } from "lucide-react";
import { useRef } from "react";
import { useUploadTiptapImageMedia } from "../custom-extensions/hooks";

export function ImageNodeView({ node, updateAttributes, deleteNode, editor }: NodeViewProps) {
	const isEditable = editor.isEditable;
	const { replaceImage, removeImage, isRemoving, isUploading, uploadProgress } = useUploadTiptapImageMedia(null);

	async function replaceFile(file: File) {
		const blobUrl = URL.createObjectURL(file);
		const updated = {
			src: blobUrl,
			alt: file.name,
			title: file.name,
			uploading: true
		};
		updateAttributes(updated);
		try {
			const uploaded = await replaceImage({ newFile: file, oldFileKey: node.attrs.fileKey });
			if (uploaded) {
				updateAttributes(uploaded);
			}
		} finally {
			URL.revokeObjectURL(blobUrl);
		}
	}

	async function deleteImage() {
		try {
			await removeImage(node.attrs.fileKey);
		} catch (e) {
			console.error("Failed to delete file from storage", e);
		} finally {
			deleteNode();
		}
	}

	return (
		<NodeViewWrapper>
			<ImageBlockNodeView
				image={node.attrs as GalleryImage}
				onDelete={deleteImage}
				onReplace={replaceFile}
				isRemoving={isRemoving}
				isUploading={isUploading}
				uploadProgress={uploadProgress}
				isEditable={isEditable}
				className="m-auto min-w-2/3"
			/>
		</NodeViewWrapper>
	);
}

export type GalleryImage = {
	src: string;
	alt?: string;
	title?: string;
	fileKey?: string;
	uploading?: boolean;
	progress?: number;
};
type ImageBlockProps = {
	image: GalleryImage;
	onDelete: () => void;
	onReplace: (file: File) => Promise<void>;
	isRemoving: boolean;
	isUploading: boolean;
	uploadProgress: number;
	isEditable: boolean;
	className?: string;
};

export function ImageBlockNodeView({
	image,
	onDelete,
	onReplace,
	isRemoving,
	isUploading,
	uploadProgress,
	isEditable,
	className
}: ImageBlockProps) {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	return (
		<div
			className={cn(
				"group relative my-4 max-w-fit overflow-hidden rounded-xl border",
				(isRemoving || isUploading) && "pointer-events-none animate-pulse opacity-70",
				isEditable && "hover:shadow-lg",
				className
			)}
		>
			<img src={image.src} className="max-h-auto size-full object-cover" />

			{isEditable && (
				<div className="absolute top-2 right-2 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
					<button
						type="button"
						onClick={() => fileInputRef.current?.click()}
						title="Replace image"
						className="rounded-lg bg-black/70 p-2 text-white"
					>
						<UploadIcon className="size-4" />
					</button>
					<button
						type="button"
						title="Delete this image"
						onClick={onDelete}
						className="rounded-lg bg-red-500 p-2 text-white"
					>
						<Trash2Icon className="size-4" />
					</button>
				</div>
			)}
			{isRemoving && (
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 text-sm text-white">
					Deleting old image...
					<Progress value={uploadProgress} className="max-w-xs" />
				</div>
			)}
			{isUploading && (
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/40 text-sm text-white">
					Replacing new image...{uploadProgress}%
					<Progress value={uploadProgress} className="max-w-xs" />
				</div>
			)}
			<input
				ref={fileInputRef}
				type="file"
				accept="image/*"
				className="hidden"
				onChange={async (e) => {
					const file = e.target.files?.[0];
					if (!file) return;
					await onReplace(file).then(() => {
						fileInputRef.current!.value = "";
						e.target.value = "";
						URL.revokeObjectURL(image.src);
					});
				}}
			/>
		</div>
	);
}
