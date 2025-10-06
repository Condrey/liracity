"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemTitle } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { newsArticleStatuses } from "@/components/user/constants";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import { getAllNewsArticles } from "./action";
import ButtonAddEditNewsArticle from "./button-add-edit-news-article";

interface ListOfNewsArticlesProps {
	initialData: NewsArticleData[];
	limit?: number;
}

export default function ListOfNewsArticles({ initialData, limit }: ListOfNewsArticlesProps) {
	const query = useQuery({
		queryKey: ["news-articles"],
		queryFn: async () => getAllNewsArticles(limit),
		initialData
	});
	const { data, status } = query;
	if (status === "error")
		return <ErrorContainer errorMessage={"Failed to fetch news articles. Please try again!"} query={query} />;
	if (status === "success" && !data.length)
		return (
			<EmptyContainer message={"There are no news articles in the database. Please add"}>
				<ButtonAddEditNewsArticle>Add news Article</ButtonAddEditNewsArticle>
			</EmptyContainer>
		);
	return (
		<div className="flex w-full max-w-9xl flex-col gap-6">
			<ItemGroup className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{data.map((newsArticle) => (
					<NewsArticleContainer key={newsArticle.id} newsArticle={newsArticle} />
				))}
			</ItemGroup>
		</div>
	);
}

export function NewsArticleContainer({
	newsArticle: { title, id, coverImageMedia, createdAt, summary, content, status, tags, location, publishedAt },
	className
}: {
	newsArticle: NewsArticleData;
	className?: string;
}) {
	const { newsArticleStatus, icon, variant } = newsArticleStatuses[status];
	return (
		<Item
			variant="outline"
			className={cn("p-0 pb-6 group/article cursor-pointer hover:bg-muted  hover:shadow-md", className)}
		>
			<ItemHeader className="px-0 relative overflow-hidden flex flex-col justify-center items-center ">
				<Image
					src={coverImageMedia?.url!}
					alt={title}
					width={500}
					height={600}
					className="aspect-square w-full mask-b-from-10% mask-b-to-90% rounded-sm object-cover  group-hover/article:scale-110 transition-all duration-300"
				/>
				<Button
					className={cn("hidden group-hover/article:block", "max-w-fit absolute max-h-fit m-auto size-full py-3")}
				>
					Read article
				</Button>
			</ItemHeader>
			<ItemFooter className="gap-1 px-3 space-x-1 flex-wrap justify-start">
				<Badge variant={variant}>{newsArticleStatus}</Badge>
				<p className="space-x-1.5 line-clamp-1">
					{tags.map((tag) => (
						<span className={"bg-secondary px-1 text-secondary-foreground"} key={tag.id}>
							#{tag.name}
						</span>
					))}
				</p>
				<span className="text-muted-foreground text-sm">
					<MapPinIcon className="size-4 inline-flex fill-muted-foreground text-card" />
					{location}
				</span>
				{!!publishedAt && (
					<p>
						<span className="text-xs">Published {formatDateToLocal(publishedAt)}</span>
					</p>
				)}
			</ItemFooter>
			<ItemContent className="px-3">
				<ItemTitle>{title}</ItemTitle>
				<ItemDescription>
					<TipTapViewer content={summary ?? content} />
				</ItemDescription>
			</ItemContent>
		</Item>
	);
}

export function NewsArticleContainerSkeleton() {
	return (
		<Item variant="outline" className={cn("p-0 pb-6 animate-pulse cursor-wait")}>
			<Skeleton className="w-full h-[250px]  rounded-sm " />
			<ItemFooter className="gap-1 px-3 space-x-1 flex-wrap justify-start">
				<Skeleton className="h-9 w-16" />
				<div className="space-x-1.5 flex ">
					{Array.from({ length: 3 }, (_, index) => (
						<Skeleton key={index} className="h-6 w-12" />
					))}
				</div>
				<Skeleton className="h-6 w-12" />
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
