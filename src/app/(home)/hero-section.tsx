"use client";

import { getLatestNews } from "@/components/news-and-events/news/action";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal, webName } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

export default function HeroSection({ initialData }: { initialData: NewsArticleData | null }) {
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const [isPending, startTransition] = useTransition();
	const query = useQuery({
		queryKey: ["latest-news"],
		queryFn: getLatestNews,
		initialData
	});
	const { data, status } = query;
	if (status === "error") return <ErrorContainer errorMessage="Failed to load landing page" query={query} />;
	if (!data) return <EmptyContainer message={`Welcome to ${webName}`}></EmptyContainer>;
	return (
		<div className="grid w-full items-center overflow-clip md:h-[90vh] md:max-h-fit md:grid-cols-3 lg:max-h-[75vh] xl:grid-cols-4">
			<Image
				src={data.coverImage?.url || `/hero.jpg`}
				alt="hero-image"
				height={720}
				width={1800}
				// objectFit="cover"
				placeholder="blur"
				blurDataURL="/image-placeholder.jpeg"
				className="w-full flex-1 shrink mask-radial-[100%_100%] mask-radial-from-60% mask-radial-at-top bg-cover md:col-span-3 lg:col-span-2 lg:h-full lg:mask-radial-at-left xl:col-span-3"
			/>
			<article className="mx-auto min-h-fit w-full flex-none shrink-0 px-3 md:col-span-3 md:max-w-fit lg:col-span-1 lg:max-w-prose">
				<div className="text-xs text-muted-foreground">
					<time className="ordinal slashed-zero">{formatDateToLocal((data.publishedAt || data.createdAt)!)}</time>,{" "}
					<address className="inline">{data.location}</address>
				</div>
				<h2 className="mt-1 mb-3 line-clamp-2 text-lg leading-tight font-medium tracking-tight text-pretty text-amber-700 uppercase text-shadow-xs md:line-clamp-3 md:text-2xl md:font-bold">
					{data.title}
				</h2>

				<div className="mt-1 line-clamp-4 text-sm leading-tight hyphens-auto md:max-w-prose md:text-justify lg:line-clamp-6 xl:line-clamp-[10]">
					<TipTapViewer content={data.summary || data.content} />
				</div>
				<div className="flex w-full">
					<Link
						href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/${data.slug}`)}
						className={cn(
							buttonVariants({ size: "default" }),
							"group/read-more mx-auto mt-2 w-full sm:mx-0 sm:ms-auto md:mx-0 md:max-w-fit"
						)}
						onClick={() => startTransition(() => {})}
					>
						<span>Read more </span>
						{isPending ? (
							<Spinner />
						) : (
							<MoveRightIcon className="transition-all duration-300 group-hover/read-more:translate-x-3" />
						)}
					</Link>
				</div>
			</article>
		</div>
	);
}

export function HeroSectionLoadingSkeleton() {
	return (
		<div className="grid w-full animate-pulse items-center overflow-clip bg-secondary/10 md:h-[90vh] md:grid-cols-3 lg:max-h-[75vh] xl:grid-cols-4 dark:border">
			<Skeleton className="w-full flex-1 shrink bg-primary/20 mask-radial-[100%_100%] mask-radial-from-60% mask-radial-at-top bg-cover md:col-span-3 lg:col-span-2 lg:h-full lg:mask-radial-at-left xl:col-span-3" />
			<div className="mx-auto min-h-fit w-full flex-none shrink-0 space-y-2 px-3 md:col-span-3 md:max-w-fit lg:col-span-1 lg:max-w-prose">
				<Skeleton className="h-4 w-11/12" />
				<Skeleton className="h-9 w-2/3" />
				<Skeleton className="h-40 w-4/5" />
			</div>
		</div>
	);
}
