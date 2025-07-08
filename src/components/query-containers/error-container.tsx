"use client";

import { DefinedUseQueryResult, QueryObserverLoadingErrorResult } from "@tanstack/react-query";
import LoadingButton from "../ui/loading-button";

interface ErrorContainerProps {
  errorMessage: string;
  query: DefinedUseQueryResult|QueryObserverLoadingErrorResult;
}

export default function ErrorContainer({
  errorMessage,
  query,
}: ErrorContainerProps) {
  console.error(query.error);
  return (
    <div className="flex flex-col gap-4 min-h-[20rem] items-center justify-center">
      <p className="max-w-sm text-muted-foreground text-center">
        {errorMessage}
      </p>
      <LoadingButton
        loading={query.isFetching}
        variant={"destructive"}
        onClick={() => query.refetch()}
      >
        Refresh
      </LoadingButton>
    </div>
  );
}
