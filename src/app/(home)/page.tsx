import { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/event-article-container-skeleton";
import { getLatestNews } from "@/components/news-and-events/news/action";
import NewsArticleContainerSkeleton from "@/components/news-and-events/news/news-article-container-skeleton";
import NewsLetterForm from "@/components/user/news-letter-form";
import { Suspense } from "react";
import HeroSection, { HeroSectionLoadingSkeleton } from "./hero-section";
import MessageFromLeaders from "./message-from-leaders";
import { SampleEvents } from "./sample-events";
import { SampleNewsArticles } from "./sample-news-articles";
import WhatWeStandFor from "./what-we-stand-for";

export default function Home() {
	return (
		<div className="flex flex-col justify-start max-w-none size-full gap-12">
			{/* Hero section  */}
			<Suspense fallback={<HeroSectionLoadingSkeleton/>}>
				<HeroSectionContainer />
			</Suspense>

			{/* other sections  */}
			{/* What we stand for  */}
			<div className="border-y ">
				<WhatWeStandFor />
			</div>

			{/* Message from our leaders  */}
			{/* <MessageFromLeaders /> */}


			{/* Upcoming events  */}
			<Suspense
				fallback={
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{Array.from({ length: 6 }, (_, index) => (
							<NewsArticleContainerSkeleton key={index} />
						))}
					</div>
				}
			>
				<SampleEvents />
			</Suspense>

			{/* Sample news articles  */}
			<Suspense
				fallback={
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{Array.from({ length: 6 }, (_, index) => (
							<EventsArticleContainerSkeleton key={index} />
						))}
					</div>
				}
			>
				<SampleNewsArticles />
			</Suspense>
			{/* News letter form */}
			<NewsLetterForm />
		</div>
	);
}

async function HeroSectionContainer() {
	const latestNews = await getLatestNews();
	return <HeroSection initialData={latestNews} />;
}
