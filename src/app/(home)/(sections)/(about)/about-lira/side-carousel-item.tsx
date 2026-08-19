import { Media } from "@/generated/prisma/client";
import Image from "next/image";

interface Props {
	item: Media;
}
export default function SideCarouselItem({ item }: Props) {
	return (
		<div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl bg-[#1b1510] shadow-2xl">
			{/* Film strip outer frame */}
			<div className="relative overflow-hidden rounded-lg border-[1px] border-[#b88a45] bg-[#17120e] shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_12px_30px_rgba(0,0,0,0.4)]">
				{/* Film texture */}
				<div className="bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.15)_0_1px,transparent_1px), radial-gradient(circle_at_80%_70%,rgba(255,255,255,.1)_0_1px,transparent_1px)] pointer-events-none absolute inset-0 z-20 bg-[length:7px_7px,11px_11px] opacity-20" />

				{/* Top film perforations */}
				<div className="flex h-8 items-center gap-3 overflow-hidden border-b-2 border-black bg-[#292019] px-3">
					{Array.from({ length: 24 }).map((_, i) => (
						<span
							key={i}
							className="h-4 w-7 shrink-0 rounded-[3px] border border-[#0b0907] bg-background shadow-inner"
						/>
					))}
				</div>

				{/* Main film area */}
				<div className="relative flex bg-[#211912]">
					{/* image frame */}
					<div className="relative flex-1 overflow-hidden rounded-sm border-4 border-[#0d0b09] bg-black mask-b-from-0 mask-radial-at-center shadow-[0_0_25px_rgba(0,0,0,.8)]">
						<Image
							src={item.url}
							alt={item.type}
							width={480}
							height={720}
							className="aspect-video size-full w-full object-cover brightness-90 contrast-110 grayscale-[20%] sepia-[35%]"
						/>

						{/* Vintage film overlay */}
						<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,220,160,.08),rgba(80,40,10,.12))] mix-blend-overlay" />

						{/* Film scratches */}
						<div className="bg-[repeating-linear-gradient( 90deg, transparent 0, transparent 96px, rgba(255,255,255,.25) 97px, transparent 98px )] pointer-events-none absolute inset-0 opacity-20" />
					</div>
				</div>

				{/* Bottom film perforations */}
				<div className="flex h-8 items-center gap-3 overflow-hidden border-t-2 border-black bg-[#292019] px-3">
					{Array.from({ length: 24 }).map((_, i) => (
						<span
							key={i}
							className="h-4 w-7 shrink-0 rounded-[3px] border border-[#0b0907] bg-background shadow-inner"
						/>
					))}
				</div>
			</div>

			{/* Caption */}
			{/* <div className="mt-4 px-2">
				<p className="font-serif text-lg font-semibold text-[#d6b477]">Memories from the Old Days</p>

				<p className="mt-1 text-sm text-[#9d8c78]">A vintage collection of photographs and moving memories.</p>
			</div> */}
		</div>
	);
}
