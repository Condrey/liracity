"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import NewsArticleContainer from "@/components/user/news-article-container";
import { NewsArticleData } from "@/lib/types";
import { DefinedUseQueryResult, useQuery } from "@tanstack/react-query";
import { getLastTenNewsArticles } from "./action";
import { Loader2Icon } from "lucide-react";

interface ListOfNewsArticlesProps {
  newsArticles: NewsArticleData[];
}
export default function ListOfNewsArticles({
  newsArticles,
}: ListOfNewsArticlesProps) {
  const query: DefinedUseQueryResult<NewsArticleData[]> = useQuery({
    queryKey: ["last-ten-news-articles"],
    refetchOnWindowFocus:false,
    queryFn: getLastTenNewsArticles,
    initialData: newsArticles,
    retry:4
  });

  return (
    <>
      {query.status === "error" ? (
        <ErrorContainer
          query={query}
          errorMessage="An error occurred while fetching the latest news articles. Please try again."
        />
      ) : query.status === "success" && !query.data.length ? (
        <EmptyContainer
          message={"There are no news articles in the database yet."}
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 ">
          {query.data.map((article) => (
            <NewsArticleContainer key={article.id} newsArticle={article} className="shadow-none " />
          ))}
        </div>
      )}
    </>
  );
}
