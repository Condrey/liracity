"use client";

import { Button } from "@/components/ui/button";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { EditIcon, EyeOffIcon } from "lucide-react";
import { toast } from "sonner";
import ButtonUpdateMemberRole from "../organization/members/role/button-update-member-role";

interface Props {
	role?: string;
	id: string;
	organizationSlug?: string;
	organizationId: string;
	userName: string | null;
}

export default function DataCellAdministrativeRole({ id, organizationSlug, organizationId, role, userName }: Props) {
	const { user } = useSession();
	const canSee = myPrivileges[(user?.role as Role) || Role.USER].includes(Role.HOS);

	return (
		<>
			{!role ? (
				<em>Not Applicable</em>
			) : (
				<>
					{!canSee ? (
						<Button
							type="button"
							variant={"ghost"}
							onClick={() =>
								toast.info("Not Authorized", {
									description: `You do not have enough privileges to view administrative role for ${userName}`
								})
							}
						>
							******** <EyeOffIcon />
						</Button>
					) : (
						<ButtonUpdateMemberRole
							organizationSlug={organizationSlug!}
							memberId={id}
							organizationId={organizationId}
							variant={"ghost"}
							className="group/role flex items-center gap-1"
						>
							<div className="underline decoration-dotted underline-offset-2">{role}</div>
							<div className="group-hover/role:text-green-500">
								<EditIcon className="inline size-4" /> <span className="hidden group-hover/role:inline">Edit</span>
							</div>
						</ButtonUpdateMemberRole>
					)}
				</>
			)}
		</>
	);
}
