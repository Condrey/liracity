"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Sidebar, SidebarRail } from "@/components/ui/sidebar";
import { Media } from "@/generated/prisma/client";
import { cn } from "@/lib/utils";
import AutoScroll from "embla-carousel-auto-scroll";
import { use } from "react";
import SideCarouselItem from "./side-carousel-item";

interface Props extends React.ComponentProps<typeof Sidebar> {
	allMedia: Promise<Media[]>;
	direction: "forward" | "backward";
	side: "left" | "right";
	className?: string;
}
export function SideCarousel({ direction, side, className, allMedia, ...props }: Props) {
	const media = use(allMedia);
	return (
		<Sidebar
			collapsible={side === "right" ? "none" : "offcanvas"}
			className={cn("border-0", side === "right" ? "h-[calc(100vh-var(--header-height))]" : "border-l-0", className)}
			{...props}
		>
			<Carousel
				plugins={[
					AutoScroll({
						startDelay: 0,
						stopOnInteraction: false,
						stopOnMouseEnter: false,
						playOnInit: true,
						// speed: 3000,
						speed: 0.5,
						direction
					})
				]}
				opts={{
					align: "start",
					loop: true
				}}
				orientation="vertical"
				className=""
			>
				{/* 'className={cn("fixed -mt-1 h-[100vh] w-[12rem] sm:w-xs", side === "left" ? "left-4" : "right-4", className)}' */}
				<CarouselContent className={cn("h-[100vh] space-y-2", className)}>
					{media.map((item) => (
						<CarouselItem key={item.id} className="max-h-[240px]">
							<div className="p-1">
								<SideCarouselItem item={item} />
								{/* <Card className="flex aspect-square items-center justify-center overflow-clip py-0 sm:py-0">
									{item.type === "IMAGE" && (
										<Image src={item.url} alt={item.type} width={480} height={720} className="size-full object-cover" />
									)}
								</Card> */}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<SidebarRail />
		</Sidebar>
	);
}
