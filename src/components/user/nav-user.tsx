"use client";

import { ChevronsUpDown, LogOutIcon, SunIcon } from "lucide-react";

import { useSession } from "@/app/session-provider";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import UserAvatar from "@/components/ui/user-avatar";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { toast } from "sonner";
import { Button, buttonVariants } from "../ui/button";

export function NavUser() {
	const { isMobile } = useSidebar();
	const { setTheme } = useTheme();

	const { user } = useSession();

	async function logoutButtonClicked() {
		const { error } = await authClient.signOut();
		if (error) toast.error("Failed to sign out", { description: error.message });
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				{!user ? (
					<Link
						href={`/sign-in`}
						className={buttonVariants({
							variant: "ghost",
							className: "w-full"
						})}
					>
						Login now
					</Link>
				) : (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<UserAvatar avatarUrl={user.image} />

								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
								<ChevronsUpDown className="ml-auto size-4" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
							side={isMobile ? "bottom" : "right"}
							align="end"
							sideOffset={4}
						>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<UserAvatar avatarUrl={user.image} />

									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">{user.name}</span>
										<span className="truncate text-xs">{user.email}</span>
									</div>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />

							{/* <DropdownMenuGroup>             
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup> */}

							{/* <DropdownMenuSeparator /> */}

							{/* Mode toggle  */}

							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<SunIcon className="mr-2 size-4" />
									<span>Toggle theme</span>
								</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
										<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
										<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							{/* logging out  */}

							<DropdownMenuItem asChild>
								<Button onClick={() => logoutButtonClicked()}>
									<LogOutIcon />
									Log out
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
