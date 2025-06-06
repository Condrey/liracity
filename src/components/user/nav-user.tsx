"use client";

import { ChevronsUpDown, LogOut, SunIcon } from "lucide-react";

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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import UserAvatar from "@/components/ui/user-avatar";
import { useTheme } from "next-themes";
import { useSession } from "@/app/session-provider";
import { toast } from "sonner";
import LogoutButton from "@/app/(auth)/(database)/logout/logout-button";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";


export function NavUser() {
  const { isMobile } = useSidebar();
  const { setTheme } = useTheme();

  const { user } = useSession();

 

  return (
    <SidebarMenu>
     <SidebarMenuItem>
        {!user?  <Link href={`/login`} className={buttonVariants({variant:'ghost',className:"w-full"})}>
        Login now
      </Link> :
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <UserAvatar avatarUrl={user.avatarUrl} />

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
                <UserAvatar avatarUrl={user.avatarUrl} />

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
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            {/* logging out  */}
            
            <DropdownMenuItem asChild>
                <LogoutButton>
 <LogOut />
              Log out
                </LogoutButton>
             
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
