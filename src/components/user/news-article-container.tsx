import { NewsArticleData } from "@/lib/types";
import { formatDateToLocal } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { MapPinIcon } from "lucide-react";

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
      <CardHeader>
        <h1 className="text-lg leading-tight tracking-tighter  line-clamp-2 text-ellipsis">{title}</h1>
        <h2 className="flex text-sm items-end gap-2  tracking-wider">
<MapPinIcon strokeWidth={0.5} />            <span>{location}</span>
       
        </h2>
        <CardDescription className="w-full gap-2 ice flex flex-wrap flex-row" >
        <p >
        <span className="text-xs">Published {formatDateToLocal(publishedAt)}</span>
        {" "}<cite className="italic">By {author.name}</cite></p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
