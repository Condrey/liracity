import NewsLetterForm from "@/components/user/news-letter-form";
import HeroSection from "./hero-section";
import MessageFromLeaders from "./message-from-leaders";
import { NewsArticles } from "./news-articles";
import WhatWeStandFor from "./what-we-stand-for";
import BodyContainer from "./body-container";

export default function Home() {
  return (
    <BodyContainer className="flex flex-col max-w-none size-full space-y-12">
      {/* Hero section  */}
      <HeroSection />

      {/* other sections  */}
      {/* What we stand for  */}
      <WhatWeStandFor />
      {/* Message from our leaders  */}
      <MessageFromLeaders />
      {/* Sample news articles  */}
      <NewsArticles />
      {/* News letter form */}
      <NewsLetterForm />
    </BodyContainer>
  );
}
