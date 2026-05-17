"use client";

import ArticleImage from "@/components/news-and-events/article-image";
import ButtonAddEditNewsArticle from "@/components/news-and-events/news/button-add-edit-news-article";
import ButtonDeleteNewsArticle from "@/components/news-and-events/news/button-delete-news-article";
import { PageTitle, TypographyH2 } from "@/components/page-utils";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { cn, formatDateToLocal, formatNumber } from "@/lib/utils";
import UserLinkWithTooltip from "@/utils/user-link-with-tooltip";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { Edit3Icon, HeartIcon, MapPin, ReplyIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import HashtagItem from "./hashtag-item";

interface ArticleMainContentProps {
	newsArticle: NewsArticleData;
}

export function ArticleMainContent({ newsArticle }: ArticleMainContentProps) {
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
		media,
		_count: { newsArticleLikes, newsComments }
	} = newsArticle;
	const { icon, newsArticleStatus, variant } = newsArticleStatuses[status];
	const StatusIcon = icon;
	const [showMore, setShowMore] = useState(false);
	const [showSummary, setShowSummary] = useState(false);
	return (
		<article className="space-y-6">
			<header className="flex h-fit flex-col gap-2 pt-4">
				<PageTitle heading={title} className="flex-wrap">
					<ButtonAddEditNewsArticle size={"icon"} newsArticle={newsArticle} className="flex-none">
						<Edit3Icon />
					</ButtonAddEditNewsArticle>
					<ButtonDeleteNewsArticle
						size={"icon"}
						variant={"destructive"}
						newsArticle={newsArticle}
						className="flex-none"
					>
						<Trash2Icon />
					</ButtonDeleteNewsArticle>
				</PageTitle>
				<div className="mb-2 flex flex-wrap items-center gap-2">
					<Badge className="" variant={variant}>
						{/* <StatusIcon className="mr-1" /> */}
						{newsArticleStatus}
					</Badge>

					<div className="inline-flex flex-wrap gap-0.5">
						{tags.map((tag) => (
							<HashtagItem key={tag.id} hashtag={tag} />
						))}
					</div>
					<div className="flex flex-wrap gap-2">
						{location && (
							<address>
								<MapPin className="mr-0.5 inline-flex fill-muted-foreground text-muted" />
								{location},
							</address>
						)}
						<time className="font-semibold md:font-normal">
							{formatDateToLocal(publishedAt || createdAt)} {updatedAt > createdAt && `(updated)`}
						</time>
					</div>
				</div>

				{author && (
					<div className="max-w-fit">
						<UserLinkWithTooltip username={author.username!}>
							<p className="max-w-fit text-xs italic">Author: {author.name || author.email || author.telephone}</p>
						</UserLinkWithTooltip>
					</div>
				)}
			</header>
			<section>
				{coverImage && (
					<ArticleImage
						mediaIdentifier={coverImage?.url}
						width={1920}
						height={1080}
						alt="news cover image"
						className="max-h-[450] bg-cover object-cover"
					/>
				)}
				<ButtonGroup className="ms-auto mt-0.5 w-full max-w-fit">
					<Button className="" variant={"outline"}>
						<HeartIcon
							className={cn(
								"size-4.5",
								newsArticleLikes ? "fill-red-500 text-red-500" : "fill-muted-foreground text-muted-foreground"
							)}
						/>{" "}
						{`${formatNumber(newsArticleLikes)} like${newsArticleLikes === 1 ? "" : "s"}`}
					</Button>
					<Button className="" variant={"outline"}>
						<ReplyIcon className={cn("size-4.5", newsComments ? "text-blue-500" : "text-muted-foreground")} />{" "}
						{`${formatNumber(newsComments)} comment${newsComments === 1 ? "" : "s"}`}
					</Button>
				</ButtonGroup>
			</section>
			<section className={cn("flex flex-col items-center", showSummary ? "sticky" : "relative")}>
				<TipTapViewer
					content={showSummary && summary ? `<h1>[Summary]</h1> ${summary}` : content}
					className={cn(
						"text-justify leading-tight hyphens-auto md:text-xl md:leading-relaxed",
						!showMore
							? "max-h-[300px] animate-accordion-down overflow-hidden mask-b-from-20% pb-16 transition-all ease-in sm:pb-0"
							: "animate-accordion-up pb-32 ease-out sm:pb-16",
						showSummary ? "max-h-none mask-none pb-16" : ""
					)}
				/>
				<ButtonGroup className="absolute bottom-0 mx-auto flex w-full max-w-md flex-col-reverse justify-center gap-3 rounded-md bg-secondary/10 px-3 py-2 backdrop-blur-xs sm:flex-row">
					{summary && (
						<Button
							onClick={() => {
								if (showSummary) {
									setShowSummary(false);
									setShowMore(true);
								} else {
									setShowSummary(true);
								}
							}}
							className="min-w-32"
						>
							{showSummary ? "Read Full Article" : "Show Summarized"}
						</Button>
					)}
					{!showSummary && (
						<Button onClick={() => setShowMore(!showMore)} className="min-w-32">
							{showMore ? (
								<>
									Show Less
									<CaretUpIcon />
								</>
							) : (
								<>
									Show More <CaretDownIcon />
								</>
							)}
						</Button>
					)}
				</ButtonGroup>
			</section>

			{!!media && !!media.length && (
				<section className="mt-16 space-y-2">
					<TypographyH2 title="Other media from the news article" className="uppercase" />
					<div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
						{media.map((medium, index) => {
							if (medium.type === "IMAGE")
								return (
									<ArticleImage
										key={medium.id}
										mediaIdentifier={medium.url}
										alt={`other graphic #${index + 1}`}
										height={1080}
										width={1920}
										className="aspect-video"
									/>
								);
						})}
					</div>
				</section>
			)}
		</article>
	);
}
