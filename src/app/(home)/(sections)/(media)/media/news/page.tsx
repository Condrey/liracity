import { getFilteredNewsArticles } from "@/components/feature/news-and-events/news/action";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cityMediaCenterLinks, LINK_NEWS } from "@/lib/constants";
import { validateRequest } from "@/lib/get-session";
import { Metadata } from "next";
import PageClient from "./page-client";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === LINK_NEWS)!;

export const metadata: Metadata = {
	title,
	description
};

interface PageProps {
	searchParams: Promise<any>;
}
export default async function Page({ searchParams }: PageProps) {
	const [validatedRequest, _searchParams] = await Promise.all([await validateRequest(), await searchParams]);

	const [newsArticles] = await Promise.all([await getFilteredNewsArticles(_searchParams.newsFilter || undefined)]);

	return (
		<div className="h-[calc(100vh-var(--header-height))]">
			<SidebarProvider cookieName="NEWS_EVENT_SIDEBAR">
				<PageClient initialNewsArticles={newsArticles} searchParams={_searchParams} user={validatedRequest.user} />
			</SidebarProvider>
		</div>
	);
}
