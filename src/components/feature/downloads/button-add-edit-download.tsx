"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { MediaData } from "@/lib/types";
import { useState } from "react";
import FormAddEditDownload from "./form-add-edit-download";

interface Props extends ButtonProps {
	download?: MediaData;
}

export default function ButtonAddEditDownload({ download, ...props }: Props) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
	if (!isAuthorized) return null;
	return (
		<>
			<Button
				type="button"
				onClick={() => setOpen(true)}
				title={download ? `Update Download` : "Create a new Download"}
				{...props}
			/>

			<FormAddEditDownload open={open} setOpen={setOpen} downloadToEdit={download} />
		</>
	);
}
