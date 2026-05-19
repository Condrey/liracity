import { useUploadThing } from "@/utils/uploadthing";
import { Editor } from "@tiptap/react";
import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

export default function ImageToolbarButton({ editor }: { editor: Editor }) {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [loading, setLoading] = useState(false);

	const { startUpload } = useUploadThing("coverImageAttachment");

	async function onSelect(file: File) {
		try {
			setLoading(true);

			const uploaded = await startUpload([file]);
			if (!uploaded?.[0]) return;

			editor
				?.chain()
				.focus()
				.insertContent({
					type: "customImage",
					attrs: {
						src: uploaded[0].url,
						alt: file.name,
						title: file.name,
						fileKey: uploaded[0].key
					}
				})
				.run();
		} finally {
			setLoading(false);
			inputRef.current!.value = "";
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
				{loading ? "Uploading..." : "Image"}
			</button>
			<input
				ref={inputRef}
				type="file"
				accept="image/*"
				className="hidden"
				onChange={async (e) => {
					const file = e.target.files?.[0];
					if (!file) return;
					await onSelect(file);
				}}
			/>
		</>
	);
}
