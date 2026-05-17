import { getAllEvents } from "@/components/news-and-events/events/action";
import ListOfEvents from "@/components/news-and-events/events/list-of-events";
import { buttonVariants } from "@/components/ui/button";
import { cn, webName } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export async function SampleEvents() {
	const limit = 10;
	const events = await getAllEvents(limit);
	const MAX_DISPLAY = 6;
	if (!events.length) return null;
	return (
		<div className="flex flex-col gap-3 px-3">
			<h1 className="text-xl font-bold tracking-tighter uppercase">{webName} events</h1>
			<ListOfEvents initialData={events} limit={limit} />
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
