"use client";

import { LuciaUser } from "@/app/(auth)/lib/session";
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
import { cityMediaCenterLinks } from "@/lib/constants";
import { EventData, NewsArticleData } from "@/lib/types";
import { MenuIcon, PlusIcon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
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
				<SidebarProvider className="" defaultOpen={false} cookieName="NEWS_EVENT_SIDEBAR">
					<SidebarInset className="space-y-6 ">
						<header className="flex h-fit bg-background z-50  flex-col gap-2 sticky top-0 ">
							<PageTitle heading={title} className="px-3" />
							<div className="flex items-center gap-2 shrink-0 border-y">
								<div className=" flex px-3 bg-card w-full py-1 border-y">
									<TabList setTabValue={setTabValue} />
								</div>
								{!sidebar.open && (
									<Button variant="warning" size={"icon-lg"} onClick={() => sidebar.setOpen(!sidebar.open)}>
										<MenuIcon />
									</Button>
								)}
							</div>
						</header>

						<TabListSwitchButton setTabValue={setTabValue} className="max-w-9xl mx-auto w-full" />

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
								{eventsFilter && <span>({eventsFilter})</span>}
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
