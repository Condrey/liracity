"use client";

import { LuciaUser } from "@/app/(auth)/lib/session";
import ButtonAddEditEvent from "@/components/news-and-events/events/button-add-edit-event";
import { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/event-article-container-skeleton";
import ListOfEvents from "@/components/news-and-events/events/list-of-events";
import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import ListOfNewsArticles from "@/components/news-and-events/news/list-of-news-articles";
import NewsArticleContainerSkeleton from "@/components/news-and-events/news/news-article-container-skeleton";
import { PageTitle, TypographyH4 } from "@/components/page-utils";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Footer from "@/components/user/footer";
import { cityMediaCenterLinks } from "@/lib/constants";
import { EventData, NewsArticleData } from "@/lib/types";
import { PlusIcon } from "lucide-react";
import { Suspense, useState } from "react";
import { PageSidebar } from "./page-sidebar";
import TabList, { TabListSwitchButton } from "./tab-list";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/news-events")!;

interface PageClientProps {
	searchParams: any;
	user: LuciaUser | null;
	initialNewsArticles: NewsArticleData[];
	initialEvents: EventData[];
}
export default function PageClient({ searchParams, user, initialEvents, initialNewsArticles }: PageClientProps) {
	const { newsFilter, eventFilter, defaultNewsEventsTabs } = searchParams;
	const [tabValue, setTabValue] = useState(defaultNewsEventsTabs || "news");
	return (
		<div>
			<Tabs onValueChange={setTabValue} defaultValue={tabValue}>
				<SidebarProvider>
					<SidebarInset className="space-y-6">
						<header className="flex h-fit  flex-col gap-2 sticky top-0 ">
							<PageTitle heading={title} className="px-3" />
							<div className="flex items-center gap-2 shrink-0 border-y">
								<div className="bg-muted flex px-3 w-full py-1 border-y">
									<TabList setTabValue={setTabValue} />
								</div>
								<SidebarTrigger className=" ml-auto mr-3 rotate-180" />
							</div>
						</header>

						<TabListSwitchButton className="max-w-9xl mx-auto w-full" />

						{/* list of news articles */}
						<TabsContent
							value="news"
							className="space-y-4 px-3 w-full max-w-9xl mx-auto md:min-h-[65vh] min-h-[44vh]  "
						>
							<div className="space-x-2 flex items-center ">
								<ButtonAddEditNewsArticle>
									<PlusIcon /> news
								</ButtonAddEditNewsArticle>
								<TypographyH4 title="News articles" />
								{newsFilter && <span>({newsFilter})</span>}
							</div>
							<Suspense
								fallback={
									<div className="grid sm:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 gap-4">
										{Array.from({ length: 6 }, (_, index) => (
											<NewsArticleContainerSkeleton key={index} />
										))}
									</div>
								}
							>
								{/* filter={newsFilter || NewsArticleStatus.PUBLISHED}  */}
								<ListOfNewsArticles initialData={initialNewsArticles} filter={newsFilter || undefined} />
							</Suspense>
						</TabsContent>
						{/* list of events */}
						<TabsContent
							value="events"
							className="space-y-4  px-3 w-full  max-w-9xl mx-auto md:min-h-[65vh] min-h-[44vh] "
						>
							<div className="space-x-2 flex items-center ">
								<ButtonAddEditEvent>
									<PlusIcon /> event
								</ButtonAddEditEvent>
								<TypographyH4 title="Events " />
								{eventFilter && <span>({eventFilter})</span>}
							</div>

							<Suspense
								fallback={
									<div className="grid sm:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 gap-4">
										{Array.from({ length: 6 }, (_, index) => (
											<EventsArticleContainerSkeleton key={index} />
										))}
									</div>
								}
							>
								{/* filter={eventFilter || EventStatus.PUBLISHED} */}
								<ListOfEvents initialData={initialEvents} filter={eventFilter || undefined} />
							</Suspense>
						</TabsContent>
						<Footer />
					</SidebarInset>
					<PageSidebar side="right" user={user} />
				</SidebarProvider>
			</Tabs>
		</div>
	);
}
