import { Editor } from "@tiptap/react";
import { ImagePlus } from "lucide-react";
import { useRef } from "react";
import { useUploadTiptapImageMedia } from "../custom-extensions/hooks";

export default function ImageToolbarButton({ editor }: { editor: Editor }) {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const {
		isUploading,
		uploadGallery: sendMany,
		uploadProgress,
		uploadSingle: sendSingle
	} = useUploadTiptapImageMedia(editor);

	return (
		<>
			<button
				type="button"
				onClick={() => inputRef.current?.click()}
				className="flex h-9 items-center gap-2 rounded-lg border px-3 transition-colors hover:bg-muted"
			>
				<ImagePlus className="size-4" />
				{isUploading ? `Uploading...${uploadProgress}%` : "Image"}
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

					try {
						// single image
						if (files.length === 1) {
							await sendSingle(files[0]);
							return;
						}

						// multiple images
						await sendMany(files);
					} finally {
						inputRef.current!.value = "";
					}
				}}
			/>
		</>
	);
}
