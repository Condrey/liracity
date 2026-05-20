"use client";

import { cn } from "@/lib/utils";
import { useUploadThing } from "@/utils/uploadthing";
import { NodeViewWrapper } from "@tiptap/react";
import { useEffect, useRef, useState } from "react";

export function GalleryNodeView({ node, updateAttributes }: any) {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [loading, setLoading] = useState(false);

	const { startUpload } = useUploadThing("attachment");
	useEffect(() => {
		setLoading(node.attrs.uploading);
	}, [node.attrs.uploading]);

	const images = node.attrs.images || [];
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
				{images.map((image: any, index: number) => (
					<div key={index} className="relative overflow-hidden rounded-xl border">
						<img src={image.src} alt={image.alt} className="h-full w-full object-cover" />

						{image.uploading && (
							<div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
								Uploading...
							</div>
						)}
					</div>
				))}
			</div>
		</NodeViewWrapper>
	);
}
