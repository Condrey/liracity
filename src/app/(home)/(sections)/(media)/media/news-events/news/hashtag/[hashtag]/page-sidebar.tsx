import ArticleImage from "@/components/news-and-events/article-image";
import HashtagItem from "@/components/news-and-events/news/hashtag-item";
import RelatedNewsArticleItem from "@/components/news-and-events/news/related-news-article-item";
import EmptyContainer from "@/components/query-containers/empty-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Item, ItemDescription, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarRail
} from "@/components/ui/sidebar";
import { Tag } from "@/generated/prisma";
import { newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useTransition } from "react";

export function PageSidebar({
	relatedArticles,
	hashtag,
	otherHashTags,
	...props
}: React.ComponentProps<typeof Sidebar> & {
	relatedArticles: NewsArticleData[];
	hashtag: string;
	otherHashTags: Tag[];
}) {
	return (
		<Sidebar variant="sidebar" {...props}>
			<SidebarHeader>Related News Article</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Related News Articles</SidebarGroupLabel>
					<SidebarGroupContent>
						{!relatedArticles.length ? (
							<EmptyContainer
								message={`There are no related news articles to #${hashtag}. Please navigate other hashtags`}
							>
								<div className="flex flex-wrap gap-1">
									{otherHashTags.map((t) => (
										<HashtagItem key={t.id} hashtag={t} />
									))}
								</div>
							</EmptyContainer>
						) : (
							<div className="space-y-2">
								{relatedArticles.map((item) => (
									<RelatedNewsArticleItem key={item.id} relatedNewsArticle={item} />
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

