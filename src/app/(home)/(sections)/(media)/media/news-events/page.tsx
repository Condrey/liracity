import BodyContainer from "@/app/(home)/body-container";
import { validateRequest } from "@/auth";
import { getFilteredEvents } from "@/components/news-and-events/events/action";
import ButtonAddEditEvent from "@/components/news-and-events/events/button-add-edit-event";
import { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/event-article-container-skeleton";
import ListOfEvents from "@/components/news-and-events/events/list-of-events";
import { getFilteredNewsArticles } from "@/components/news-and-events/news/action";
import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import ListOfNewsArticles from "@/components/news-and-events/news/list-of-news-articles";
import NewsArticleContainerSkeleton from "@/components/news-and-events/news/news-article-container-skeleton";
import { PageTitle, TypographyH4 } from "@/components/page-utils";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { EventStatus, NewsArticleStatus } from "@/generated/prisma";
import { cityMediaCenterLinks } from "@/lib/constants";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";
import { PageSidebar } from "./page-sidebar";
import TabList from "./tab-list";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/news-events")!;

export const metadata: Metadata = {
	title,
	description
};

interface PageProps {
	searchParams: Promise<any>;
}
export default async function Page({ searchParams }: PageProps) {
	const { user } = await validateRequest();
	const { newsFilter, eventFilter, defaultNewsEventsTabs } = await searchParams;

	return (
		<BodyContainer className="">
			<Tabs defaultValue={defaultNewsEventsTabs || "news"}>
				<SidebarProvider>
					<SidebarInset className="">
						<header className="flex h-fit  flex-col gap-2 ">
							<PageTitle heading={title} className="" />
							<div className="flex items-center gap-2 shrink-0 border-y">
								<div className="bg-muted flex w-full py-1 border-y">
									<TabList />
								</div>
								<SidebarTrigger className="-mr-1 ml-auto rotate-180" />
							</div>
						</header>

						{/* list of news articles */}
						<TabsContent value="news" className="space-y-4 pt-4">
							<div className="space-x-2 flex items-center ">
								<ButtonAddEditNewsArticle>
									<PlusIcon /> news
								</ButtonAddEditNewsArticle>
								<TypographyH4 title="News articles" />
								{newsFilter && <span>({newsFilter})</span>}
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
								<ListOfNewsArticlesContainer filter={newsFilter || NewsArticleStatus.PUBLISHED} />
							</Suspense>
						</TabsContent>
						{/* list of events */}
						<TabsContent value="events" className="space-y-4 pt-4">
							<div className="space-x-2 flex items-center ">
								<ButtonAddEditEvent>
									<PlusIcon /> event
								</ButtonAddEditEvent>
								<TypographyH4 title="Events " />
								{eventFilter && <span>({eventFilter})</span>}
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
								<ListOfEventsContainer filter={eventFilter || EventStatus.PUBLISHED} />
							</Suspense>
						</TabsContent>
					</SidebarInset>
					<PageSidebar side="right" user={user} />
				</SidebarProvider>
			</Tabs>
		</BodyContainer>
	);
}

async function ListOfNewsArticlesContainer({ filter }: { filter: NewsArticleStatus }) {
	const newsArticles = await getFilteredNewsArticles(filter);
	return <ListOfNewsArticles initialData={newsArticles} filter={filter} />;
}

async function ListOfEventsContainer({ filter }: { filter: EventStatus }) {
	const events = await getFilteredEvents(filter);
	return <ListOfEvents initialData={events} filter={filter} />;
}
