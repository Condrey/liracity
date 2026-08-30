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
import { TeamData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteTeamMutation } from "./mutation";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";

interface Props extends ButtonProps {
	team: TeamData;
}

export default function ButtonDeleteTeam({ team, variant, ...props }: Props) {
	const [open, setOpen] = useState(false);
const { user } = useSession();
	const isAuthorized = myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");
	if (!isAuthorized) return null;
	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				variant={variant || "destructive"}
				title={`Delete ${team.name}`}
				{...props}
			/>
			<DeleteDepartmentalSectorDialog open={open} setOpen={setOpen} team={team} />
		</>
	);
}

interface DeleteDepartmentalSectorDialogProps {
	team: TeamData;
	open: boolean;
	setOpen: (open: boolean) => void;
}
export function DeleteDepartmentalSectorDialog({ team, open, setOpen }: DeleteDepartmentalSectorDialogProps) {
	const { mutate, isPending } = useDeleteTeamMutation();
	function handleDelete() {
		mutate(team, { onSuccess: () => setOpen(false) });
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
						<span className="uppercase">Delete {team.name} section</span>
					</DialogTitle>
					<DialogDescription>Dangerous! Please note that this action is irreversible</DialogDescription>
				</DialogHeader>
				<p>
					This will delete <strong>{team.name}</strong> section from the <strong>{team.organization?.name}</strong>{" "}
					department and all its <strong>officers</strong> from the database. Continue with caution.
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
