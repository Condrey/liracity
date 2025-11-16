/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { ImgHTMLAttributes } from "react";
import Zoom from "react-medium-image-zoom";

type ArticleImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height" | "alt"> & {
	mediaIdentifier: string | undefined;
	placeholder?: string;
	alt?: string | null | undefined;
} & (
		| {
				scaleToFill?: true;
				width: number;
				height: number;
		  }
		| {
				scaleToFill: false;
		  }
	);

export default function ArticleImage({
	mediaIdentifier,
	placeholder = "/image-placeholder.jpeg",
	alt,
	...props
}: ArticleImageProps) {
	return (
		<Zoom key={mediaIdentifier}>
			<Image
				src={mediaIdentifier || placeholder}
				alt={alt || ""}
				blurDataURL={placeholder}
				placeholder="blur"
				{...props}
			/>
		</Zoom>
	);
}
