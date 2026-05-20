"use client";

import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { GalleryNodeView } from "../node/gallery-node-view";
import { ImageNodeView } from "../node/image-node-view";

export interface ImageOptionsProps {
	HTMLAttributes: Record<string, any>;
}

export const CustomImage = Node.create<ImageOptionsProps>({
	name: "customImage",
	group: "block",
	atom: true,
	selectable: true,
	draggable: true,
	// addOptions() {
	// 	return {
	// 		HTMLAttributes: {}
	// 	};
	// },
	addAttributes() {
		return {
			src: { default: null },
			alt: {
				default: ""
			},
			title: {
				default: ""
			},
			fileKey: {
				default: null
			},
			uploading: {
				default: false
			},

			tempId: {
				default: null
			},
			progress: {
				default: 0
			}
		};
	},
	parseHTML() {
		return [
			{
				tag: "img[src]"
			}
		];
	},
	renderHTML({ HTMLAttributes }) {
		return [
			"img",
			mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
				"data-type": "custom-image"
			})
		];
	},
	addNodeView() {
		return ReactNodeViewRenderer(ImageNodeView);
	}
});

export const ImageGallery = Node.create({
	name: "imageGallery",
	group: "block",
	atom: true,
	draggable: true,
	selectable: true,

	addAttributes() {
		return {
			tempId: {
				default: null
			},
			images: {
				default: []
			}
		};
	},

	parseHTML() {
		return [
			{
				tag: 'figure[data-type="image-gallery"]',
				getAttrs: (element) => {
					const ell = element as HTMLElement;

					const images = Array.from(ell.querySelectorAll("img")).map((img) => ({
						src: img.getAttribute("src"),
						alt: img.getAttribute("alt") || "",
						title: img.getAttribute("title") || "",
						fileKey: img.getAttribute("fileKey") || "",
						progress: img.getAttribute("progress") || ""
					}));
					return { images };
				}
			}
		];
	},

	renderHTML({ HTMLAttributes }) {
		const images = HTMLAttributes.images || [];

		return [
			"figure",
			{
				"data-type": "image-gallery"
			},

			...images.map((image: any) => [
				"img",
				{
					src: image.src,
					alt: image.alt,
					title: image.title,
					fileKey: image.fileKey,
					uploading: image.uploading,
					tempId: image.tempId,
					progress: image.progress
				}
			])
		];
	},

	addNodeView() {
		return ReactNodeViewRenderer(GalleryNodeView);
	}
});
