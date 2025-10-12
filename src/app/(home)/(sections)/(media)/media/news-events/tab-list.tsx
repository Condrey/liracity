"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";

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
