"use client";

import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import GoogleSignInButton from "../google/google-signin-button";
import LoginForm from "./login-form";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

export default function UserLogin() {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <LoginForm />

      <div className="flex items-center gap-3 mt-6">
        <div className="h-px flex-1 bg-muted-foreground" />
        <span className="text-muted-foreground">OR CONTINUE WITH</span>
        <div className="h-px flex-1 bg-muted-foreground" />
      </div>
      <div className="flex justify-center gap-3 w-full items-center pb-6 pt-3">
        <GoogleSignInButton />
      </div>
      <Link
        href={`/signup`}
        className="block text-center underline group/link hover:text-primary"
        onClick={() => startTransition(() => {})}
      >
        <span>
          {`Don't have an account?`} <strong>SignUp</strong>
        </span>
        <MoveRightIcon
          className={cn(
            "inline group-hover/link:visible transition-all ease-linear delay-200 ms-2 invisible  ",
            isPending && " visible animate-caret-blink",
          )}
        />
      </Link>
    </>
  );
}
