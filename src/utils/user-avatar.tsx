import AvatarPlaceHolder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface UserAvatarProps {
	image: string | null | undefined;
	size?: number;
	className?: string;
}

export default function UserAvatar({ image, size, className }: UserAvatarProps) {
	return (
		<Image
			src={image || AvatarPlaceHolder}
			alt="User avatar"
			width={size ?? 48}
			height={size ?? 48}
			className={cn("aspect-square h-fit flex-none rounded-full bg-secondary object-cover", className)}
		/>
	);
}
