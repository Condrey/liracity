"use client";

import ButtonAddEditEvent from "@/components/news-and-events/events/button-add-edit-event";
import { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/event-article-container-skeleton";
import ListOfEvents from "@/components/news-and-events/events/list-of-events";
import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import ListOfNewsArticles from "@/components/news-and-events/news/list-of-news-articles";
import NewsArticleContainerSkeleton from "@/components/news-and-events/news/news-article-container-skeleton";
import { PageTitle, TypographyH4 } from "@/components/page-utils";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Footer from "@/components/user/footer";
import { User } from "@/lib/auth";
import { cityMediaCenterLinks } from "@/lib/constants";
import { EventData, NewsArticleData } from "@/lib/types";
import { MenuIcon, PlusIcon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { PageSidebar } from "./page-sidebar";
import TabList, { TabListSwitchButton } from "./tab-list";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/news-events")!;

interface PageClientProps {
	searchParams: any;
	user: User | null;
	initialNewsArticles: NewsArticleData[];
	initialEvents: EventData[];
}
export default function PageClient({ searchParams, user, initialEvents, initialNewsArticles }: PageClientProps) {
	const { newsFilter, eventsFilter, defaultNewsEventsTabs: _defaultNewsEventsTabs } = searchParams;
	const defaultNewsEventsTabs = _defaultNewsEventsTabs || "news";
	const [tabValue, setTabValue] = useState(defaultNewsEventsTabs);
	const sidebar = useSidebar();

	useEffect(() => {
		setTabValue(defaultNewsEventsTabs);
	}, [defaultNewsEventsTabs]);

	return (
		<div className="h-[calc(100vh-var(--header-height))]">
			<Tabs onValueChange={setTabValue} value={tabValue}>
				{/* <pre>{JSON.stringify({ tabValue, defaultNewsEventsTabs }, null, 2)}</pre> */}
				<SidebarProvider defaultOpen={false} cookieName="NEWS_EVENT_SIDEBAR">
					<SidebarInset className="space-y-6">
						<header className="sticky top-0 z-20 flex h-fit flex-col gap-2 bg-background pt-4">
							<PageTitle heading={title} className="px-3" />
							<div className="b flex shrink-0 items-center gap-2">
								<div className="flex w-full rounded-sm border-y bg-card px-3 py-1">
									<TabList setTabValue={setTabValue} />
								</div>
								{!sidebar.open && (
									<Button variant="warning" size={"icon-lg"} onClick={() => sidebar.setOpen(!sidebar.open)}>
										<MenuIcon />
									</Button>
								)}
							</div>
						</header>

						<TabListSwitchButton setTabValue={setTabValue} className="mx-auto w-full max-w-9xl" />

						{/* list of news articles */}
						<TabsContent value="news" className="mx-auto min-h-[44vh] w-full max-w-9xl space-y-4 px-3 md:min-h-[65vh]">
							<div className="flex items-center space-x-2">
								<ButtonAddEditNewsArticle>
									<PlusIcon /> news
								</ButtonAddEditNewsArticle>
								<TypographyH4 title="News articles" />
								{newsFilter && <span>({newsFilter})</span>}
							</div>
							<Suspense
								fallback={
									<div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
							className="mx-auto min-h-[44vh] w-full max-w-9xl space-y-4 px-3 md:min-h-[65vh]"
						>
							<div className="flex items-center space-x-2">
								<ButtonAddEditEvent>
									<PlusIcon /> event
								</ButtonAddEditEvent>
								<TypographyH4 title="Events " />
								{eventsFilter && <span>({eventsFilter})</span>}
							</div>

							<Suspense
								fallback={
									<div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
										{Array.from({ length: 6 }, (_, index) => (
											<EventsArticleContainerSkeleton key={index} />
										))}
									</div>
								}
							>
								{/* filter={eventsFilter || EventStatus.PUBLISHED} */}
								<ListOfEvents initialData={initialEvents} filter={eventsFilter || undefined} />
							</Suspense>
						</TabsContent>
						<Footer />
					</SidebarInset>
					<PageSidebar side="right" user={user} setOpen={sidebar.setOpen} sidebar={sidebar} />
				</SidebarProvider>
			</Tabs>
		</div>
	);
}
