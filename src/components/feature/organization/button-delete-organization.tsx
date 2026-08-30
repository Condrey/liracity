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
import { OrganizationData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteOrganizationMutation } from "./mutation";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";

interface ButtonDeleteOrganizationProps extends ButtonProps {
	organization: OrganizationData;
}

export default function ButtonDeleteOrganization({ organization, variant, ...props }: ButtonDeleteOrganizationProps) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("SUPER_ADMIN");
	if (!isAuthorized) return null;

	return (
		<>
			<Button onClick={() => setOpen(true)} variant={variant || "destructive"} {...props} />
			<DeleteOrganizationDialog open={open} setOpen={setOpen} organization={organization} />
		</>
	);
}

interface DeleteOrganizationDialogProps {
	organization: OrganizationData;
	open: boolean;
	setOpen: (open: boolean) => void;
}
export function DeleteOrganizationDialog({ organization, open, setOpen }: DeleteOrganizationDialogProps) {
	const { mutate, isPending } = useDeleteOrganizationMutation();
	function handleDelete() {
		mutate(organization, { onSuccess: () => setOpen(false) });
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
						<span className="shimmer uppercase">Delete {organization.name} department</span>
					</DialogTitle>
					<DialogDescription className="shimmer">
						Dangerous! Please note that this action is irreversible
					</DialogDescription>
				</DialogHeader>
				<p>
					This will delete <strong>{organization.name}</strong> department and all its{" "}
					<strong>sections and staffs</strong> from the database. Continue with caution.
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
