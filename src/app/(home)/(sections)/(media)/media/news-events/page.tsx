import { getAllEvents } from "@/components/news-and-events/events/action";
import ButtonAddEditEvent from "@/components/news-and-events/events/button-add-edit-event";
import ListOfEvents, { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/list-of-events";
import { getAllNewsArticles } from "@/components/news-and-events/news/action";
import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import ListOfNewsArticles, {
	NewsArticleContainerSkeleton
} from "@/components/news-and-events/news/list-of-news-articles";
import { PageTitle, TypographyH4 } from "@/components/page-utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cityMediaCenterLinks } from "@/lib/constants";
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
		<div className="">
			<PageTitle heading={title} />
			<Tabs defaultValue="news">
				<div className="bg-muted flex w-full py-1 border-y">
					<TabsList className="w-full me-auto max-w-4xl">
						<TabsTrigger value="news">News articles</TabsTrigger>
						<TabsTrigger value="events">Events</TabsTrigger>
					</TabsList>
				</div>

				{/* list of news articles */}
				<TabsContent value="news" className="space-y-4 pt-4">
					<div className="space-x-4 flex">
						<ButtonAddEditNewsArticle>
							<PlusIcon /> news
						</ButtonAddEditNewsArticle>
						<TypographyH4 title="News articles" />
					</div>
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
				</TabsContent>
				{/* list of events */}
				<TabsContent value="events" className="space-y-4 pt-4">
					<div className="space-x-4 flex">
						<ButtonAddEditEvent>
							<PlusIcon /> event
						</ButtonAddEditEvent>
						<TypographyH4 title="Events " />
					</div>

					<Suspense
						fallback={
							<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{Array.from({ length: 6 }, (_, index) => (
									<EventsArticleContainerSkeleton key={index} />
								))}
							</div>
						}
					>
						<ListOfEventsContainer />
					</Suspense>
				</TabsContent>
			</Tabs>
		</div>
	);
}

async function ListOfNewsArticlesContainer() {
	const newsArticles = await getAllNewsArticles();
	return <ListOfNewsArticles initialData={newsArticles} />;
}

async function ListOfEventsContainer() {
	const events = await getAllEvents();
	return <ListOfEvents initialData={events} />;
}
