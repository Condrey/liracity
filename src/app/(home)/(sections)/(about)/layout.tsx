import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import prisma from "@/lib/prisma";
import { cache, Suspense } from "react";
import { SideCarousel } from "./about-lira/side-carousel";

export const allMedia = cache(async () => await prisma.media.findMany());

export default async function Layout({ children }: { children: React.ReactNode }) {
	const sideBarMedia = allMedia();
	await prisma.media.deleteMany({
		where: { newsArticleId: null, eventId: null }
	});
	return (
		<>
			<div></div>
			<SidebarProvider className="h-full">
				<Suspense>
					<SideCarousel allMedia={sideBarMedia} direction="forward" side="left" className="hidden xxl:flex" />
				</Suspense>
				<SidebarInset className="no-scrollbar h-[calc(100vh-var(--header-height))]">
					<div className="overflow-y-auto">{children}</div>
				</SidebarInset>
				<Suspense>
					<SideCarousel allMedia={sideBarMedia} direction="backward" side="right" className="hidden xxl:flex" />
				</Suspense>{" "}
			</SidebarProvider>
		</>
	);
}
