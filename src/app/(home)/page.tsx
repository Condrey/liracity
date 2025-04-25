import NewsLetterForm from "@/components/user/news-letter-form";
import { NewsArticles } from "./news-articles";
import HeroSection from "./hero-section";
import WhatWeStandFor from "./what-we-stand-for";

export default function Home() {
  { /*pt-[85px]*/}
  return (
    <div className=" size-full space-y-12">
   {/* Hero section  */}
   <HeroSection/>
   {/* other sections  */}
   {/* What we stand for  */}
   <WhatWeStandFor/>
  {/* Sample news articles  */}
  <NewsArticles/>
      {/* News letter form */}
      <NewsLetterForm/>
      {/* What we stand for  */}
    
    </div>
  );
}
