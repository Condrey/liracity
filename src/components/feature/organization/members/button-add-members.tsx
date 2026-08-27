"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useState } from "react";
import FormAddMembers from "./form-add-members";

interface Props extends ButtonProps {
	organizationId: string;
}

export default function ButtonAddMembers({ organizationId, ...props }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button type="button" title={"Add member"} onClick={() => setOpen(true)} {...props} />
			<FormAddMembers organizationId={organizationId} open={open} setOpen={setOpen} />
		</>
	);
}
