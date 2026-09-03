"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { PositionData } from "@/lib/types";
import { useState } from "react";
import FormAddEditPosition from "./form-add-edit-position";

interface Props extends ButtonProps {
	position?: PositionData;
}

export default function ButtonAddEditPosition({ position, ...props }: Props) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("SUPER_ADMIN");
	if (!isAuthorized) return null;
	return (
		<>
				<Button
					type="button"
					onClick={() => setOpen(true)}
					title={position ? `Update position` : "Create a new position"}
					{...props}
				/>

			<FormAddEditPosition open={open} setOpen={setOpen} positionToEdit={position} />
		</>
	);
}
