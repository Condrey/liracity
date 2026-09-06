import { cn } from "@/lib/utils";
import Code from "@tiptap/extension-code";
import { Color } from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import { Highlight } from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { Table } from "@tiptap/extension-table";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import { TextAlign } from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { ColorHighlighter } from "./custom-extensions/color-highlighter";
import { ImageGallery } from "./custom-extensions/image-extension";
import { SmilieReplacer } from "./custom-extensions/smiley-replacer";

const TipTapViewer = ({ content, className }: { content: any; className?: string }) => {
	const extensions = [
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
		Superscript,
		Subscript,
		Highlight,
		TextAlign.configure({ types: ["heading", "paragraph"] }),
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
	const editor = useEditor({
		extensions,
		immediatelyRender: false,
		content: content,
		editable: false // Make it non-editable if you only want to display the content
	});

	useEffect(() => {
		if (editor) {
			editor.commands.setContent(content);
		}
	}, [editor, content]);
	return (
		<EditorContent
			editor={editor}
			className={cn(
				"typeset typeset-docs text-justify leading-snug hyphens-auto md:text-xl md:leading-relaxed",
				className
			)}
			contentEditable={false}
		/>
	);
};

export default TipTapViewer;
