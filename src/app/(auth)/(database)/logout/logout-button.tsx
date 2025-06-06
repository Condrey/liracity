"use client";

import { ButtonProps } from "@/components/ui/button";
import LoadingButton from "@/components/ui/loading-button";
import { useTransition } from "react";
import { logout } from "./actions";
import { cn } from "@/lib/utils";

interface LogoutButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}
export default function LogoutButton({
  children,
  className,
  ...props
}: LogoutButtonProps) {
  const [isPending, startTransition] = useTransition();
  async function logOutClicked() {
    const response = await logout();
  }
  return (
    <LoadingButton
      loading={isPending}
      onClick={() => startTransition(() => logOutClicked())}
      className={cn("text-inherit", className)}
      {...props}
    >
      {children}
    </LoadingButton>
  );
}
