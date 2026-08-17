"use client";

import { useSession } from "@/app/session-provider";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import { EmployeeData } from "@/lib/types";
import { useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import FormAddEditEmployee from "./form-add-edit-employee";

interface ButtonAddEditEmployeeProps extends ButtonProps {
	departmentalSectorId: string;
	employee?: EmployeeData;
}

export default function ButtonAddEditEmployee({
	employee,
	departmentalSectorId,
	...props
}: ButtonAddEditEmployeeProps) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);
	if (!isAuthorized) return null;
	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				title={employee ? `Update ${employee.user.name!.split(" ").pop()}'s information` : "Create new staff"}
				{...props}
			/>
			<FormAddEditEmployee
				open={open}
				setOpen={setOpen}
				employee={employee}
				departmentalSectorId={departmentalSectorId}
			/>
		</>
	);
}
