import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { getLastTenNewsArticles } from "./action";
import ListOfNewsArticles from "./list-of-news-articles";

export async function NewsArticles() {
  const newsArticles = await getLastTenNewsArticles();
  return (
    <div className="gap-3 flex flex-col">
      <h1 className="text-xl uppercase font-bold tracking-tighter">
        Recent news Articles
      </h1>
      <ListOfNewsArticles newsArticles={newsArticles} />
      <Link
        href={`/media/news-events`}
        className={cn(buttonVariants(), "group/button max-w-fit w-full ms-auto",newsArticles.length<=4&&'hidden')}
      >
        <span className="sr-only">View more news articles</span>
        <span>View more</span>
        <ArrowRightIcon className="group-hover/button:translate-x-2 transition-all duration-200" />
      </Link>
    </div>
  );
}
