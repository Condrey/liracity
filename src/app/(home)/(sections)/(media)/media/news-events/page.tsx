import { getAllNewsArticles } from "@/components/news-and-events/news/action";
import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import ListOfNewsArticles, {
	NewsArticleContainerSkeleton
} from "@/components/news-and-events/news/list-of-news-articles";
import { PageTitle } from "@/components/page-utils";
import { cityMediaCenterLinks } from "@/components/user/constants";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/news-events")!;
export const metadata: Metadata = {
	title,
	description
};
export default function Page() {
	return (
		<div className="pt-[85px]">
			<PageTitle heading={title} />
			<ButtonAddEditNewsArticle>
				<PlusIcon /> news
			</ButtonAddEditNewsArticle>
			{/* list of news articles */}
			<Suspense
				fallback={
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{Array.from({ length: 6 }, (_, index) => (
							<NewsArticleContainerSkeleton key={index} />
						))}
					</div>
				}
			>
				<ListOfNewsArticlesContainer />
			</Suspense>
		</div>
	);
}

async function ListOfNewsArticlesContainer() {
	const newsArticles = await getAllNewsArticles();
	return <ListOfNewsArticles initialData={newsArticles} />;
}
