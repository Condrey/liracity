"use client";

import { useSession } from "@/app/session-provider";
import { Button, ButtonProps } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDeleteEventMutation } from "./form/mutation";

interface ButtonDeleteEventProps extends ButtonProps {
	event: EventData;
}

export default function ButtonDeleteEvent({ event, variant, ...props }: ButtonDeleteEventProps) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const canDelete = !!user && myPrivileges[user.role!].includes("MODERATOR");

	return (
		<>
			{canDelete && (
				<Button onClick={() => setOpen(true)} variant={variant || "destructive"} title="Delete this event" {...props} />
			)}
			<DeleteEventDialog open={open} setOpen={setOpen} event={event} />
		</>
	);
}

interface DeleteEventDialogProps {
	event: EventData;
	open: boolean;
	setOpen: (open: boolean) => void;
}
export function DeleteEventDialog({ event, open, setOpen }: DeleteEventDialogProps) {
	const { mutate, isPending } = useDeleteEventMutation();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const router = useRouter();
	function handleDelete() {
		mutate(event.id, {
			onSuccess: () => setOpen(false),
			onSettled: () => {
				const url = getNavigationLinkWithPathnameWithoutUpdate("/media/news-events");
				router.push(url);
			}
		});
	}
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-destructive ">
						<AlertTriangleIcon
							className="inline mr-2 size-10 fill-destructive text-destructive-foreground  "
							strokeWidth={0.8}
						/>
						<span className="uppercase line-clamp-1 text-ellipsis">Delete {event.title} event</span>
					</DialogTitle>
					<DialogDescription>Dangerous! Please note that this action is irreversible</DialogDescription>
				</DialogHeader>
				<p>
					This will delete{" "}
					<strong>{event.title.length > 30 ? `${event.title.substring(0, 30)}...` : event.title}</strong> event and all
					its information from the database. Continue with caution.
				</p>
				<DialogFooter>
					<Button variant={"outline"} onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<LoadingButton loading={isPending} variant={"destructive"} onClick={handleDelete}>
						Continue
					</LoadingButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
