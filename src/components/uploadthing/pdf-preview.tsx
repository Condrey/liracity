"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { generatePdfPreview } from "./utility";

interface Props {
	source: string | File;
	fileName?: string;
	className?: string;
	children?: React.ReactNode;
}

export function PdfPreview({ source, fileName, className, children: titleSection }: Props) {
	const [preview, setPreview] = useState<string | null>(null);
	const [fileSize, setFileSize] = useState<number | null | undefined>(undefined);
	const [pages, setPages] = useState<number | undefined>(undefined);

	useEffect(() => {
		let isMounted = true;

		generatePdfPreview(source).then(({ fileSize, pages, previewUrl }) => {
			if (isMounted) {
				setPreview(previewUrl);
				setFileSize(fileSize);
				setPages(pages);
			}
		});

		return () => {
			isMounted = false;
		};
	}, [source]);

	if (!preview) {
		return <Skeleton className={cn("h-full rounded-lg border", className)} />; // loader/skeleton
	}

	return (
		<div className={cn("flex flex-col justify-end overflow-hidden rounded-lg border shadow", className)}>
			<Image src={preview} alt="PDF preview" width={1200} height={1200} className={cn("size-full")} />
		</div>
	);
}
