"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import NewsArticleContainer from "@/components/user/news-article-container";
import { NewsArticleData } from "@/lib/types";
import { DefinedUseQueryResult, useQuery } from "@tanstack/react-query";
import { getLastTenNewsArticles } from "./action";

interface ListOfNewsArticlesProps {
  newsArticles: NewsArticleData[];
}
export default function ListOfNewsArticles({
  newsArticles,
}: ListOfNewsArticlesProps) {
  const query: DefinedUseQueryResult<NewsArticleData[]> = useQuery({
    queryKey: ["last-ten-news-articles"],
    queryFn: getLastTenNewsArticles,
    initialData: newsArticles,
  });

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
        query.data.map((article) => (
          <NewsArticleContainer key={article.id} newsArticle={article} />
        ))
      )}
    </div>
  );
}
