"use client";

import { Spinner } from "@/components/ui/spinner";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { SEARCH_PARAMS_NEWS_EVENTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

const listOfTriggers: { name: string; value: string }[] = [
	{ name: "news", value: "News articles" },
	{ name: "events", value: "Events" }
];

export default function TabList({ setTabValue }: { setTabValue: (tabValue: string) => void }) {
	const { navigateOnclick } = useCustomSearchParams();
	function handleClickEvent(name: string) {
		setTabValue(name);
		navigateOnclick(SEARCH_PARAMS_NEWS_EVENTS, name);
	}

	return (
		<TabsList className="mx-auto w-full max-w-4xl">
			{listOfTriggers.map(({ name, value }) => (
				<TabsTrigger key={name} value={name} onClick={() => handleClickEvent(name)}>
					{value}
				</TabsTrigger>
			))}
		</TabsList>
	);
}

export function TabListSwitchButton({
	className,
	setTabValue
}: {
	setTabValue: (tabValue: string) => void;
	className?: string;
}) {
	const [isPending, startTransition] = useTransition();
	const { navigateOnclick } = useCustomSearchParams();
	const searchParamsForTabs = useSearchParams().get(SEARCH_PARAMS_NEWS_EVENTS) ?? "news";
	function handleClickEvent(name: string) {
		setTabValue(name);
		navigateOnclick(SEARCH_PARAMS_NEWS_EVENTS, name);
	}
	return (
		<div className={cn("flex items-center px-3", className)}>
			<button
				// loading={isPending}
				className="flex items-center gap-2 text-primary underline"
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
