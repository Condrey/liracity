"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { DepartmentalSectionData } from "@/lib/types";
import { useState } from "react";
import FormAddEditDepartmentalSection from "./form-add-edit-departmental-section";

interface Props extends ButtonProps {
	departmentalSection?: DepartmentalSectionData;
}

export default function ButtonAddEditDepartmentalSection({ departmentalSection, ...props }: Props) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("SUPER_ADMIN");
	if (!isAuthorized) return null;
	return (
		<>
				<Button
					type="button"
					onClick={() => setOpen(true)}
					title={departmentalSection ? `Update departmental Section` : "Create a new departmental Section"}
					{...props}
				/>

			<FormAddEditDepartmentalSection open={open} setOpen={setOpen} departmentalSectionToEdit={departmentalSection} />
		</>
	);
}
