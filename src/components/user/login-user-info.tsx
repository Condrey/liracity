// 'use client'

import LogoutButton from "@/app/(auth)/(database)/logout/logout-button";
import { validateRequest } from "@/auth";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import UserAvatar from "../ui/user-avatar";

export default async function LoginUserInfo() {
  const { user } = await validateRequest();
  if (!user)
    return (
      <Link href={`/login`} className={buttonVariants({variant:'ghost'})}>
        Login now
      </Link>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserAvatar
          avatarUrl={user.avatarUrl}
          size={35}
          className="hover:cursor-pointer flex-0 max-h-7 md:max-h-none "
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[15rem] bg-card shadow-md border">
        <DropdownMenuGroup>
          <div className="flex justify-center w-full">
            <UserAvatar avatarUrl={user.avatarUrl} size={85} className="flex-0" />
          </div>
          <DropdownMenuLabel className="text-center">
            <div>
              <div className="text-muted-foreground text-xs font-normal">
                {user.email}
              </div>
              <div>{user.name}</div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <p className="text-center">Logged in as {user.role}</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <div>
            <LogoutButton>
              <LogOutIcon />
              <span>Logout</span>
            </LogoutButton>
          </div>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
