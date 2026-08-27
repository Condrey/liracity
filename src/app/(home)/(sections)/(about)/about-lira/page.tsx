import prisma from "@/lib/prisma";
import { Metadata } from "next";
import About from "./about";
import GeographyAndLandmarks from "./geography-and-landmarks";
import HistoryAndCulture from "./history-and-culture";

const { title, description } = {
	title: "About",
	description: `Discover Lira’s history, culture, and geography.`
};

export const metadata: Metadata = {
	title,
	description
};
export default async function Page() {
	const entity = await prisma.entity.findFirst();
	return (
		<div className="relative flex w-full space-x-4">
			<div className="mx-auto w-full max-w-3xl">
				<About entity={entity!} id="#about" />
				<HistoryAndCulture entity={entity!} id="#history-culture" />
				<GeographyAndLandmarks entity={entity!} id="#geography" />
			</div>
		</div>
	);
}
