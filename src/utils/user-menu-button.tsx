"use client";

import { useSession } from "@/app/session-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { Role } from "@/generated/prisma/enums";
import { authClient } from "@/lib/auth-client";
import { REDIRECT_TO_URL_SEARCH_PARAMS } from "@/lib/constants";
import { userRoles } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { LogOutIcon, LucideSettings2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { ThemeToggle } from "./theme-toggle";
import UserAvatar from "./user-avatar";
import UserLinkWithTooltip from "./user-link-with-tooltip";

interface UserMenuButtonProps {
	className?: string;
	isOnlyInfo?: boolean;
}

export default function UserMenuButton({ className, isOnlyInfo = false }: UserMenuButtonProps) {
	const { user } = useSession();
	const { role } = userRoles[(user?.role as Role) || Role.USER];
	const [isPending, startTransition] = useTransition();
	const currentPathname = usePathname();
	const searchParams = useSearchParams();
	const newParams = new URLSearchParams(searchParams.toString());
	newParams.set(REDIRECT_TO_URL_SEARCH_PARAMS, currentPathname);
	const loginUrl = `/sign-in` + "?" + newParams.toString();

	async function signOutButtonClicked() {
		const { error } = await authClient.signOut();
		if (error) toast.error("Sign out failed", { description: error.message });
	}

	return (
		<>
			{user ? (
				<DropdownMenu>
					<DropdownMenuTrigger className="hover:cursor-pointer">
						<UserAvatar image={user.image} className={cn("size-[2rem]", className)} size={100} />
					</DropdownMenuTrigger>

					<DropdownMenuContent className="mx-4 flex min-w-60 flex-col p-4">
						<DropdownMenuGroup className="flex flex-col items-center text-xs">
							<div>
								<UserAvatar image={user.image} className="size-[150px]" size={150} />
							</div>
							<DropdownMenuLabel>
								<UserLinkWithTooltip username={user.name!}>
									<span className="block text-center font-semibold tracking-tight">{user.name}</span>
								</UserLinkWithTooltip>
								<span className="block text-center text-sm text-muted-foreground">{user.email}</span>
							</DropdownMenuLabel>
							<div>
								<p className="text-center tracking-wide">Logged in as {role}</p>
							</div>
						</DropdownMenuGroup>

						{!isOnlyInfo && (
							<>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Link href="/user" className="flex cursor-pointer space-x-2">
										<LucideSettings2 className="" />
										<span>User profile</span>
									</Link>
								</DropdownMenuItem>
							</>
						)}

						<DropdownMenuSeparator />
						<div className="flex w-full items-center justify-center *:flex-1">
							<ThemeToggle variant={"ghost"} className="flex flex-row justify-start text-sm">
								Toggle theme
							</ThemeToggle>
						</div>
						<DropdownMenuSeparator />
						<Button variant={"ghost"} className="flex w-full justify-start ps-3" onClick={() => signOutButtonClicked()}>
							<LogOutIcon className="mr-2 text-inherit" />
							Sign out
						</Button>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<Link
					href={loginUrl}
					className={buttonVariants({ variant: "ghost" })}
					onClick={() => startTransition(() => {})}
				>
					{isPending && <Spinner />}Login now
				</Link>
			)}
		</>
	);
}
