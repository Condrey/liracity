"use client";

import { Item, ItemActions, ItemContent, ItemTitle } from "@/components/ui/item";

import { PositionData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface Props {
	primaryContent: React.ReactNode;
	secondaryContent?: React.ReactNode;
	className?: string;
	variant?: "default" | "muted" | "outline";
	isChecked: boolean;
	title?: string;
}
export default function CommandItemUniversal({
	primaryContent,
	secondaryContent,
	isChecked,
	className,
	variant,
	title
}: Props) {
	return (
		<Item variant={variant || "default"} className={cn("w-full max-w-xs flex-nowrap p-0", className)}>
			<ItemContent className="gap-0">
				{title && <ItemTitle className="font-bold">{title}</ItemTitle>}
				{primaryContent}
				{secondaryContent}
			</ItemContent>
			<ItemActions>
				<CheckIcon className={cn("ml-auto", isChecked ? "opacity-100" : "opacity-0")} />
			</ItemActions>
		</Item>
	);
}

export function ChosenUniversalCommandItem( {title,subTitle}:{ title:string|undefined|null,subTitle:string|undefined|null} ) {
	if (!title) return null;
	return (
		<div className="flex max-w-md items-center justify-between gap-2">
			<p className="line-clamp-1 text-ellipsis">{title}</p>{" "}
			{subTitle && (
				<>
					- <span className="text-muted-foreground">{subTitle}</span>
				</>
			)}
		</div>
	);
}
