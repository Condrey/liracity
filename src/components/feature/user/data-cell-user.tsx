import UserAvatar from "@/components/ui/user-avatar";
import { UserDataSelect } from "@/lib/types";
import { VerifiedIcon } from "lucide-react";

interface Props {
	user: UserDataSelect;
}

export default function DataCellUser({ user }: Props) {
	const { name, email, image, telephone, emailVerified } = user;
	return (
		<div className="flex gap-2">
			<UserAvatar image={image} />
			<div className="">
				<div>
					{name}
					{emailVerified && <VerifiedIcon className="ml-1.5 inline size-4 fill-green-500 text-green-950" />}
				</div>
				<div className="text-xs text-muted-foreground">{telephone || email}</div>
			</div>
		</div>
	);
}
