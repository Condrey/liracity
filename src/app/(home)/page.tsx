import NewsLetterForm from "@/components/user/news-letter-form";
import { NewsArticles } from "./news-articles";

export default function Home() {
  return (
    <div className=" size-full pt-[56px] space-y-12">
   
      {/* Sample news articles  */}
      <NewsArticles/>
      {/* News letter form */}
      <NewsLetterForm/>
    </div>
  );
}
