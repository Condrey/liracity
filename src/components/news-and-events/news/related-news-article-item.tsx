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
import Image from "next/image";
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
				"bg-card px-0 pt-0 pb-2 hover:cursor-pointer hover:bg-muted dark:bg-muted",
				"relative items-start justify-start",
				isPending && "animate-pulse bg-muted"
			)}
			asChild
		>
			<Link href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/${item.slug}`)} className="">
				{item.coverImage && (
					<Image
						src={item.coverImage.url}
						height={210}
						width={420}
						alt=""
						className="absolute top-0 h-full w-full items-stretch object-cover opacity-[6%]"
					/>
				)}
				{item.coverImage && (
					<ItemMedia className="pointer-events-none flex w-full touch-auto *:flex-1">
						<ArticleImage
							mediaIdentifier={item.coverImage.url}
							height={210}
							width={420}
							className="h-[110px] w-full object-cover"
						/>
					</ItemMedia>
				)}
				<ItemHeader className="flex-1 flex-col items-start gap-0.5 px-2">
					<ItemTitle className="mb-1 line-clamp-2 tracking-tighter">{item.title}</ItemTitle>
					<div className="block text-start text-xs">
						<Badge variant={variant}>
							{/* <StatusIcon className="mr-1" /> */}
							{newsArticleStatus}
						</Badge>
						{item.location && (
							<>
								<MapPin className="mr-0.5 inline-flex size-3" />
								{item.location},
							</>
						)}{" "}
						{formatDateToLocal(item.publishedAt || item.createdAt)}
					</div>
					<ItemDescription>
						<div className="typeset typeset-notes max-w-[37em]">
							<TipTapViewer content={item.summary || item.content} />
						</div>
					</ItemDescription>
				</ItemHeader>
			</Link>
		</Item>
	);
}
