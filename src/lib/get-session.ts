import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "./auth";

export const validateRequest = cache(async () => {
	const start = performance.now();

	const sessionValue = await auth.api.getSession({
		headers: await headers()
	});

	console.log(`[Better Auth] getSession: ${(performance.now() - start).toFixed(0)}ms`);

	if (!sessionValue) return { user: null, session: null };
	return { user: sessionValue.user, session: sessionValue.session };
});
