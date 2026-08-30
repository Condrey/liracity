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
		<div className="max-w-2xs">
			<p className="line-clamp-1 inline text-ellipsis *:inline *:break-words *:break-all">
				<span>{role}</span> {team && <span className="font-bold text-warning">{`• ${team} section`}</span>}
			</p>
			<div className="line-clamp-1 font-bold break-words text-ellipsis">{`${organization} department`}</div>
		</div>
	);
}
