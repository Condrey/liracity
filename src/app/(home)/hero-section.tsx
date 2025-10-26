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
	if (status === "success" && !data) return <EmptyContainer message={`Welcome to ${webName}`}></EmptyContainer>;
	return (
		<div className="md:h-[90vh] rounded-b-2xl lg:max-h-[75vh] overflow-clip w-full   grid   md:grid-cols-3 xl:grid-cols-4  items-center    ">
			<Image
				src={data?.coverImage?.url || `/hero.jpg`}
				alt="hero-image"
				width={720}
				height={1800}
				// objectFit="cover"
				// placeholder="blur"
				className="w-full lg:h-full  shrink flex-1 bg-cover lg:col-span-2  md:col-span-3 xl:col-span-3  mask-radial-[100%_100%] mask-radial-from-60% lg:mask-radial-at-left mask-radial-at-top"
			/>
			<article className="lg:max-w-prose shrink-0 md:max-w-fit min-h-fit flex-none  w-full mx-auto px-3 md:col-span-3 lg:col-span-1">
				<p className="text-xs text-muted-foreground">
					<time className=" ordinal  slashed-zero">{formatDateToLocal((data?.publishedAt || data?.createdAt)!)}</time>,{" "}
					{data?.location}
				</p>
				<h2 className="font-medium tracking-tight text-lg line-clamp-2 text-pretty capitalize">{data?.title}</h2>

				<div className="mt-1 hyphens-auto text-sm leading-relaxed italic sm:not-italic  text-justify text-gray-500 line-clamp-3 xl:line-clamp-5 md:max-w-prose">
					<TipTapViewer content={data?.summary || data?.content} />
				</div>
				<div className="w-full flex">
					<Link
						href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/${data?.slug}`)}
						className={cn(
							buttonVariants({}),
							"group/read-more w-full max-w-fit md:mx-0 mx-auto sm:ms-auto sm:mx-0 mt-2"
						)}
						onClick={() => startTransition(() => {})}
					>
						<span>Read more </span>
						{isPending ? (
							<Spinner />
						) : (
							<MoveRightIcon className="group-hover/read-more:translate-x-3 transition-all duration-300" />
						)}
					</Link>
				</div>
			</article>
		</div>
	);
}

export function HeroSectionLoadingSkeleton() {
	return (
		<div className="md:h-[90vh] bg-secondary/10 dark:border  animate-pulse rounded-b-2xl lg:max-h-[75vh] overflow-clip w-full   grid   md:grid-cols-3 xl:grid-cols-4  items-center    ">
			<Skeleton className="w-full lg:h-full bg-primary/20  shrink flex-1 bg-cover lg:col-span-2  md:col-span-3 xl:col-span-3  mask-radial-[100%_100%] mask-radial-from-60% lg:mask-radial-at-left mask-radial-at-top" />
			<div className="lg:max-w-prose space-y-2 shrink-0 md:max-w-fit min-h-fit flex-none  w-full mx-auto px-3 md:col-span-3 lg:col-span-1">
				<Skeleton className="h-4 w-11/12" />
				<Skeleton className="h-9 w-2/3" />
				<Skeleton className="h-40 w-4/5" />
			</div>
		</div>
	);
}
