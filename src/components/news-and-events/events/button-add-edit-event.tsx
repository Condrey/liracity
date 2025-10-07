"use client";

import { useSession } from "@/app/session-provider";
import { Button, ButtonProps } from "@/components/ui/button";
import { myPrivileges } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { useState } from "react";
import SheetAddEditEvent from "./form/sheet-add-edit-event";

interface ButtonAddEditEventProps extends ButtonProps {
	event?: EventData;
}

export default function ButtonAddEditEvent({ event, ...props }: ButtonAddEditEventProps) {
	const [open, setOpen] = useState(false);
	const altId = Date.now().toString();
	const { user } = useSession();
	const userId = user?.id;
	const canUpsert = !!user && myPrivileges[user.role!].includes("MODERATOR");

	return (
		<>
			{!!canUpsert && (
				<Button title={event ? "Edit the event" : "Update event"} onClick={() => setOpen(true)} {...props} />
			)}
			<SheetAddEditEvent open={open} setOpen={setOpen} event={event} userId={userId} altId={altId} />
		</>
	);
}
