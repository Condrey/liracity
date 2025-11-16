"use client";

import { Spinner } from "@/components/ui/spinner";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

const listOfTriggers: { name: string; value: string }[] = [
	{ name: "news", value: "News articles" },
	{ name: "events", value: "Events" }
];

export default function TabList() {
	const { navigateOnclick } = useCustomSearchParams();
	function handleClickEvent(name: string) {
		navigateOnclick("defaultNewsEventsTabs", name);
	}

	return (
		<TabsList className="w-full mx-auto max-w-4xl">
			{listOfTriggers.map(({ name, value }) => (
				<TabsTrigger key={name} value={name} onClick={() => handleClickEvent(name)}>
					{value}
				</TabsTrigger>
			))}
		</TabsList>
	);
}

export function TabListSwitchButton({ className }: { className?: string }) {
	const [isPending, startTransition] = useTransition();
	const { navigateOnclick } = useCustomSearchParams();
	const searchParamsForTabs = useSearchParams().get("defaultNewsEventsTabs") ?? "news";
	function handleClickEvent(name: string) {
		navigateOnclick("defaultNewsEventsTabs", name);
	}
	return (
		<div className={cn("flex px-3 items-center", className)}>
			<button
				// loading={isPending}
				className="underline text-primary hover:cursor-pointer flex gap-2 items-center"
				// variant={"link"}
				// size={"lg"}
				onClick={() => startTransition(() => handleClickEvent(searchParamsForTabs === "news" ? "events" : "news"))}
			>
				View also {searchParamsForTabs === "news" ? "events" : "news articles"}
				{isPending ? <Spinner /> : <MoveRightIcon />}
			</button>
		</div>
	);
}
