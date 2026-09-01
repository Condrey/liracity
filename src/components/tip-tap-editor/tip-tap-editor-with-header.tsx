"use client";

import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Typography from "@tiptap/extension-typography";

import { cn } from "@/lib/utils";
import Code from "@tiptap/extension-code";
import { Color } from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ColorHighlighter } from "./custom-extensions/color-highlighter";
import { SmilieReplacer } from "./custom-extensions/smiley-replacer";

import { useDropzone } from "@uploadthing/react";
import { ClipboardEvent, useEffect } from "react";
import { useUploadTiptapImageMedia } from "./custom-extensions/hooks";
import { CustomImage, ImageGallery } from "./custom-extensions/image-extension";
import "./styles.css";
import TipTapEditorHeader from "./headers/header";

interface TipTapEditorWithHeaderProps {
	className?: string;
	value?: string;
	placeholder?: string;
	includeHeader?: boolean;
	onChange: (content: string) => void;
}
export const useTipTapEditor = ({ value, placeholder, onChange }: TipTapEditorWithHeaderProps) => {
	const extensions = [
		CustomImage,
		ImageGallery,
		Color.configure({ types: [TextStyle.name, ListItem.name] }),
		TextStyle,
		StarterKit.configure({
			bulletList: {
				keepMarks: true,
				keepAttributes: false
			},
			orderedList: {
				keepMarks: true,
				keepAttributes: false
			}
		}),
		TextAlign.configure({
			types: ["heading", "paragraph"]
		}),
		Highlight,
		Placeholder.configure({
			placeholder: placeholder
		}),
		Superscript,
		Subscript,
		Table.configure({
			resizable: true
		}),
		TableCell,
		TableHeader,
		TableRow,
		Typography,
		Code,
		Document,
		Paragraph,
		Text,
		ColorHighlighter,
		SmilieReplacer,
		Dropcursor,
		Image,
		ListItem,
		TextStyle,
		Link.configure({
			openOnClick: true,
			autolink: true,
			defaultProtocol: "https",
			protocols: ["http", "https", "ftp", "mailto"],
			linkOnPaste: true,
			isAllowedUri: (url, ctx) => {
				try {
					// construct URL
					const parsedUrl = url.includes(":") ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`);

					// use default validation
					if (!ctx.defaultValidate(parsedUrl.href)) {
						return false;
					}

					// disallowed protocols
					const disallowedProtocols = ["ftp", "file", "mailto"];
					const protocol = parsedUrl.protocol.replace(":", "");

					if (disallowedProtocols.includes(protocol)) {
						return false;
					}

					// only allow protocols specified in ctx.protocols
					const allowedProtocols = ctx.protocols.map((p) => (typeof p === "string" ? p : p.scheme));

					if (!allowedProtocols.includes(protocol)) {
						return false;
					}

					// disallowed domains
					const disallowedDomains = ["example-phishing.com", "malicious-site.net"];
					const domain = parsedUrl.hostname;

					if (disallowedDomains.includes(domain)) {
						return false;
					}

					// all checks have passed
					return true;
				} catch {
					return false;
				}
			},
			shouldAutoLink: (url) => {
				try {
					// construct URL
					const parsedUrl = url.includes(":") ? new URL(url) : new URL(`https://${url}`);

					// only auto-link if the domain is not in the disallowed list
					const disallowedDomains = ["example-no-autolink.com", "another-no-autolink.com"];
					const domain = parsedUrl.hostname;

					return !disallowedDomains.includes(domain);
				} catch {
					return false;
				}
			}
		})
	];
	return useEditor({
		immediatelyRender: false,
		extensions,
		content: value,
		shouldRerenderOnTransaction: false,
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML());
		}
	});
};

export default function TipTapEditorWithHeader({
	className,
	value = "",
	placeholder = "type here",
	onChange,
	includeHeader = true
}: TipTapEditorWithHeaderProps) {
	const editor = useTipTapEditor({ onChange, value, placeholder });
	const { uploadSingle, uploadGallery } = useUploadTiptapImageMedia(editor);

	useEffect(() => {
		if (!editor) return;

		const current = editor.getHTML();

		if (current !== value) {
			editor.commands.setContent(value || "");
		}
	}, [editor, value]);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop(acceptedFiles) {
			// for images
			const files = Array.from(acceptedFiles)
				.filter((item) => item.type.startsWith("image/"))
				.filter(Boolean) as File[];
			if (!files.length) {
				return false;
			}

			if (files.length === 1) {
				uploadSingle(files[0]);
			} else {
				uploadGallery(files);
			}
		}
	});
	const { onClick, ...routeprops } = getRootProps();

	function onPaste(e: ClipboardEvent<HTMLInputElement>) {
		const files = Array.from(e.clipboardData.items)
			.filter((item) => item.type.startsWith("image/"))
			.map((item) => item.getAsFile())
			.filter(Boolean) as File[];
		if (!files.length) {
			return e;
		} else {
			if (files.length === 1) {
				uploadSingle(files[0]);
			} else {
				uploadGallery(files);
			}
		}
	}

	// useEffect(() => {
	// 	function onPasteUpload(event: Event) {
	// 		const customEvent = event as CustomEvent<File[]>;
	// 		const files = customEvent.detail;

	// 		if (!files?.length) {
	// 			console.log("There were no image files pasted.");

	// 			return;
	// 		}
	// 		console.log("The pasted value contains images: ", { files });

	// 		if (files.length === 1) {
	// 			uploadSingle(files[0]);
	// 		} else {
	// 			uploadGallery(files);
	// 		}
	// 	}
	// 	window.addEventListener("tiptap-upload-images", onPasteUpload);
	// }, [value, editor]);

	return (
		<div
			className={cn(
				"typeset typeset-docs flex size-full max-h-none flex-col gap-y-3 overflow-y-auto rounded-md border border-input bg-background pb-4 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none md:max-h-[20rem]",
				isDragActive && "bg-success/10 ring-success",
				className
			)}
			{...routeprops}
		>
			{includeHeader && <TipTapEditorHeader editor={editor} />}
			<EditorContent
				editor={editor}
				onPaste={onPaste}
				className={cn("min-h-[100px] flex-1 list-disc px-3 *:h-full *:w-full")}
				{...getRootProps()}
			/>
		</div>
	);
}
