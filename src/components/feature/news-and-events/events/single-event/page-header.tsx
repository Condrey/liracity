import { TypographyH4 } from "@/components/page-utils";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import LoadingButton from "@/components/ui/loading-button";
import { useSidebar } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { EventStatus, Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { LINK_EVENTS } from "@/lib/constants";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { EventData } from "@/lib/types";
import { MenuIcon, MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { useUpdateEventStatusMutation } from "../form/mutation";

interface Props {
	event: EventData;
}

export default function PageHeader({ event }: Props) {
	const { user } = useSession();
	const [isPending, startTransition] = useTransition();
	const sidebar = useSidebar();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const { isPending: mutationPending, mutate } = useUpdateEventStatusMutation();

	const allEventsUrl = getNavigationLinkWithPathnameWithoutUpdate(LINK_EVENTS);
	const isAPublisher = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);

	const isADraft = event.status === EventStatus.DRAFT;
	const isPublished = event.status === EventStatus.PUBLISHED;

	function onStatusChange(status: EventStatus) {
		mutate({ eventId: event?.id!, status });
	}

	return (
		<>
			{/* button for navigating back to all events */}
			<LoadingButton variant={"ghost"} loading={isPending} onClick={() => startTransition(() => {})}>
				<Link className="flex flex-row items-center gap-0.5" href={allEventsUrl}>
					<MoveLeftIcon />
					<TypographyH4 title="All Events" />
				</Link>
			</LoadingButton>

			{/**
			 * Group of buttons for
			 * 1. Publishing,
			 * 2. Marking as Private,
			 * 3. and Cancelling Event
			 */}

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
						disabled={event.status === EventStatus.PRIVATE}
						variant="default"
						onClick={() => onStatusChange(EventStatus.PRIVATE)}
					>
						Mark as Private
					</Button>
					<ButtonGroupSeparator />
					<Button
						disabled={event.status === EventStatus.CANCELLED}
						variant={"destructive"}
						onClick={() => onStatusChange(EventStatus.CANCELLED)}
					>
						Cancel it
					</Button>
				</ButtonGroup>
			)}

			{/* Sidebar Toggler for opening and closing the sidebar showing related news events  */}
			{!sidebar.open && (
				<Button variant="warning" size={"icon-lg"} onClick={() => sidebar.setOpen(!sidebar.open)}>
					<MenuIcon />
				</Button>
			)}
		</>
	);
}
