import { EventsArticleContainerSkeleton } from "@/components/news-and-events/events/event-article-container-skeleton";
import NewsArticleContainerSkeleton from "@/components/news-and-events/news/news-article-container-skeleton";
import NewsLetterForm from "@/components/user/news-letter-form";
import { Suspense } from "react";
import BodyContainer from "./body-container";
import HeroSection from "./hero-section";
import MessageFromLeaders from "./message-from-leaders";
import { SampleEvents } from "./sample-events";
import { SampleNewsArticles } from "./sample-news-articles";
import WhatWeStandFor from "./what-we-stand-for";
import { getLatestNews } from "@/components/news-and-events/news/action";

export default function Home() {
	return (
		<BodyContainer className="flex flex-col max-w-none size-full space-y-12">
			{/* Hero section  */}
			<Suspense>
				<HeroSectionContainer />
			</Suspense>

			{/* other sections  */}
			{/* What we stand for  */}
			<div className="border-y ">
				<WhatWeStandFor />
			</div>
			{/* Message from our leaders  */}
			<MessageFromLeaders />
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
		</BodyContainer>
	);
}

async function HeroSectionContainer() {
	const latestNews = await getLatestNews();
	return <HeroSection initialData={latestNews} />;
}
