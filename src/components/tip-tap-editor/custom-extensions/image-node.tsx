"use client";

import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
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
