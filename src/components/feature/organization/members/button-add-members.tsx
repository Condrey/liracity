"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useState } from "react";
import FormAddMembers from "./form-add-members";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";

interface Props extends ButtonProps {
	organizationId: string;
}

export default function ButtonAddMembers({ organizationId, ...props }: Props) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOD");
	if (!isAuthorized) return null;

	return (
		<>
			<Button type="button" title={"Add member"} onClick={() => setOpen(true)} {...props} />
			<FormAddMembers organizationId={organizationId} open={open} setOpen={setOpen} />
		</>
	);
}
