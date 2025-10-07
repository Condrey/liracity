"use client";

import { useSession } from "@/app/session-provider";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { Skeleton } from "@/components/ui/skeleton";
import { Role } from "@/generated/prisma";
import { myPrivileges, newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
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
	newsArticle: { title, id, coverImage, createdAt, slug, summary, content, status, tags, location, publishedAt },
	className
}: {
	newsArticle: NewsArticleData;
	className?: string;
}) {
	const [isPending, startTransition] = useTransition();
	const { newsArticleStatus, icon, variant } = newsArticleStatuses[status];
	const Icon = icon;
	const { user } = useSession();
	const isNotVisitor = myPrivileges[user?.role || Role.USER].includes(Role.STAFF);
	return (
		<Item
			variant="outline"
			className={cn(
				"p-0 pb-6 group/article cursor-pointer hover:bg-muted  hover:shadow-md",
				isPending && "animate-pulse",
				className
			)}
			onClick={() => startTransition(() => {})}
			asChild
		>
			<Link href={`/media/news-events/news/${slug}`}>
				<ItemHeader className="px-0 flex-1 relative overflow-hidden flex flex-col justify-center items-center ">
					<Image
						src={coverImage?.url!}
						alt={title}
						width={500}
						height={600}
						className="aspect-square w-full mask-b-from-10% mask-b-to-90% rounded-sm object-cover  group-hover/article:scale-110 transition-all duration-300"
					/>
					<LoadingButton
						loading={isPending}
						className={cn(
							"hidden group-hover/article:block",
							"max-w-fit absolute max-h-fit m-auto size-full py-3",
							isPending && "block"
						)}
					>
						Read article
					</LoadingButton>
					<Badge className="absolute bg-amber-300 text-amber-950 top-0 left-0">News article</Badge>
				</ItemHeader>
				<ItemFooter className="gap-1 px-3 space-x-1 flex-wrap justify-start">
					{isNotVisitor && (
						<Badge variant={variant}>
							<Icon />
							{newsArticleStatus}
						</Badge>
					)}
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
			</Link>
		</Item>
	);
}

export function NewsArticleContainerSkeleton() {
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
