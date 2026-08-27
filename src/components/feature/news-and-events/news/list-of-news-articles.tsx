"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { ItemGroup } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { NewsArticleStatus } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { NewsArticleData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Newspaper } from "lucide-react";
import { useTransition } from "react";
import { getFilteredNewsArticles } from "./action";
import ButtonAddEditNewsArticle from "./button-add-edit-news-article";
import NewsArticleContainer from "./news-article-container";

interface ListOfNewsArticlesProps {
	initialData: NewsArticleData[];
	limit?: number;
	filter?: NewsArticleStatus | undefined;
}

export default function ListOfNewsArticles({ initialData, limit, filter }: ListOfNewsArticlesProps) {
	const query = useQuery({
		queryKey: ["news-articles", "filter", filter, "limit", limit],
		queryFn: async () => getFilteredNewsArticles(filter),
		initialData
	});
	const { data, status } = query;
	const [isPending, startTransition] = useTransition();
	const { updateSearchParamsAndNavigate } = useCustomSearchParams();

	if (status === "error")
		return <ErrorContainer errorMessage={"Failed to fetch news articles. Please try again!"} query={query} />;
	if (status === "success" && !data.length)
		return (
			<EmptyContainer
				message={"Empty list"}
				description={`Either there are no news articles for this user, or there are no news articles in the database ${
					filter ? `matching "${filter}" articles filter` : ""
				}.`}
				icon={Newspaper}
			>
				{!!filter && (
					<LoadingButton
						loading={isPending}
						onClick={() => startTransition(() => updateSearchParamsAndNavigate("newsFilter", ""))}
						size={"lg"}
						variant={"link"}
					>
						View all news articles instead
					</LoadingButton>
				)}
				<ButtonAddEditNewsArticle>Add news Article</ButtonAddEditNewsArticle>
			</EmptyContainer>
		);
	return (
		<div className="flex w-full max-w-9xl flex-col gap-6">
			<ItemGroup className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{data.map((newsArticle) => (
					<NewsArticleContainer key={newsArticle.id} newsArticle={newsArticle} />
				))}
			</ItemGroup>
		</div>
	);
}
