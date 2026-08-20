"use client";

import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import ListOfNewsArticles from "@/components/news-and-events/news/list-of-news-articles";
import NewsArticleContainerSkeleton from "@/components/news-and-events/news/news-article-container-skeleton";
import { TypographyH4 } from "@/components/page-utils";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Footer from "@/components/user/footer";
import { User } from "@/lib/auth";
import { cityMediaCenterLinks, LINK_NEWS } from "@/lib/constants";
import { NewsArticleData } from "@/lib/types";
import { PlusIcon } from "lucide-react";
import { Suspense } from "react";
import MediaPageHeader from "../../page-header";
import { PageSidebar } from "./page-sidebar";

// import { TabListSwitchButton } from "./tab-list";

const { title } = cityMediaCenterLinks.find((val) => val.href === LINK_NEWS)!;

interface PageClientProps {
	searchParams: any;
	user: User | null;
	initialNewsArticles: NewsArticleData[];
}
export default function PageClient({ searchParams, user, initialNewsArticles }: PageClientProps) {
	const { newsFilter } = searchParams;

	return (
		<>
			<SidebarInset className="space-y-6">
				<MediaPageHeader
					title={title}
					start={
						<ButtonAddEditNewsArticle variant={"secondary"}>
							<PlusIcon /> news
						</ButtonAddEditNewsArticle>
					}
					end={<SidebarTrigger size="icon" variant={"destructive"} />}
					className=""
				/>

				{/* list of news articles */}
				<div className="mx-auto min-h-[44vh] w-full max-w-9xl space-y-4 px-3 md:min-h-[65vh]">
					<div className="flex items-center space-x-2">
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
						<ListOfNewsArticles initialData={initialNewsArticles} filter={newsFilter || undefined} />
					</Suspense>
				</div>

				<Footer />
			</SidebarInset>
			<PageSidebar side="right" user={user} />
		</>
	);
}
