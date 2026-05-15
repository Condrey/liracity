import { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/event-article-container-skeleton";
import { getLatestNews } from "@/components/news-and-events/news/action";
import NewsArticleContainerSkeleton from "@/components/news-and-events/news/news-article-container-skeleton";
import NewsLetterForm from "@/components/user/news-letter-form";
import { Suspense } from "react";
import PageContainer from "../../components/page-container";
import HeroSection, { HeroSectionLoadingSkeleton } from "./hero-section";
import { SampleEvents } from "./sample-events";
import { SampleNewsArticles } from "./sample-news-articles";
import WhatWeStandFor from "./what-we-stand-for";

export default function Home() {
	return (
		<PageContainer className="flex flex-col justify-start  px-0  pt-0 ">
			{/* Hero section  */}
			<Suspense fallback={<HeroSectionLoadingSkeleton />}>
				<HeroSectionContainer />
			</Suspense>

			{/* other sections  */}
			{/* What we stand for  */}
			<div className="border-y ">
				<WhatWeStandFor />
			</div>

			{/* Upcoming events  */}
			<Suspense
				fallback={
					<div className="grid px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
					<div className="grid px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
