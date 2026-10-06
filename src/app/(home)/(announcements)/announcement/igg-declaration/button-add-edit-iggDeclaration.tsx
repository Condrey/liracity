"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { IggDeclaration, Role } from "@/generated/prisma/client";
import FormAddEditIGGDeclaration from "./form-add-edit-igg-declaration";
import { useState } from "react";
import { useSession } from "@/lib/session-provider";
import { myPrivileges } from "@/lib/enums";
import EligibleLeaders from "./eligible-leaders";
import { InfoIcon } from "lucide-react";

interface Props extends ButtonProps {
	iggDeclarationToEdit?: IggDeclaration;
}
export function ButtonAddEditIGGDeclaration({ iggDeclarationToEdit, ...props }: Props) {
	const { user } = useSession();
	const [open, setOpen] = useState(false);
	// const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
	// if (!isAuthorized && !!iggDeclarationToEdit) return null;
	return (
		<>
			<Button
				title={iggDeclarationToEdit ? "Edit IGG Declaration" : "Add IGG Declaration"}
				{...props}
				onClick={() => setOpen(true)}
			/>
			<SheetAddEditIGGDeclaration open={open} setOpen={setOpen} iggDeclarationToEdit={iggDeclarationToEdit} />
		</>
	);
}

interface SheetAddEditIGGDeclarationProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	iggDeclarationToEdit?: IggDeclaration;
}
function SheetAddEditIGGDeclaration({ open, setOpen, iggDeclarationToEdit }: SheetAddEditIGGDeclarationProps) {
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent side="right" className="w-full sm:w-120">
				<SheetHeader>
					<SheetTitle>IGG Declaration registration</SheetTitle>
					<SheetDescription>This is for Leaders of Lira City Council only</SheetDescription>
				</SheetHeader>
				<div className="space-y-4 px-4">
					<EligibleLeaders variant={"link"}>
						<InfoIcon className="inline" /> Show Eligible Leaders
					</EligibleLeaders>
					<FormAddEditIGGDeclaration iggDeclarationToEdit={iggDeclarationToEdit} setOpen={setOpen} />
				</div>
			</SheetContent>
		</Sheet>
	);
}
