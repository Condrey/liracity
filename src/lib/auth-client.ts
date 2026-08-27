import { inferAdditionalFields, inferOrgAdditionalFields, organizationClient } from "better-auth/client/plugins";
import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

export const authClient = createAuthClient({
	plugins: [
		inferAdditionalFields<typeof auth>(),
		organizationClient({ teams: { enabled: true }, schema: inferOrgAdditionalFields<typeof auth>() }),
		nextCookies()
	]
});
