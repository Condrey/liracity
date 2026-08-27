import { Role } from "@/generated/prisma/enums";
import { userRoles } from "@/lib/enums";

interface Props {
	organization: string;
	team?: string;
	userRole: Role;
}

export default function DataCellOrganization({ organization, team, userRole }: Props) {
	const { role } = userRoles[userRole];
	return (
		<div>
			<div>{role}</div>
			<div className="font-bold">{`${organization} department`}</div>
		</div>
	);
}
