"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { DefinedUseQueryResult, QueryObserverLoadingErrorResult } from "@tanstack/react-query";
import { BanIcon, Loader2Icon } from "lucide-react";
import LoadingButton from "../ui/loading-button";

interface ErrorContainerProps {
	errorMessage: string | undefined;
	query: DefinedUseQueryResult | QueryObserverLoadingErrorResult;
}

export default function ErrorContainer({ errorMessage, query }: ErrorContainerProps) {
	console.error(query.error);
	const isMobile = useIsMobile();
	return (
		<div
			className={cn(
				"flex min-h-[20rem] flex-col items-center justify-center gap-4",
				isMobile && "rounded-md bg-destructive/10 p-3",
				"border-none dark:border dark:bg-destructive/10 dark:p-3"
			)}
		>
			{!!errorMessage && <BanIcon strokeWidth={0.5} className="size-32 text-destructive" />}
			<p className="max-w-sm text-center text-muted-foreground">{errorMessage}</p>
			<LoadingButton loading={query.isFetching} variant={"destructive"} onClick={() => query.refetch()}>
				<Loader2Icon />
				Refresh
			</LoadingButton>
		</div>
	);
}
