import { EventsArticleContainerSkeleton } from "@/components/feature/news-and-events/events/event-article-container-skeleton";
import { getLatestNews } from "@/components/feature/news-and-events/news/action";
import NewsArticleContainerSkeleton from "@/components/feature/news-and-events/news/news-article-container-skeleton";
import NewsLetterForm from "@/components/feature/user/news-letter-form";
import PageContainer from "@/components/page-container";
import { Suspense } from "react";
import HeroSection, { HeroSectionLoadingSkeleton } from "./hero-section";
import { SampleEvents } from "./sample-events";
import { SampleNewsArticles } from "./sample-news-articles";
import WhatWeStandFor from "./what-we-stand-for";

export default function Home() {
	return (
		<PageContainer className="flex flex-col justify-start px-0 pt-0">
			{/* Hero section  */}
			<Suspense fallback={<HeroSectionLoadingSkeleton />}>
				<HeroSectionContainer />
			</Suspense>

			{/* other sections  */}
			{/* What we stand for  */}
			<div className="border-y">
				<WhatWeStandFor />
			</div>

			{/* Upcoming events  */}
			<Suspense
				fallback={
					<div className="grid gap-4 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{Array.from({ length: 6 }, (_, index) => (
							<EventsArticleContainerSkeleton key={index} />
						))}
					</div>
				}
			>
				<SampleEvents />
			</Suspense>
			<hr className="my-6" />
			{/* Message from our leaders  */}
			{/* <MessageFromLeaders /> */}

			{/* Sample news articles  */}
			<Suspense
				fallback={
					<div className="grid gap-4 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{Array.from({ length: 6 }, (_, index) => (
							<NewsArticleContainerSkeleton key={index} />
						))}
					</div>
				}
			>
				<SampleNewsArticles />
			</Suspense>
			{/* News letter form */}
			<NewsLetterForm />
		</PageContainer>
	);
}

async function HeroSectionContainer() {
	const latestNews = await getLatestNews();
	return <HeroSection initialData={latestNews} />;
}
