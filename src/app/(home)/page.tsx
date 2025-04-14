import NewsLetterForm from "@/components/user/news-letter-form";
import { NewsArticles } from "./news-articles";

export default function Home() {
  return (
    <div className=" size-full pt-[56px]">
      {Array.from({ length: 10 }, (_, index) => (
        <h1 key={index}>
          {index + 1}.First page is always the beginning of a new journey
        </h1>
      ))}
      {/* Sample news articles  */}
      <NewsArticles/>
      {/* News letter form */}
      <NewsLetterForm/>
    </div>
  );
}
