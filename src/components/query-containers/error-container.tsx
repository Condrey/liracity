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
				"flex flex-col gap-4 min-h-[20rem] items-center justify-center ",
				isMobile && "bg-destructive/10  rounded-md p-3",
				"dark:bg-destructive/10  border-none dark:border dark:p-3"
			)}
		>
			{!!errorMessage && <BanIcon strokeWidth={0.5} className="text-destructive size-32" />}
			<p className="max-w-sm text-muted-foreground text-center">{errorMessage}</p>
			<LoadingButton loading={query.isFetching} variant={"destructive"} onClick={() => query.refetch()}>
				<Loader2Icon />
				Refresh
			</LoadingButton>
		</div>
	);
}
