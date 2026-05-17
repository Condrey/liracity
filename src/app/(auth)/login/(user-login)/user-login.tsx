"use client";

import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { cn } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import GoogleSignInButton from "../google/google-signin-button";
import LoginForm from "./login-form";

export default function UserLogin() {
	const [isPending, startTransition] = useTransition();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();

	return (
		<>
			<div className="flex w-full items-center justify-center gap-3 pt-3">
				<GoogleSignInButton />
			</div>
			<div className="my-6 flex items-center gap-3">
				<div className="h-px flex-1 bg-muted-foreground" />
				<span className="text-muted-foreground uppercase">Or use Email</span>
				<div className="h-px flex-1 bg-muted-foreground" />
			</div>
			<LoginForm />

			<Link
				href={getNavigationLinkWithPathnameWithoutUpdate(`/signup`)}
				className="group/link mt-4 block text-center underline hover:text-primary"
				onClick={() => startTransition(() => {})}
			>
				<span>
					{`Don't have an account?`} <strong>SignUp</strong>
				</span>
				<MoveRightIcon
					className={cn(
						"invisible ms-2 inline transition-all delay-200 ease-linear group-hover/link:visible",
						isPending && "visible animate-caret-blink"
					)}
				/>
			</Link>
		</>
	);
}
