import { PageTitle, TypographyH2 } from "@/components/page-utils";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { Role } from "@/generated/prisma/enums";
import { eventStatuses, myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { EventData } from "@/lib/types";
import { getEventStatusAndPeriod } from "@/lib/utils";
import { formatDate, isAfter } from "date-fns";
import { Edit3Icon, MapPinIcon, Trash2Icon } from "lucide-react";
import ArticleImage from "../../article-image";
import ButtonAddEditEvent from "../button-add-edit-event";
import ButtonDeleteEvent from "../button-delete-event";
import ListOfRelatedEvents from "../list-of-related-events";
import DownloadItemContainer from "@/components/feature/downloads/download-item-container";

interface EventContentProps {
	event: EventData;
	relatedEvents: EventData[];
}

export default function EventContent({ event, relatedEvents }: EventContentProps) {
	const { description, coverImage, summary, media } = event;

	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.HOS);

	return (
		<article className="space-y-12">
			{/* Title for the event and drop down menu for actions  */}
			<TitleSection event={event} isAuthorized={isAuthorized} />
			{/* Body section for the event with description, media and summary */}
			<section>
				{/* Displaying the cover image for the event if it exists */}
				{coverImage && (
					<ArticleImage mediaIdentifier={coverImage?.url} width={1920} height={1080} alt="event cover image" />
				)}
			</section>

			{/* Displaying the content  body  */}
			<TipTapViewer content={description} className="" />

			{/* Other media section  */}
			<OtherMediaSection media={media} />

			{/* Summary of the event  */}
			{!!summary && (
				<section>
					<TypographyH2 title={`SUMMARY`} className="uppercase" />
					<TipTapViewer content={summary} />
				</section>
			)}

			{/* List of related events  */}
			<div className="space-y-4">
				<TypographyH2 title="Related Events" className="uppercase" />
				<ListOfRelatedEvents relatedEvents={relatedEvents} className="grid gap-2 sm:grid-cols-2 md:grid-cols-3" />
			</div>
		</article>
	);
}

function TitleSection({ isAuthorized, event }: { isAuthorized: boolean; event: EventData }) {
	const { title, status, location, createdAt, updatedAt, endDate, startDate } = event;

	const { eventStatus, variant } = eventStatuses[status];

	const now = new Date();
	const isPastEvent = !endDate ? isAfter(now, startDate) : isAfter(now, endDate);

	const { period, status: eventTag } = getEventStatusAndPeriod({ startDate, endDate });

	return (
		<header>
			<PageTitle heading={title} className="flex-wrap md:text-2xl">
				<ButtonAddEditEvent size={"icon-sm"} variant={"ghost"} event={event} className="w-full flex-none justify-start">
					<Edit3Icon />
				</ButtonAddEditEvent>

				<ButtonDeleteEvent event={event} size={"icon-sm"} variant={"ghost"} className="w-full flex-none justify-start">
					<Trash2Icon />
				</ButtonDeleteEvent>
			</PageTitle>

			<div className="mb-2 flex flex-wrap items-center gap-2">
				<Badge variant={variant}>{eventStatus}</Badge>
				<Badge variant={isPastEvent ? "destructive" : "success"}>{eventTag}</Badge>

				<div className="flex flex-wrap">
					{location && (
						<address>
							<MapPinIcon className="mr-0.5 inline-flex fill-muted-foreground text-muted" />
							{location},
						</address>
					)}
					<time className="inline w-fit font-semibold md:font-normal">
						<span>{period}</span>&nbsp;
						{/* <span className="text-muted-foreground">{updatedAt > createdAt && `(updated)`}</span> */}
					</time>
				</div>
			</div>

			<hr />
			<time className="text-sm leading-tight text-muted-foreground">
				Period: {formatDate(startDate, "PPPPp")}
				{endDate && <> upto {formatDate(endDate, "PPPPp")}</>}
			</time>
		</header>
	);
}

function OtherMediaSection({ media }: { media: EventData["media"] }) {
	return (
		<>
			{!!media && !!media.length && (
				<section className="space-y-2">
					<TypographyH2 title="Other media from the event" className="uppercase" />
					<div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
						{media.map((attachment) => {
							if (attachment.type === "IMAGE") {
								return (
									<ArticleImage
										key={attachment.id}
										mediaIdentifier={attachment.url}
										alt="other graphic"
										height={1080}
										width={1920}
										className="aspect-video"
									/>
								);
							} else {
								return (
									<DownloadItemContainer key={attachment.id} attachment={{ ...attachment, _count: { events: 0 } }} />
								);
							}
						})}
					</div>
				</section>
			)}
		</>
	);
}
