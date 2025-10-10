import { useSession } from "@/app/session-provider";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma";
import { myPrivileges, newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import ArticleImage from "../article-image";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";

export default function NewsArticleContainer({
	newsArticle: { title, id, coverImage, createdAt, slug, summary, content, status, tags, location, publishedAt },
	className
}: {
	newsArticle: NewsArticleData;
	className?: string;
}) {
	const {getNavigationLinkWithPathnameWithoutUpdate} = useCustomSearchParams()
	const [isPending, startTransition] = useTransition();
	const { newsArticleStatus, icon, variant } = newsArticleStatuses[status];
	const Icon = icon;
	const { user } = useSession();
	const isNotVisitor = myPrivileges[user?.role || Role.USER].includes(Role.STAFF);
	return (
		<Link href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/${slug}`)} className="size-full  ">
			<Item
				variant="outline"
				className={cn(
					"p-0 pb-6 group/article cursor-pointer size-auto   hover:bg-muted   hover:shadow-md",
					isPending && "animate-pulse",
					className
				)}
				onClick={() => startTransition(() => {})}
			>
				<ItemHeader className="px-0 size-full min-h-[200px]  relative overflow-hidden ">
					<div className="absolute">
						<ArticleImage
							mediaIdentifier={coverImage?.url}
							// placeholder="/image-placeholder.jpeg"
							alt={title}
							width={720}
							height={480}
							className="size-full aspect-square touch-none pointer-events-none  mask-b-from-10% mask-b-to-90% rounded-sm object-cover  group-hover/article:scale-110 transition-all duration-300"
						/>
					</div>

					<LoadingButton
						loading={isPending}
						className={cn(
							"hidden group-hover/article:block",
							"max-w-fit max-h-fit absolute -translate-x-1/2 top-1/2 -translate-y-1/2 start-1/2 size-full py-3",
							isPending && "block"
						)}
					>
						Read article
					</LoadingButton>
					<Badge className="absolute bg-amber-300 text-amber-950 top-0 left-0">News article</Badge>
				</ItemHeader>
					<ItemFooter className="gap-1 px-3 space-x-1 flex-wrap justify-start">
						{isNotVisitor && (
							<Badge variant={variant}>
								<Icon />
								{newsArticleStatus}
							</Badge>
						)}
						<div className="gap-1.5 flex flex-wrap">
							{tags.map((tag) => (
								<span className={"bg-secondary px-1 text-secondary-foreground"} key={tag.id}>
									#{tag.name}
								</span>
							))}
						</div>
						{location&&<address className="text-muted-foreground text-sm">
							<MapPinIcon className="size-4 inline-flex fill-muted-foreground text-card" />
							{location}
						</address>}
						{!!publishedAt && (
							<p>
								<span className="text-xs">Published {formatDateToLocal(publishedAt)}</span>
							</p>
						)}
					</ItemFooter>
					<ItemContent className="px-3">
						<ItemTitle>{title}</ItemTitle>
						<ItemDescription>
							<TipTapViewer content={summary ?? content} />
						</ItemDescription>
					</ItemContent>
			</Item>
		</Link>
	);
}
