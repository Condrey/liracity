"use client";

import { useSession } from "@/app/session-provider";
import { getNewsArticleBySlug } from "@/components/news-and-events/news/action";
import { ArticleMainContent } from "@/components/news-and-events/news/article-main-content";
import { useUpdateNewsArticleStatusMutation } from "@/components/news-and-events/news/form/mutation";
import { TypographyH4 } from "@/components/page-utils";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import LoadingButton from "@/components/ui/loading-button";
import { SidebarInset, useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import Footer from "@/components/user/footer";
import { NewsArticleStatus, Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { LINK_NEWS } from "@/lib/constants";
import { myPrivileges } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { MenuIcon, MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { PageSidebar } from "./page-sidebar";

interface NewsArticleClientProps {
	initialData: NewsArticleData;
	relatedArticles: NewsArticleData[];
	slug: string;
}

export function NewsArticleClient({ initialData, slug, relatedArticles }: NewsArticleClientProps) {
	const sidebar = useSidebar();
	const { user } = useSession();
	const [isPending, startTransition] = useTransition();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const isAPublisher = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);

	const { isPending: mutationPending, mutate } = useUpdateNewsArticleStatusMutation();

	const query = useQuery({
		queryKey: ["news-article", "slug", slug],
		queryFn: async () => getNewsArticleBySlug(slug),
		initialData
	});
	const { data, status } = query;

	if (status === "error") return <ErrorContainer errorMessage="Failed to fetch article. Please retry" query={query} />;
	if (!data)
		return (
			<EmptyContainer
				message="The news does not exist"
				description="This resource has been moved or it does not exist."
			/>
		);

	const isADraft = data.status === NewsArticleStatus.DRAFT;
	const isPublished = data.status === NewsArticleStatus.PUBLISHED;
	function onStatusChange(status: NewsArticleStatus) {
		mutate({ newsArticleId: data?.id!, status });
	}
	return (
		<>
			<SidebarInset className="">
				<header className="sticky top-0 z-50 flex min-h-16 shrink-0 flex-wrap items-center justify-between gap-2 border-b bg-background px-2">
					<LoadingButton variant={"ghost"} loading={isPending} onClick={() => startTransition(() => {})}>
						<Link
							className="flex flex-row items-center gap-0.5"
							href={getNavigationLinkWithPathnameWithoutUpdate(LINK_NEWS)}
						>
							<MoveLeftIcon className="mr-2 inline" strokeWidth={2.9} /> <TypographyH4 title="All News" />
						</Link>
					</LoadingButton>
					{isAPublisher && (
						<ButtonGroup className="mx-auto w-full max-w-fit items-center">
							{mutationPending && <Spinner />}
							<Button
								variant={isADraft ? "default" : "destructive"}
								onClick={() => onStatusChange(isADraft ? NewsArticleStatus.PUBLISHED : NewsArticleStatus.DRAFT)}
							>
								{isADraft ? "Publish" : "Unpublish"} it
							</Button>
							<ButtonGroupSeparator />
							<Button
								disabled={data.status === NewsArticleStatus.PRIVATE}
								variant="default"
								onClick={() => onStatusChange(NewsArticleStatus.PRIVATE)}
							>
								Mark as Private
							</Button>
							<ButtonGroupSeparator />
							<Button
								disabled={data.status === NewsArticleStatus.ARCHIVED}
								variant={"default"}
								onClick={() => onStatusChange(NewsArticleStatus.ARCHIVED)}
							>
								Archive it
							</Button>
						</ButtonGroup>
					)}
					{!sidebar.open && (
						<Button variant="warning" size={"icon-lg"} onClick={() => sidebar.setOpen(!sidebar.open)}>
							<MenuIcon />
						</Button>
					)}
				</header>
				<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 p-4">
					<ArticleMainContent newsArticle={data} />
				</div>
				<Footer />
			</SidebarInset>
			<PageSidebar side="right" relatedArticles={relatedArticles} setOpen={sidebar.setOpen} sidebar={sidebar} />
		</>
	);
}
