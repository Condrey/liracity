import { Extension } from "@tiptap/core";
import { Plugin } from "@tiptap/pm/state";

declare module "@tiptap/core" {
	interface Commands<ReturnType> {
		uploadImages: {
			uploadPastedImages: (files: File[]) => ReturnType;
		};
	}
}

export const UploadImageCommand = Extension.create({
	name: "uploadImageCommand",

	addCommands() {
		return {
			uploadPastedImages: (files) => () => {
				window.dispatchEvent(
					new CustomEvent("tiptap-upload-images", {
						detail: files
					})
				);

				return true;
			}
		};
	}
});

export const PasteImageExtension = Extension.create({
	name: "pasteImage",

	addProseMirrorPlugins() {
		return [
			new Plugin({
				props: {
					handlePaste: (_, event) => {
						const items = event.clipboardData?.items;

						if (!items?.length) {
							return false;
						}

						const files = Array.from(items)
							.filter((item) => item.type.startsWith("image/"))
							.map((item) => item.getAsFile())
							.filter(Boolean) as File[];

						if (!files.length) {
							return false;
						}

						event.preventDefault();

						this.editor.commands.uploadPastedImages(files);

						return true;
					}
				}
			})
		];
	}
});
