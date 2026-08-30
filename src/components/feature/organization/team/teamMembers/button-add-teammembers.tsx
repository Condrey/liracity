"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useState } from "react";
import FormAddTeamMembers from "./form-add-teammembers";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";

interface Props extends ButtonProps {
	organizationId: string;
	teamId: string;
	organizationName: string;
	teamName: string;
}

export default function ButtonAddTeamMembers({ organizationId, teamId, teamName, organizationName, ...props }: Props) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
	if (!isAuthorized) return null;

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
