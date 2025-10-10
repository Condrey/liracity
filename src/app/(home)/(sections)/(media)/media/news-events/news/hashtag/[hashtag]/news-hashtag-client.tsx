"use client";

import { getNewsArticlesByHashtag } from "@/components/news-and-events/news/action";
import NewsArticleContainer from "@/components/news-and-events/news/news-article-container";
import { TypographyH2, TypographyH4 } from "@/components/page-utils";
import ErrorContainer from "@/components/query-containers/error-container";
import LoadingButton from "@/components/ui/loading-button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tag } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { NewsArticleData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTransition } from "react";
import { PageSidebar } from "./page-sidebar";

interface NewsHashtagClientProps {
	initialData: NewsArticleData[];
	relatedArticles: NewsArticleData[];
	hashtag: string;
	otherHashTags: Tag[];
}

export function NewsHashtagClient({ initialData, hashtag, relatedArticles, otherHashTags }: NewsHashtagClientProps) {
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const [isPending, startTransition] = useTransition();
	const query = useQuery({
		queryKey: ["news-articles", "hashtag", hashtag],
		queryFn: async () => getNewsArticlesByHashtag(hashtag),
		initialData
	});
	const { data, status } = query;
	if (status === "error") return <ErrorContainer errorMessage="Failed to fetch articles. Please retry" query={query} />;
	if (!data) return notFound();
	return (
		<SidebarProvider>
			<SidebarInset className="">
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<LoadingButton variant={"ghost"} size={"icon"} loading={isPending} onClick={() => startTransition(() => {})}>
						<Link href={getNavigationLinkWithPathnameWithoutUpdate("/media/news-events")}>
							<ArrowLeftIcon />
						</Link>
					</LoadingButton>
					<TypographyH4 title={`News Articles: #${hashtag}`} />
					<SidebarTrigger className="-mr-1 ml-auto rotate-180" />
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 max-w-5xl w-full mx-auto">
					<TypographyH2 title={`News articles that are likely "${hashtag}" in nature`} />
					<div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
						{data.map((newsArticle) => (
							<NewsArticleContainer newsArticle={newsArticle} className="" />
						))}
					</div>
				</div>
			</SidebarInset>
			<PageSidebar side="right" relatedArticles={relatedArticles} hashtag={hashtag} otherHashTags={otherHashTags} />
		</SidebarProvider>
	);
}
