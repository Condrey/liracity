import { NewsArticleData } from "@/lib/types";
import { formatDateToLocal } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

interface NewsContainerProps {
  className?: string;
  newsArticle: NewsArticleData;
}
export default function NewsArticleContainer({
  className,
  newsArticle: { imageUrl, title, publishedAt, location, _count, author },
}: NewsContainerProps) {
  return (
    <Card className={className}>
      <CardContent>
        <Image
          src={imageUrl || "/logo.png"}
          alt={title}
          width={500}
          height={500}
          className="w-full h-48 object-cover rounded-md"
        />
      </CardContent>
      <CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <span>{location}</span>
          <span>{formatDateToLocal(publishedAt)}</span>
        </CardDescription>
        <CardDescription className="italic">
          Published by: {author.name}
        </CardDescription>
      </CardDescription>
    </Card>
  );
}
