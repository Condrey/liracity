import { buttonVariants } from "@/components/ui/button";
import UserAvatar from "@/components/ui/user-avatar";
import { ChartUser } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MailIcon, PhoneCallIcon, VerifiedIcon } from "lucide-react";
import Link from "next/link";

interface ChartUserContainerProps {
	user?: ChartUser;
	department: React.ReactNode;
}

export default function ChartUserContainer({ user, department }: ChartUserContainerProps) {
	return (
		<div className="mx-auto w-full max-w-40 rounded-md border bg-card text-sm sm:text-sm md:max-w-[15rem] lg:max-w-xs">
			<div
				className={cn(
					"min-w-40 px-3 py-4 text-center break-all uppercase",
					user?.hierarchy! >= 1 ? "bg-warning/50" : user?.hierarchy! >= 3 ? "bg-success/50" : "bg-primary/50",
					"dark:bg-card",
					user && "dark:border-b"
				)}
			>
				{department}
			</div>
			{!!user && (
				<>
					<div className="hidden flex-col flex-wrap items-center justify-start gap-3 p-3 md:flex md:flex-row">
						<UserAvatar avatarUrl={user.avatarUrl} size={75} className="mx-auto w-full max-w-fit" />
						<div className="mx-auto flex w-full max-w-fit flex-col justify-start uppercase">
							<strong className="md:tex-2xl line-clamp-2 flex items-center text-xl font-bold tracking-tighter text-ellipsis">
								{!!user.title && <span className="text-muted-foreground:">{user.title}</span>} {user.name}{" "}
								{user.isVerified && <VerifiedIcon className="inline size-4 fill-success text-success-foreground" />}
							</strong>
							<span className="text-sm text-muted-foreground">
								{user.resumedOffice} - {user.endedOffice ?? "Now"}
							</span>
							<span className="text-sm">{user.position}</span>
						</div>
					</div>
					<div className="hidden justify-evenly gap-3 p-2 md:flex dark:border-t">
						<Link href={`tel:${user.telephone}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
							<PhoneCallIcon className="size-4 fill-success text-success dark:text-background" /> Call
						</Link>
						<Link href={`mailto:${user.email}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
							<MailIcon className="size-4 fill-primary text-primary-foreground dark:text-background" /> Email
						</Link>
					</div>
				</>
			)}
		</div>
	);
}
