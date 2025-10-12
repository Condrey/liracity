import RelatedNewsArticleItem from "@/components/news-and-events/news/related-news-article-item";
import EmptyContainer from "@/components/query-containers/empty-container";
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
