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
import { NewsArticleData } from "@/lib/types";
import { XIcon } from "lucide-react";

export function PageSidebar({
	relatedArticles,
	setOpen,
	...props
}: React.ComponentProps<typeof Sidebar> & { relatedArticles: NewsArticleData[]; setOpen: (open: boolean) => void }) {
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
