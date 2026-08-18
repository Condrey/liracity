import { useSession } from "@/app/session-provider";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges, newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import ArticleImage from "../article-image";

export default function NewsArticleContainer({
	newsArticle: { title, id, coverImage, createdAt, slug, summary, content, status, tags, location, publishedAt },
	className
}: {
	newsArticle: NewsArticleData;
	className?: string;
}) {
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const [isPending, startTransition] = useTransition();
	const [isHovering, setIsHovering] = useState(false);
	const { newsArticleStatus, icon, variant } = newsArticleStatuses[status];
	const Icon = icon;
	const { user } = useSession();
	const isNotVisitor = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.STAFF);
	return (
		<Item
			variant="outline"
			className={cn(
				"group/article size-auto h-fit cursor-pointer border border-warning/20 p-0",
				isPending && "animate-pulse",
				isHovering && "bg-muted shadow-md",
				className
			)}
			onClick={() => startTransition(() => {})}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			asChild
		>
			<Link href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/${slug}`)} className="pb-6">
				<ItemHeader className="relative min-h-[20px] overflow-hidden px-0">
					<div className="">
						<ArticleImage
							mediaIdentifier={coverImage?.url}
							placeholder="/image-placeholder.jpeg"
							alt={title}
							width={720}
							height={480}
							className={cn(
								"pointer-events-none aspect-square max-h-[200px] touch-none rounded-sm mask-b-from-2% object-cover",
								isHovering && "scale-110 transition-all duration-300"
							)}
						/>
					</div>

					<LoadingButton
						loading={isPending}
						className={cn(
							"hidden",
							"absolute start-1/2 top-1/2 size-full max-h-fit max-w-fit -translate-x-1/2 -translate-y-1/2 py-3",
							isPending && "block",
							isHovering && "block"
						)}
					>
						{isPending ? "Opening" : "Read article"}
					</LoadingButton>
					<Badge className="absolute top-0 left-0 bg-amber-300 text-amber-950">News article</Badge>
				</ItemHeader>
				<ItemFooter className="flex-wrap justify-start gap-1 space-x-1 px-3">
					{isNotVisitor && (
						<Badge variant={variant}>
							<Icon />
							{newsArticleStatus}
						</Badge>
					)}
					<div className="flex flex-wrap gap-1.5">
						{tags.slice(0, 3).map((tag) => (
							<span className={"bg-secondary px-1 text-secondary-foreground"} key={tag.id}>
								#{tag.name}
							</span>
						))}
						{tags.length > 3 && <span>...</span>}
					</div>
					{location && (
						<address className="text-sm text-muted-foreground">
							<MapPinIcon className="inline-flex size-4 fill-muted-foreground text-card" />
							{location}
						</address>
					)}
					{!!publishedAt ? (
						<span className="text-xs">Published {formatDateToLocal(publishedAt)}</span>
					) : (
						<span className="text-xs">{formatDateToLocal(createdAt)}</span>
					)}
				</ItemFooter>
				<ItemContent className="px-3">
					<ItemTitle className="line-clamp-2">{title}</ItemTitle>
					<ItemDescription>
						<div className="typeset typeset-notes max-w-[37em]">
							<TipTapViewer content={summary ?? content} />
						</div>
					</ItemDescription>
				</ItemContent>
			</Link>
		</Item>
	);
}
