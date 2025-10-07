"use client";

import ArticleImage from "@/components/news-and-events/article-image";
import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import { PageTitle, TypographyH2, TypographyH4 } from "@/components/page-utils";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import LoadingButton from "@/components/ui/loading-button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { NewsArticleStatus, Tag } from "@/generated/prisma";
import { newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { formatDateToLocal } from "@/lib/utils";
import UserLinkWithTooltip from "@/utils/user-link-with-tooltip";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeftIcon, Edit3Icon, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTransition } from "react";
import { getNewsArticleBySlug } from "./action";
import { PageSidebar } from "./page-sidebar";

interface NewsArticleClientProps {
	initialData: NewsArticleData;
	relatedArticles: NewsArticleData[];
	slug: string;
}

export function NewsArticleClient({ initialData, slug, relatedArticles }: NewsArticleClientProps) {
	const [isPending, startTransition] = useTransition();
	const query = useQuery({
		queryKey: ["news-article", "slug", slug],
		queryFn: async () => getNewsArticleBySlug(slug),
		initialData
	});
	const { data, status } = query;
	if (status === "error") return <ErrorContainer errorMessage="Failed to fetch article. Please retry" query={query} />;
	if (!data) return notFound();
	return (
		<SidebarProvider>
			<SidebarInset className="">
				<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
					<LoadingButton variant={"ghost"} size={"icon"} loading={isPending} onClick={() => startTransition(() => {})}>
						<Link href={"/media/news-events"}>
							<ArrowLeftIcon />
						</Link>
					</LoadingButton>
					<TypographyH4 title="News Article" />
					<SidebarTrigger className="-mr-1 ml-auto rotate-180" />
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 max-w-4xl w-full mx-auto">
					<ArticleContent newsArticle={data} />
				</div>
			</SidebarInset>
			<PageSidebar side="right" relatedArticles={relatedArticles} />
		</SidebarProvider>
	);
}
interface ArticleContentProps {
	newsArticle: NewsArticleData;
}
function ArticleContent({ newsArticle }: ArticleContentProps) {
	const {
		title,
		status,
		location,
		author,
		content,
		coverImage,
		createdAt,
		updatedAt,
		publishedAt,
		summary,
		tags,
		media
	} = newsArticle;
	const { icon, newsArticleStatus, variant } = newsArticleStatuses[status];
	const StatusIcon = icon;
	return (
		<article className="space-y-12">
			<header>
				<PageTitle heading={title}>
					<ButtonAddEditNewsArticle size={"icon"} newsArticle={newsArticle}>
						<Edit3Icon />
					</ButtonAddEditNewsArticle>
				</PageTitle>
				<div className="flex gap-2 flex-wrap items-center mb-2">
					{status != NewsArticleStatus.PRIVATE && (
						<Badge variant={variant}>
							<StatusIcon className="mr-1" />
							{newsArticleStatus}
						</Badge>
					)}

					<div className="flex gap-0.5">
						{tags.map((tag) => (
							<HashtagItem key={tag.id} hashtag={tag} />
						))}
					</div>
					<div className="flex">
						{location && (
							<>
								<MapPin className="fill-muted-foreground text-muted mr-0.5" />
								{location},
							</>
						)}{" "}
						{formatDateToLocal(publishedAt || updatedAt > createdAt ? updatedAt : createdAt)}{" "}
						{updatedAt > createdAt && `(updated)`}
					</div>
				</div>
				<UserLinkWithTooltip username={author?.username!}>
					<p className="italic  text-xs">Author: {author?.name || author?.email || author?.telephone}</p>
				</UserLinkWithTooltip>
			</header>
			<section>
				{coverImage && (
					<ArticleImage mediaIdentifier={coverImage?.url} height={1920} width={1080} alt="news cover image" />
				)}
			</section>
			<section>
				<TipTapViewer content={content} className="text-justify leading-relaxed text-xl" />
			</section>

			{!!media && media.length && (
				<section className="space-y-2">
					<TypographyH2 title="Other media from the news article" className="uppercase" />
					<div className=" grid sm:grid-cols-2 md:grid-cols-3  gap-2">
						{media.map((medium) => {
							if (medium.type === "IMAGE")
								return (
									<ArticleImage
										key={medium.id}
										mediaIdentifier={medium.url}
										alt="other graphic"
										height={1080}
										width={1920}
										className=" aspect-video "
									/>
								);
						})}
					</div>
				</section>
			)}
			{!!summary && (
				<section>
					<TypographyH2 title={`🧠 News article Too Long; Didn't Read:`} className="uppercase " />
					<TipTapViewer content={summary} className="text-justify leading-relaxed text-xl" />
				</section>
			)}
		</article>
	);
}

function HashtagItem({ hashtag: tag }: { hashtag: Tag }) {
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="bg-secondary text-secondary-foreground hover:text-primary-foreground px-2 py-1 cursor-pointer hover:bg-primary text-xs"
			onClick={() => startTransition(() => {})}
		>
			<Link key={tag.id} href={`/media/news-events/news/hashtag/${tag.name}`}>
				{isPending && <Spinner className="inline-flex" />} #{tag.name}
			</Link>
		</button>
	);
}
