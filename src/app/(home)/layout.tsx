import { validateRequest } from "@/auth";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/user/app-sidebar";
import TopAppBar from "@/components/user/top-app-bar";
import { redirect } from "next/navigation";
import SessionProvider from "../session-provider";

export const iframeHeight = "800px";
const TOP_APP_BAR_HEIGHT = "48px";

export default async function Layout({ children }: { children: React.ReactNode }) {
	const { session, user } = await validateRequest();
	if (!!user && !user.isVerified) {
		redirect(`/user-verification/${user.id}`);
	}

	return (
		<SessionProvider value={{ session, user }}>
			<div
				// className="[--header-height:calc(--spacing(14))]"
				className=""
				style={
					{
						"--header-height": TOP_APP_BAR_HEIGHT
					} as React.CSSProperties
				}
			>
				<SidebarProvider className="flex flex-col ">
					<header className="sticky top-0 z-50  w-full dark:bg-card bg-primary text-primary-foreground dark:text-card-foreground  dark:border-b">
						<TopAppBar className="w-full max-w-9xl  py-2 mx-auto  px-3 " />
					</header>
					<div className="flex flex-1 size-full ">
						<AppSidebar />
						<SidebarInset>
							<div className=" h-full overflow-hidden  w-full">
								<main className=" size-full   overflow-y-auto scroll-auto flex flex-col gap-8 ">
									<div className="h-full  mx-auto w-full   ">{children}</div>
								</main>
							</div>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</div>
		</SessionProvider>
	);
}
