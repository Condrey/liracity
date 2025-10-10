import { GitHub, Google } from "arctic";
import { getCurrentSession } from "./app/(auth)/lib/session";
import { cache } from "react";

export const google = new Google(
	process.env.AUTH_GOOGLE_ID!,
	process.env.AUTH_GOOGLE_SECRET!,
	`${process.env.NEXT_PUBLIC_BASE_URL}/login/google/callback`
);
export const github = new GitHub(
	process.env.AUTH_GITHUB_ID!,
	process.env.AUTH_GITHUB_SECRET!,
	`${process.env.NEXT_PUBLIC_BASE_URL}/login/github/callback`
);

export const validateRequest = cache(getCurrentSession);
