import { PageTitle } from "@/components/page-utils";
import { cityMediaCenterLinks } from "@/components/user/constants";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";
import { getAllNewsArticles } from "./(news)/action";
import ListOfNewsArticles from "./(news)/list-of-news-articles";
import ButtonAddEditNewsArticle from "./button-add-edit-news-article";

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
			<Suspense>
				<ListOfNewsArticlesContainer />
			</Suspense>
		</div>
	);
}

async function ListOfNewsArticlesContainer() {
	const newsArticles = await getAllNewsArticles();
	return <ListOfNewsArticles initialData={newsArticles} />;
}
