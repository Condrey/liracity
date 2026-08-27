"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useState } from "react";
import FormAddTeamMembers from "./form-add-teammembers";

interface Props extends ButtonProps {
	organizationId: string;
	teamId: string;
	organizationName: string;
	teamName: string;
}

export default function ButtonAddTeamMembers({ organizationId, teamId, teamName, organizationName, ...props }: Props) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button type="button" title={"Add member"} onClick={() => setOpen(true)} {...props} />
			<FormAddTeamMembers
				organizationId={organizationId}
				teamId={teamId}
				teamName={teamName}
				organizationName={organizationName}
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
}
