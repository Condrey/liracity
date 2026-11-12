import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { LINK_NEWS } from "@/lib/constants";
import { myPrivileges, newsArticleStatuses } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { MapPinIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
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
	const { newsArticleStatus, icon, variant } = newsArticleStatuses[status];
	const Icon = icon;
	const { user } = useSession();
	const isNotVisitor = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.STAFF);
	const link = getNavigationLinkWithPathnameWithoutUpdate(`${LINK_NEWS}/${slug}`);
	return (
		<Item
			variant="outline"
			className={cn(
				"group/article size-auto h-fit cursor-pointer border p-0",
				isPending && "animate-pulse",
				"hover:bg-muted hover:shadow-md",
				className
			)}
			onClick={() => startTransition(() => {})}
			asChild
		>
			<Link href={link} className="pb-6">
				<ItemHeader className="relative min-h-5 overflow-hidden px-0">
					<div className="">
						<ArticleImage
							mediaIdentifier={coverImage?.url}
							placeholder="/image-placeholder.jpeg"
							alt={title}
							width={720}
							height={480}
							className={cn(
								"pointer-events-none aspect-square max-h-50 touch-none rounded-sm object-cover",
								"group-hover/article:scale-110 group-hover/article:transition-all group-hover/article:duration-300"
							)}
						/>
					</div>

					<LoadingButton
						loading={isPending}
						className={cn(
							"hidden",
							"absolute inset-s-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
							isPending && "block",
							"group-hover/article:block"
						)}
					>
						{isPending ? "Opening" : "Read article"}
					</LoadingButton>
					<Badge className="absolute top-0 left-0 bg-linear-90 from-amber-300 to-amber-500 text-amber-950 dark:text-amber-950">
						News article
					</Badge>
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
						<address className="text-sm text-muted-foreground dark:text-warning">
							<MapPinIcon className="inline-flex size-4 fill-muted-foreground text-card dark:fill-warning/20 dark:text-warning" />
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
					<ItemTitle className="mb-2 line-clamp-2 uppercase">{title}</ItemTitle>
					<ItemDescription>
						<TipTapViewer
							content={summary ?? content}
							className="text-start text-sm text-muted-foreground md:text-sm"
						/>
					</ItemDescription>
				</ItemContent>
			</Link>
		</Item>
	);
}
