"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RefreshCwIcon, WifiIcon } from "lucide-react";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	return (
		<div className="mx-auto flex min-h-dvh w-full max-w-md flex-col items-center gap-4 overflow-x-auto p-4 text-destructive">
			<h2 className="text-xl font-semibold uppercase">Something went wrong!</h2>

			{error.name === "PrismaClientKnownRequestError" ? (
				<div className="flex flex-col items-center justify-center gap-2 text-xl text-foreground">
					<WifiIcon className="size-10 animate-pulse" /> <span>Internet connectivity Error</span>
				</div>
			) : (
				<p className="text-wrap break-all">{error.message}</p>
			)}

			<div className={cn(process.env.NODE_ENV !== "production" ? "flex flex-col gap-2" : "hidden")}>
				<pre className="mt-2 line-clamp-[15] text-sm text-wrap break-all text-ellipsis text-muted-foreground">
					{decodeURIComponent(error.stack!)}
				</pre>
				<pre className="mt-2 text-sm text-wrap break-all text-muted-foreground">
					Digest: {decodeURIComponent(error.digest || "None")}
				</pre>
				<pre className="mt-2 text-sm text-wrap break-all text-muted-foreground">
					{/* Cause: {decodeURIComponent(`${error.cause}` || "None")} */}
				</pre>
			</div>
			<Button onClick={reset} className="mx-auto w-full max-w-fit">
				<RefreshCwIcon className="" />
				Try again
			</Button>
		</div>
	);
}
