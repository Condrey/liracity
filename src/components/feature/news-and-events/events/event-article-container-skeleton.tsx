import { Item, ItemContent, ItemFooter } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function EventsArticleContainerSkeleton() {
	return (
		<Item variant="outline" className={cn("animate-pulse cursor-wait p-0 pb-6")}>
			<Skeleton className="h-[250px] w-full rounded-sm" />
			<ItemFooter className="flex-wrap justify-start gap-1 space-x-1 px-3">
				<Skeleton className="h-9 w-16" />
				<div className="flex space-x-1.5">
					{Array.from({ length: 3 }, (_, index) => (
						<Skeleton key={index} className="h-6 w-12" />
					))}
				</div>
				<Skeleton className="h-6 w-12" />
			</ItemFooter>
			<ItemContent className="px-3">
				<Skeleton className="h-6 w-2/3" />

				<div className="flex flex-col gap-0.5">
					{Array.from({ length: 3 }, (_, index) => (
						<Skeleton key={index} className="h-6 w-full" />
					))}
				</div>
			</ItemContent>
		</Item>
	);
}
