import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function EventsArticleContainerSkeleton() {
	return <Skeleton className={cn("h-20 bg-muted md:h-52")} />;
}
