"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { ItemGroup } from "@/components/ui/item";
import { NewsArticleStatus } from "@/generated/prisma";
import { NewsArticleData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllNewsArticles, getFilteredNewsArticles } from "./action";
import ButtonAddEditNewsArticle from "./button-add-edit-news-article";
import NewsArticleContainer from "./news-article-container";

interface ListOfNewsArticlesProps {
	initialData: NewsArticleData[];
	limit?: number;
	filter?: NewsArticleStatus;
}

export default function ListOfNewsArticles({ initialData, limit, filter }: ListOfNewsArticlesProps) {
	const query = useQuery({
		queryKey: ["news-articles", "filter", filter, "limit", limit],
		queryFn: async () => (filter ? getFilteredNewsArticles(filter) : getAllNewsArticles(limit)),
		initialData
	});
	const { data, status } = query;
	if (status === "error")
		return <ErrorContainer errorMessage={"Failed to fetch news articles. Please try again!"} query={query} />;
	if (status === "success" && !data.length)
		return (
			<EmptyContainer
				message={`There are no news articles in the database ${filter ? `matching "${filter}" articles filter` : ""}.`}
			>
				<ButtonAddEditNewsArticle>Add news Article</ButtonAddEditNewsArticle>
			</EmptyContainer>
		);
	return (
		<div className="flex w-full max-w-9xl flex-col gap-6">
			<ItemGroup className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
				{data.map((newsArticle) => (
					<NewsArticleContainer key={newsArticle.id} newsArticle={newsArticle} />
				))}
			</ItemGroup>
		</div>
	);
}
