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
import LoadingButton from "@/components/ui/loading-button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { EventStatus, Role } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { eventStatuses, myPrivileges } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { formatDateToLocal } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import { ArrowLeftIcon, Edit3Icon, MapPin, MoveLeftIcon, Trash2Icon } from "lucide-react";
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
	const isAPublisher = !!user && myPrivileges[user.role].includes(Role.MODERATOR);
	const [isPending, startTransition] = useTransition();

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
		<SidebarProvider>
			<SidebarInset className="">
				<header className="flex flex-wrap min-h-16 shrink-0 items-center gap-2 border-b px-2">
					<LoadingButton variant={"ghost"}  loading={isPending} onClick={() => startTransition(() => {})}>
						<Link className="flex items-center gap-0.5 flex-row"  href={getNavigationLinkWithPathnameWithoutUpdate("/media/news-events")}>
							<MoveLeftIcon />
												<TypographyH4 title="News & Events" />

						</Link>
					</LoadingButton>
					{isAPublisher && (
						<ButtonGroup className="max-w-fit mx-auto items-center w-full">
							{mutationPending && <Spinner />}
							<Button
								variant={isADraft ? "default" : "destructive"}
								onClick={() => onStatusChange(isADraft ? EventStatus.PUBLISHED : EventStatus.DRAFT)}
							>
								{isADraft ? "Publish" : "Unpublish"} it
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
					<SidebarTrigger className="-mr-1 ml-auto rotate-180" />
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 max-w-4xl w-full mx-auto">
					<EventContent event={data} />
				</div>
			</SidebarInset>
			<PageSidebar side="right" relatedEvents={relatedEvents} />
		</SidebarProvider>
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
	const isPassedEvent = new Date() > startDate;

	return (
		<article className="space-y-12">
			<header>
				<PageTitle heading={title} className="flex-wrap">
					<ButtonAddEditEvent size={"icon"} event={event}  className="flex-none ">
						<Edit3Icon />
					</ButtonAddEditEvent>
					<ButtonDeleteEvent event={event} size={"icon"} variant={"destructive"} className="flex-none ">
						<Trash2Icon />
					</ButtonDeleteEvent>
				</PageTitle>
				<div className="flex gap-2 flex-wrap items-center mb-2">
					<Badge variant={variant}>
						{/* <StatusIcon className="mr-1" /> */}
						{eventStatus}
					</Badge>
					<div className="flex flex-wrap">
						{location && (
							<address>
								<MapPin className="fill-muted-foreground inline-flex text-muted mr-0.5" />
								{location},
							</address>
						)}
						<time className="inline w-fit font-semibold md:font-normal"> <span>
							{isPassedEvent
								? `happened ${formatDateToLocal(endDate ?? startDate)}`
								: `starts ${formatDateToLocal(startDate)}`}
						</span>
						{updatedAt > createdAt && `(updated)`}</time>
					</div>
				</div>
				<hr />
				<time className="text-sm leading-tight text-muted-foreground">
					{formatDate(startDate, "PPPPp")}
					{endDate && <> upto {formatDate(endDate, "PPPPp")}</>}
				</time>
			</header>
			<section>
				{coverImage && (
					<ArticleImage mediaIdentifier={coverImage?.url} height={1920} width={1080} alt="event cover image" />
				)}
			</section>
			<section>
				<TipTapViewer content={description} className="text-justify hyphens-auto leading-tight md:leading-relaxed md:text-xl" />
			</section>

			{!!media && !!media.length && (
				<section className="space-y-2">
					<TypographyH2 title="Other media from the event" className="uppercase" />
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
					<TypographyH2 title={`🧠 Event description Too Long; Didn't Read:`} className="uppercase " />
					<TipTapViewer content={summary} className="text-justify hyphens-auto leading-tight md:leading-relaxed md:text-xl" />
				</section>
			)}
		</article>
	);
}
