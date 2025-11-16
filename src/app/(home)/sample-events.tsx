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
		<div className="gap-3 px-3 flex flex-col">
			<h1 className="text-xl uppercase font-bold tracking-tighter">{webName} events</h1>
			<ListOfEvents initialData={events} limit={limit} />
			<Link
				href={`/media/news-events`}
				className={cn(
					buttonVariants(),
					"group/button max-w-fit w-full ms-auto",
					events.length <= MAX_DISPLAY && "hidden"
				)}
			>
				<span className="sr-only">View more events</span>
				<span>View more events</span>
				<MoveRightIcon className="group-hover/button:translate-x-2 transition-all duration-200" />
			</Link>
		</div>
	);
}
