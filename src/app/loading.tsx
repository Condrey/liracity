import { Loader2Icon } from "lucide-react";
import Image from "next/image";

export default function Loading() {
	return (
		<div className="flex h-dvh flex-col items-center justify-center gap-4">
			<div className="relative flex size-[100px] items-center justify-center">
				<Loader2Icon strokeWidth={0.4} className="absolute size-[150px] animate-spin text-primary" />
				<Image width={80} height={80} src={"/logo.png"} alt="the logo" className="absolute size-[80px] animate-pulse" />
			</div>
		</div>
	);
}
