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
				"flex flex-col  gap-4 min-h-[20rem] items-center justify-center",
				isMobile && "bg-muted rounded-md p-3",
				"dark:bg-muted border-none dark:border dark:p-3",
				className
			)}
		>
			{!!message && <MessageSquareMoreIcon strokeWidth={0.5} className="text-muted-foreground size-32" />}
			<p className="max-w-sm text-muted-foreground text-center">{message}</p>
			{children}
		</div>
	);
}
