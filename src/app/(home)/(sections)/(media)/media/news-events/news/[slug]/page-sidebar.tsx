import ArticleImage from "@/components/news-and-events/article-image";
import EmptyContainer from "@/components/query-containers/empty-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Item, ItemDescription, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarRail
} from "@/components/ui/sidebar";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useTransition } from "react";

export function PageSidebar({
	relatedArticles,
	...props
}: React.ComponentProps<typeof Sidebar> & { relatedArticles: NewsArticleData[] }) {
	return (
		<Sidebar variant="sidebar" {...props} className="">
			<SidebarHeader>Related News Article</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Browse Related News Articles</SidebarGroupLabel>
					<SidebarGroupContent>
						{!relatedArticles.length ? (
							<EmptyContainer message="There are no related news articles to this headline." />
						) : (
							<div className="space-y-2">
								{relatedArticles.map((item) => (
									<RelatedNewsArticleItem relatedNewsArticle={item} key={item.id} />
								))}
							</div>
						)}
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}

function RelatedNewsArticleItem({ relatedNewsArticle: item }: { relatedNewsArticle: NewsArticleData }) {
	const { theme } = useTheme();
	const [isPending, startTransition] = useTransition();

	return (
		<Item
			key={item.id}
			variant={theme === "dark" ? "muted" : "outline"}
			size="sm"
			onClick={() => startTransition(() => {})}
			className={cn(
				"px-2 py-1 bg-card dark:bg-muted hover:bg-muted hover:cursor-pointer",
				isPending && "bg-muted animate-pulse"
			)}
			asChild
		>
			<Link href={`/media/news-events/news/${item.slug}`}>
				{item.coverImage && (
					<ItemMedia className="pointer-events-none touch-auto w-full flex *:flex-1">
						<ArticleImage
							mediaIdentifier={item.coverImage.url}
							height={180}
							width={180}
							className="h-[110px] w-full object-cover "
						/>
					</ItemMedia>
				)}
				<ItemHeader className="flex-col items-start gap-0.5">
					<ItemTitle className="border-b mb-1">{item.title}</ItemTitle>
					<div className="text-xs block text-start">
						{item.location && (
							<>
								<MapPin className="size-3 inline-flex mr-0.5" />
								{item.location},
							</>
						)}{" "}
						{formatDateToLocal(item.publishedAt || item.createdAt)}
					</div>
					<ItemDescription>
						<TipTapViewer content={item.summary || item.content} />
					</ItemDescription>
				</ItemHeader>
			</Link>
		</Item>
	);
}
