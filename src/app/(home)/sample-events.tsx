"use client";

import ListOfEvents from "@/components/feature/news-and-events/events/list-of-events";
import { buttonVariants } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { EventData } from "@/lib/types";
import { cn, webName } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface Props {
	sampleEvents: Promise<EventData[]>;
}
export function SampleEvents({ sampleEvents }: Props) {
	const events = use(sampleEvents);
	const isMobile = useIsMobile()
	const MAX_DISPLAY = isMobile ? 3 : 5;
	if (!events.length) return null;

	return (
		<div className="flex flex-col gap-3 px-3">
			<h1 className="text-xl font-bold tracking-tighter uppercase">{webName} events</h1>
			<ListOfEvents initialData={events} limit={MAX_DISPLAY} />
			<Link
				href={`/media/news-events`}
				className={cn(
					buttonVariants(),
					"group/button ms-auto w-full max-w-fit",
					events.length <= MAX_DISPLAY && "hidden"
				)}
			>
				<span className="sr-only">View more events</span>
				<span>View more events</span>
				<MoveRightIcon className="transition-all duration-200 group-hover/button:translate-x-2" />
			</Link>
		</div>
	);
}
