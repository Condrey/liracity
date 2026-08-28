import { AppSidebar } from "@/components/feature/user/app-sidebar";
import TopAppBar from "@/components/feature/user/top-app-bar/top-app-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { validateRequest } from "@/lib/get-session";
import SessionProvider from "@/lib/session-provider";

export const iframeHeight = "800px";
const TOP_APP_BAR_HEIGHT = "48px";

export default async function Layout({ children }: { children: React.ReactNode }) {
	const { session, user } = await validateRequest();
	// if (!!user && !user.isVerified) {
	// 	redirect(`/user-verification/${user.id}`);
	// }

	return (
		<SessionProvider value={{ session, user }}>
			<div
				className=""
				style={
					{
						"--header-height": TOP_APP_BAR_HEIGHT
					} as React.CSSProperties
				}
			>
				<SidebarProvider className="flex flex-col">
					<header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground dark:border-b dark:bg-card dark:text-card-foreground">
						<TopAppBar className="mx-auto w-full max-w-9xl px-3 py-2" />
					</header>
					<div className="flex size-full flex-1">
						<AppSidebar />
						<SidebarInset>
							<div className="h-full w-full overflow-hidden">
								<main className="flex size-full flex-col gap-8 overflow-y-auto scroll-auto">
									<div className="mx-auto h-full w-full">{children}</div>
								</main>
							</div>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</div>
		</SessionProvider>
	);
}
