import { validateRequest } from "@/lib/get-session";
import SessionProvider from "@/lib/session-provider";

export default async function Layout({ children }: { children: React.ReactNode }) {
	const { session, user } = await validateRequest();

	return <SessionProvider value={{ session, user }}>{children}</SessionProvider>;
}
