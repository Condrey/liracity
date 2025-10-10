import { Item, ItemContent, ItemFooter } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function NewsArticleContainerSkeleton() {
	return (
		<Item variant="outline" className={cn("p-0 pb-6 animate-pulse cursor-wait")}>
			<Skeleton className="w-full h-[200px]  rounded-sm " />
			<ItemFooter className="gap-1 px-3 space-x-1 flex-wrap justify-start">
				<div className="space-x-2 flex ">
					{Array.from({ length: 2 }, (_, index) => (
						<Skeleton key={index} className="h-6 w-32 " />
					))}
				</div>
			</ItemFooter>
			<ItemContent className="px-3">
				<Skeleton className="h-6 w-2/3" />

				<div className="gap-0.5 flex flex-col">
					{Array.from({ length: 3 }, (_, index) => (
						<Skeleton key={index} className="h-6 w-full" />
					))}
				</div>
			</ItemContent>
		</Item>
	);
}
