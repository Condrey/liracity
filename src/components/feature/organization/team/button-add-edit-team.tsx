"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { TeamData } from "@/lib/types";
import { useState } from "react";
import FormAddEditDepartmentalSector from "./form-add-edit-team";

interface Props extends ButtonProps {
	team?: TeamData;
	organizationId: string;
	children: React.ReactNode;
}

export default function ButtonAddEditTeam({ team, organizationId, variant, ...props }: Props) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
		const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
		if (!isAuthorized) return null;
		
	return (
		<>
				<Button
					title={team ? `Update ${team.name}'s content` : "Create a new departmental sector"}
					variant={variant ?? "ghost"}
					onClick={() => setOpen(true)}
					{...props}
				/>
			<FormAddEditDepartmentalSector open={open} setOpen={setOpen} organizationId={organizationId} teamToEdit={team} />
		</>
	);
}
