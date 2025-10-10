"use client";

import ArticleImage from "@/components/news-and-events/article-image";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemDescription, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useTransition } from "react";

export default function RelatedNewsArticleItem({ relatedNewsArticle: item }: { relatedNewsArticle: NewsArticleData }) {
	const { theme } = useTheme();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const [isPending, startTransition] = useTransition();
	const { icon, newsArticleStatus, variant } = newsArticleStatuses[item.status];

	return (
		<Item
			key={item.id}
			variant={theme === "dark" ? "muted" : "outline"}
			size="sm"
			onClick={() => startTransition(() => {})}
			className={cn(
				"px-2 py-1 bg-card dark:bg-muted hover:bg-muted hover:cursor-pointer",
				isPending && "bg-muted animate-pulse"
			)}
			asChild
		>
			<Link href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/${item.slug}`)}>
				{item.coverImage && (
					<ItemMedia className="pointer-events-none touch-auto w-full flex *:flex-1">
						<ArticleImage
							mediaIdentifier={item.coverImage.url}
							height={180}
							width={180}
							className="h-[110px] w-full object-cover "
						/>
					</ItemMedia>
				)}
				<ItemHeader className="flex-col items-start gap-0.5">
					<ItemTitle className="border-b mb-1">{item.title}</ItemTitle>
					<div className="text-xs block text-start">
						<Badge variant={variant}>
							{/* <StatusIcon className="mr-1" /> */}
							{newsArticleStatus}
						</Badge>
						{item.location && (
							<>
								<MapPin className="size-3 inline-flex mr-0.5" />
								{item.location},
							</>
						)}{" "}
						{formatDateToLocal(item.publishedAt || item.createdAt)}
					</div>
					<ItemDescription>
						<TipTapViewer content={item.summary || item.content} />
					</ItemDescription>
				</ItemHeader>
			</Link>
		</Item>
	);
}
