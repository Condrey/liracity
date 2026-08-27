import HashtagItem from "@/components/feature/news-and-events/news/hashtag-item";
import RelatedNewsArticleItem from "@/components/feature/news-and-events/news/related-news-article-item";
import EmptyContainer from "@/components/query-containers/empty-container";
import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarRail
} from "@/components/ui/sidebar";
import { Tag } from "@/generated/prisma/client";
import { NewsArticleData } from "@/lib/types";
import { XIcon } from "lucide-react";

export function PageSidebar({
	relatedArticles,
	hashtag,
	otherHashTags,
	setOpen,
	...props
}: React.ComponentProps<typeof Sidebar> & {
	relatedArticles: NewsArticleData[];
	hashtag: string;
	otherHashTags: Tag[];
	setOpen: (open: boolean) => void;
}) {
	return (
		<Sidebar variant="sidebar" {...props} className="pt-[var(--header-height)]">
			<SidebarHeader className="flex-row items-center">
				{
					<Button className="" size="icon" variant={"destructive"} onClick={() => setOpen(false)}>
						<XIcon />
					</Button>
				}
				Related News Article
			</SidebarHeader>
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
