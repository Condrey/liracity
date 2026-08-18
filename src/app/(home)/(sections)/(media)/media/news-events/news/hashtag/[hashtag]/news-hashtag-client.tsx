"use client";

import { getNewsArticlesByHashtag } from "@/components/news-and-events/news/action";
import NewsArticleContainer from "@/components/news-and-events/news/news-article-container";
import { TypographyH2, TypographyH4 } from "@/components/page-utils";
import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/ui/loading-button";
import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import Footer from "@/components/user/footer";
import { Tag } from "@/generated/prisma/client";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { NewsArticleData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { MenuIcon, MoveLeftIcon } from "lucide-react";
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
	const sidebar = useSidebar();

	const query = useQuery({
		queryKey: ["news-articles", "hashtag", hashtag],
		queryFn: async () => getNewsArticlesByHashtag(hashtag),
		initialData
	});
	const { data, status } = query;
	if (status === "error") return <ErrorContainer errorMessage="Failed to fetch articles. Please retry" query={query} />;
	if (!data) return notFound();
	return (
		<div className="h-[calc(100vh-var(--header-height))] overflow-y-auto">
			<SidebarProvider>
				<SidebarInset className="space-y-6">
					<header className="sticky top-0 z-50 flex min-h-16 shrink-0 flex-wrap items-center justify-between gap-2 border-b bg-background px-2">
						<LoadingButton variant={"ghost"} loading={isPending} onClick={() => startTransition(() => {})}>
							<Link
								className="flex flex-row items-center gap-0.5"
								href={getNavigationLinkWithPathnameWithoutUpdate("/media/news-events")}
							>
								<MoveLeftIcon />
								<TypographyH4 title={`News Articles: #${hashtag}`} />
							</Link>
						</LoadingButton>
						{!sidebar.open && (
							<Button variant="warning" size={"icon-lg"} onClick={() => sidebar.setOpen(!sidebar.open)}>
								<MenuIcon />
							</Button>
						)}{" "}
					</header>
					<TypographyH2 title={`News articles that are likely "${hashtag}" in nature`} className="px-3" />

					<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 p-4">
						<div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
							{data.map((newsArticle) => (
								<NewsArticleContainer newsArticle={newsArticle} className="" />
							))}
						</div>
					</div>
					<Footer />
				</SidebarInset>
				<PageSidebar
					side="right"
					relatedArticles={relatedArticles}
					hashtag={hashtag}
					otherHashTags={otherHashTags}
					sidebar={sidebar}
					setOpen={sidebar.setOpen}
				/>
			</SidebarProvider>
		</div>
	);
}
