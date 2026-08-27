"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { OrganizationData } from "@/lib/types";
import { useState } from "react";
import FormAddEditOrganization from "./form-add-edit-organization";

interface ButtonAddEditOrganizationProps extends ButtonProps {
	organization?: OrganizationData;
}
export default function ButtonAddEditOrganization({ organization, ...props }: ButtonAddEditOrganizationProps) {
	const [open, setOpen] = useState(false);
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
