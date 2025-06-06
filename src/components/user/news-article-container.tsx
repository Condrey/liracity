import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

interface NewsContainerProps {
  className?: string;
  newsArticle: NewsArticleData;
}
export default function NewsArticleContainer({
  className,
  newsArticle: { imageUrl, title, publishedAt, location, _count, author },
}: NewsContainerProps) {
  return (
    <Card
      className={cn(
        "py-0 pb-6 group/article cursor-pointer hover:bg-primary hover:text-primary-foreground hover:shadow-md",
        className,
      )}
    >
      <CardContent className="px-0 relative flex flex-col justify-center items-center from-secondary to-background overflow-hidden  bg-radial">
        <Image
          src={imageUrl || "/logo.png"}
          alt={title}
          width={500}
          height={500}
          className="w-full h-48 object-cover rounded-md group-hover/article:scale-110 transition-all duration-300"
        />
        <Button
          className={cn(
            "hidden group-hover/article:block",
            "max-w-fit absolute max-h-fit m-auto size-full",
          )}
        >
          Read article
        </Button>
      </CardContent>
      <CardHeader>
        <h1 className="text-lg leading-tight tracking-tight text-balance  line-clamp-3 text-ellipsis">
          {title}
        </h1>
        <div className="w-full flex  gap-0.5">
          <MapPinIcon strokeWidth={0.5} />{" "}
          <p className="text-muted-foreground text-sm group-hover/article:text-primary-foreground  gap-2 line-clamp-1 text-ellipsis  tracking-wider">
            {location}
          </p>
        </div>
        <CardDescription className="w-full gap-2 ice flex flex-wrap group-hover/article:text-primary-foreground   flex-row">
          <p>
            <span className="text-xs">
              Published {formatDateToLocal(publishedAt)}
            </span>
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
