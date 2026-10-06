"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteIggDeclarationMutation } from "./mutation";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { IggDeclaration } from "@/generated/prisma/client";

interface Props extends ButtonProps {
	iggDeclaration: IggDeclaration;
}

export default function ButtonDeleteIggDeclaration({ iggDeclaration, variant, ...props }: Props) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
	if (!isAuthorized) return null;
	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				variant={variant || "destructive"}
				title={`Delete ${iggDeclaration.name}`}
				{...props}
			/>
			<DeleteIggDeclarationDialog open={open} setOpen={setOpen} iggDeclaration={iggDeclaration} />
		</>
	);
}

interface DeleteIggDeclarationDialogProps {
	iggDeclaration: IggDeclaration;
	open: boolean;
	setOpen: (open: boolean) => void;
}
export function DeleteIggDeclarationDialog({ iggDeclaration, open, setOpen }: DeleteIggDeclarationDialogProps) {
	const { mutate, isPending } = useDeleteIggDeclarationMutation();
	function handleDelete() {
		mutate(iggDeclaration, { onSuccess: () => setOpen(false) });
	}
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-destructive">
						<AlertTriangleIcon
							className="mr-2 inline size-10 fill-destructive text-destructive-foreground"
							strokeWidth={0.8}
						/>
						<span className="uppercase">Delete {iggDeclaration.name} </span>
					</DialogTitle>
					<DialogDescription>Dangerous! Please note that this action is irreversible</DialogDescription>
				</DialogHeader>
				<p>
					This will delete <strong>{iggDeclaration.name}</strong> from the database. Continue with caution.
				</p>
				<DialogFooter>
					<Button variant={"outline"} onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<LoadingButton loading={isPending} variant={"destructive"} onClick={handleDelete}>
						Continue
					</LoadingButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
