'use client'
import { getAllNewsArticles } from "@/components/feature/news-and-events/news/action";
import ListOfNewsArticles from "@/components/feature/news-and-events/news/list-of-news-articles";
import { buttonVariants } from "@/components/ui/button";
import { NewsArticle } from "@/generated/prisma/client";
import { useIsMobile } from "@/hooks/use-mobile";
import { EventData, NewsArticleData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface Props {
	sampleNewsArticles: Promise<NewsArticleData[]>;
}
export  function SampleNewsArticles({ sampleNewsArticles }: Props) {
		const newsArticles = use(sampleNewsArticles);
	const isMobile = useIsMobile()
	const MAX_DISPLAY = isMobile ? 3 : 5;
		if (!newsArticles.length) return null;
	return (
		<div className="flex flex-col gap-3 px-3">
			<h1 className="text-xl font-bold tracking-tighter uppercase">Recent news Articles</h1>
			<ListOfNewsArticles initialData={newsArticles} limit={MAX_DISPLAY} />
			<Link
				href={`/media/news-events`}
				className={cn(
					buttonVariants(),
					"group/button ms-auto w-full max-w-fit",
					newsArticles.length <= MAX_DISPLAY && "hidden"
				)}
			>
				<span className="sr-only">View more news articles</span>
				<span>View more articles</span>
				<MoveRightIcon className="transition-all duration-200 group-hover/button:translate-x-2" />
			</Link>
		</div>
	);
}
