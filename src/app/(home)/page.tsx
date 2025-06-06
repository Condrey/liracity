import NewsLetterForm from "@/components/user/news-letter-form";
import HeroSection from "./hero-section";
import MessageFromLeaders from "./message-from-leaders";
import { NewsArticles } from "./news-articles";
import WhatWeStandFor from "./what-we-stand-for";

export default function Home() {
  return (
    <div className="flex flex-col size-full space-y-12">
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
    </div>
  );
}
