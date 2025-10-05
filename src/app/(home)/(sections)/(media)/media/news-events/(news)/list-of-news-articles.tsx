"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemTitle } from "@/components/ui/item";
import { NewsArticleData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import ButtonAddEditNewsArticle from "../button-add-edit-news-article";
import { getAllNewsArticles } from "./action";

interface ListOfNewsArticlesProps {
	initialData: NewsArticleData[];
}

export default function ListOfNewsArticles({ initialData }: ListOfNewsArticlesProps) {
	const query = useQuery({
		queryKey: ["news-articles"],
		queryFn: getAllNewsArticles,
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

function NewsArticleContainer({
	newsArticle: { title, id, coverImageMedia, summary, content, status }
}: {
	newsArticle: NewsArticleData;
}) {
	return (
		<Item key={id} variant="outline">
			<ItemHeader>
				<Image
					src={coverImageMedia?.url!}
					alt={title}
					width={500}
					height={600}
					className="aspect-square w-full rounded-sm object-cover"
				/>
			</ItemHeader>
			<ItemContent>
				<ItemTitle>{title}</ItemTitle>
				<ItemDescription>
					<TipTapViewer content={summary ?? content} />
				</ItemDescription>
			</ItemContent>
			<ItemFooter>
				<Badge>{status}</Badge>
			</ItemFooter>
		</Item>
	);
}
