import { NewsArticleContainerSkeleton } from "@/components/news-and-events/news/list-of-news-articles";
import NewsLetterForm from "@/components/user/news-letter-form";
import { Suspense } from "react";
import BodyContainer from "./body-container";
import HeroSection from "./hero-section";
import MessageFromLeaders from "./message-from-leaders";
import { NewsArticles } from "./news-articles";
import WhatWeStandFor from "./what-we-stand-for";

export default function Home() {
	return (
		<BodyContainer className="flex flex-col max-w-none size-full space-y-12">
			{/* Hero section  */}
			<HeroSection />

			{/* other sections  */}
			{/* What we stand for  */}
			<div className="border-y ">
				<WhatWeStandFor />
			</div>
			{/* Message from our leaders  */}
			<MessageFromLeaders />
			{/* Sample news articles  */}
			<Suspense
				fallback={
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{Array.from({ length: 6 }, (_, index) => (
							<NewsArticleContainerSkeleton key={index} />
						))}
					</div>
				}
			>
				<NewsArticles />
			</Suspense>
			{/* News letter form */}
			<NewsLetterForm />
		</BodyContainer>
	);
}
