"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { OrganizationData } from "@/lib/types";
import { useState } from "react";
import FormAddEditOrganization from "./form-add-edit-organization";

interface ButtonAddEditOrganizationProps extends ButtonProps {
	organization?: OrganizationData;
}
export default function ButtonAddEditOrganization({ organization, ...props }: ButtonAddEditOrganizationProps) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("SUPER_ADMIN");
	if (!isAuthorized) return null;
	return (
		<>
			<Button
				type="button"
				onClick={() => setOpen(true)}
				title={organization ? `Update ${organization.name} department's value` : "Create a new department"}
				{...props}
			/>

			<FormAddEditOrganization open={open} setOpen={setOpen} organizationToEdit={organization} />
		</>
	);
}
