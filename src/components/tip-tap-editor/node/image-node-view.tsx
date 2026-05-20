"use client";

import { cn } from "@/lib/utils";
import { useUploadThing } from "@/utils/uploadthing";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { Trash2Icon, UploadIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ImageNodeView({ node, updateAttributes, deleteNode }: NodeViewProps) {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [loading, setLoading] = useState(false);

	const { startUpload } = useUploadThing("attachment");
	useEffect(() => {
		setLoading(node.attrs.uploading);
	}, [node.attrs.uploading]);

	async function removeFile(fileKey?: string) {
		if (fileKey) {
			await fetch("/api/uploadthing/delete", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					fileKey
				})
			});
		}
	}

	async function replaceImage(file: File) {
		try {
			setLoading(true);
			await removeFile(node.attrs.fileKey);
			const uploaded = await startUpload([file]);
			if (!uploaded?.[0]) return;

			updateAttributes({
				src: uploaded[0].url,
				alt: file.name,
				title: file.name,
				fileKey: uploaded[0].key
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<NodeViewWrapper
			className={cn(
				"group relative my-4 overflow-hidden rounded-xl border",
				loading ? "pointer-events-none animate-pulse opacity-70" : "hover:shadow-lg"
			)}
		>
			<img src={node.attrs.src} className="max-h-[500px] w-full object-cover" />

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
					onClick={async () => {
						try {
							setLoading(true);
							await removeFile(node.attrs.fileKey);
						} catch (e) {
							console.error("Failed to delete file from storage", e);
						} finally {
							deleteNode();
							setLoading(false);
						}
					}}
					className="rounded-lg bg-red-500 p-2 text-white"
				>
					<Trash2Icon className="size-4" />
				</button>
			</div>
			{loading && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm text-white">
					Uploading...
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
					await replaceImage(file);
				}}
			/>
		</NodeViewWrapper>
	);
}
