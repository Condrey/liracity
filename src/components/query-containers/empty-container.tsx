"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { MessageSquareMoreIcon } from "lucide-react";

interface EmptyContainerProps {
	message: string | undefined;
	children?: React.ReactNode;
	className?: string;
}
export default function EmptyContainer({ message, children, className }: EmptyContainerProps) {
	const isMobile = useIsMobile();
	return (
		<div
			className={cn(
				"flex min-h-[20rem] flex-col items-center justify-center gap-4",
				isMobile && "rounded-md bg-muted p-3",
				"border-none dark:border dark:bg-muted dark:p-3",
				className
			)}
		>
			{!!message && <MessageSquareMoreIcon strokeWidth={0.5} className="size-32 text-muted-foreground" />}
			<p className="max-w-sm text-center text-muted-foreground">{message}</p>
			{children}
		</div>
	);
}
