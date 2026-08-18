"use client";

import { useSession } from "@/app/session-provider";
import ArticleImage from "@/components/news-and-events/article-image";
import { getEventBySlug } from "@/components/news-and-events/events/action";
import ButtonAddEditEvent from "@/components/news-and-events/events/button-add-edit-event";
import ButtonDeleteEvent from "@/components/news-and-events/events/button-delete-event";
import { useUpdateEventStatusMutation } from "@/components/news-and-events/events/form/mutation";
import { PageTitle, TypographyH2, TypographyH4 } from "@/components/page-utils";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import LoadingButton from "@/components/ui/loading-button";
import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import Footer from "@/components/user/footer";
import { EventStatus, Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { eventStatuses, myPrivileges } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { getEventStatusAndPeriod } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { formatDate, isAfter } from "date-fns";
import { Edit3Icon, MapPin, MenuIcon, MoreVerticalIcon, MoveLeftIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTransition } from "react";
import { PageSidebar } from "./page-sidebar";

interface EventClientProps {
	initialData: EventData;
	relatedEvents: EventData[];
	slug: string;
}

export function EventClient({ initialData, slug, relatedEvents }: EventClientProps) {
	const { user } = useSession();
	const isAPublisher = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);
	const [isPending, startTransition] = useTransition();
	const sidebar = useSidebar();

	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const query = useQuery({
		queryKey: ["event", "slug", slug],
		queryFn: async () => getEventBySlug(slug),
		initialData
	});
	const { data, status } = query;
	if (status === "error") return <ErrorContainer errorMessage="Failed to fetch event. Please retry" query={query} />;
	if (!data) return notFound();
	const isADraft = data.status === EventStatus.DRAFT;
	const isPublished = data.status === EventStatus.PUBLISHED;

	const { isPending: mutationPending, mutate } = useUpdateEventStatusMutation();

	function onStatusChange(status: EventStatus) {
		mutate({ eventId: data?.id!, status });
	}
	return (
		<div className="h-[calc(100vh-var(--header-height))] overflow-y-auto">
			<SidebarProvider>
				<SidebarInset className="">
					<header className="sticky top-0 z-50 flex min-h-16 shrink-0 flex-wrap items-center justify-between gap-2 border-b bg-background px-2">
						<LoadingButton variant={"ghost"} loading={isPending} onClick={() => startTransition(() => {})}>
							<Link
								className="flex flex-row items-center gap-0.5"
								href={getNavigationLinkWithPathnameWithoutUpdate("/media/news-events")}
							>
								<MoveLeftIcon />
								<TypographyH4 title="News & Events" />
							</Link>
						</LoadingButton>
						{isAPublisher && (
							<ButtonGroup className="mx-auto w-full max-w-fit items-center">
								{mutationPending && <Spinner />}
								<Button
									variant={isADraft ? "default" : "destructive"}
									onClick={() => onStatusChange(isADraft ? EventStatus.PUBLISHED : EventStatus.DRAFT)}
								>
									{isADraft ? "Publish it" : "Unpublish it"} it
								</Button>
								<ButtonGroupSeparator />
								<Button
									disabled={data.status === EventStatus.PRIVATE}
									variant="default"
									onClick={() => onStatusChange(EventStatus.PRIVATE)}
								>
									Mark as Private
								</Button>
								<ButtonGroupSeparator />
								<Button
									disabled={data.status === EventStatus.CANCELLED}
									variant={"destructive"}
									onClick={() => onStatusChange(EventStatus.CANCELLED)}
								>
									Cancel it
								</Button>
							</ButtonGroup>
						)}
						{!sidebar.open && (
							<Button variant="warning" size={"icon-lg"} onClick={() => sidebar.setOpen(!sidebar.open)}>
								<MenuIcon />
							</Button>
						)}{" "}
					</header>
					<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 p-4">
						<EventContent event={data} />
					</div>
					<Footer />
				</SidebarInset>
				<PageSidebar side="right" relatedEvents={relatedEvents} setOpen={sidebar.setOpen} sidebar={sidebar} />
			</SidebarProvider>
		</div>
	);
}
interface EventContentProps {
	event: EventData;
}
function EventContent({ event }: EventContentProps) {
	const {
		title,
		status,
		location,
		author,
		description,
		coverImage,
		createdAt,
		updatedAt,
		summary,
		media,
		endDate,
		startDate
	} = event;
	const { icon, eventStatus, variant } = eventStatuses[status];
	const StatusIcon = icon;
	const now = new Date();
	const isPastEvent = !endDate ? isAfter(now, startDate) : isAfter(now, endDate);
	const { period, status: eventTag } = getEventStatusAndPeriod({ startDate, endDate });
	return (
		<article className="space-y-12">
			<header>
				<PageTitle heading={title} className="flex-wrap">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button size={"icon-lg"} variant={"secondary"} className="rounded-full">
								<MoreVerticalIcon />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuGroup className="space-y-1">
								<DropdownMenuLabel>Action</DropdownMenuLabel>
								<ButtonAddEditEvent
									size={"sm"}
									variant={"ghost"}
									event={event}
									className="w-full flex-none justify-start"
								>
									<Edit3Icon /> Edit event
								</ButtonAddEditEvent>
								<ButtonDeleteEvent
									event={event}
									size={"sm"}
									variant={"ghost"}
									className="w-full flex-none justify-start"
								>
									<Trash2Icon /> Delete event
								</ButtonDeleteEvent>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</PageTitle>
				<div className="mb-2 flex flex-wrap items-center gap-2">
					<Badge variant={variant}>
						{/* <StatusIcon className="mr-1" /> */}
						{eventStatus}
					</Badge>
					<Badge variant={isPastEvent ? "destructive" : "success"}>{eventTag}</Badge>
					<div className="flex flex-wrap">
						{location && (
							<address>
								<MapPin className="mr-0.5 inline-flex fill-muted-foreground text-muted" />
								{location},
							</address>
						)}
						<time className="inline w-fit font-semibold md:font-normal">
							<span>{period}</span>&nbsp;
							<span className="text-muted-foreground">{updatedAt > createdAt && `(updated)`}</span>
						</time>
					</div>
				</div>
				<hr />
				<time className="text-sm leading-tight text-muted-foreground">
					Period: {formatDate(startDate, "PPPPp")}
					{endDate && <> upto {formatDate(endDate, "PPPPp")}</>}
				</time>
			</header>
			<section>
				{coverImage && (
					<ArticleImage mediaIdentifier={coverImage?.url} width={1920} height={1080} alt="event cover image" />
				)}
			</section>
			<TipTapViewer content={description} className="" />

			{!!media && !!media.length && (
				<section className="space-y-2">
					<TypographyH2 title="Other media from the event" className="uppercase" />
					<div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
						{media.map((medium) => {
							if (medium.type === "IMAGE")
								return (
									<ArticleImage
										key={medium.id}
										mediaIdentifier={medium.url}
										alt="other graphic"
										height={1080}
										width={1920}
										className="aspect-video"
									/>
								);
						})}
					</div>
				</section>
			)}
			{!!summary && (
				<section>
					<TypographyH2 title={`SUMMARY`} className="uppercase" />
					<TipTapViewer content={summary} />
				</section>
			)}
		</article>
	);
}
