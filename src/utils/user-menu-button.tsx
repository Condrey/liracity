"use client";
import { logout } from "@/app/(auth)/(database)/logout/actions";
import { useSession } from "@/app/session-provider";
import { buttonVariants } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Role } from "@/generated/prisma";
import { userRoles } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { useQueryClient } from "@tanstack/react-query";
import { LogOutIcon, LucideSettings2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import UserAvatar from "./user-avatar";
import UserLinkWithTooltip from "./user-link-with-tooltip";

interface UserMenuButtonProps {
	className?: string;
	isOnlyInfo?: boolean;
}

export default function UserMenuButton({ className, isOnlyInfo = false }: UserMenuButtonProps) {
	const { user } = useSession();
	const queryClient = useQueryClient();

	const { role } = userRoles[user?.role || Role.USER];

	return (
		<>
			{user ? (
				<DropdownMenu>
					<DropdownMenuTrigger className="hover:cursor-pointer">
						<UserAvatar avatarUrl={user.avatarUrl} className={cn("size-[2rem]", className)} size={100} />
					</DropdownMenuTrigger>

					<DropdownMenuContent className="mx-4 flex min-w-60 flex-col p-4">
						<DropdownMenuGroup className="flex flex-col items-center  text-xs">
							<div>
								<UserAvatar avatarUrl={user.avatarUrl} className="size-[150px]" size={150} />
							</div>
							<DropdownMenuLabel>
								<UserLinkWithTooltip username={user.username!}>
									<span className="block text-center font-semibold tracking-tight">@{user.username}</span>
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
									<Link href="/user" className="flex cursor-pointer space-x-2 ">
										<LucideSettings2 className="" />
										<span>User profile</span>
									</Link>
								</DropdownMenuItem>
							</>
						)}

						<DropdownMenuSeparator />
						<div className="flex w-full *:flex-1 items-center justify-center">
							<ThemeToggle variant={"ghost"} className="flex text-sm flex-row justify-start">
								Toggle theme
							</ThemeToggle>
						</div>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							variant="destructive"
							className="cursor-pointer space-x-2 "
							onClick={() => {
								queryClient.clear();
								logout();
							}}
						>
							<LogOutIcon className="mr-2" />
							<span>Sign out</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<Link href={`/login`} className={buttonVariants({ variant: "ghost" })}>
					Login now
				</Link>
			)}
		</>
	);
}
