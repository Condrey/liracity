import { getAllDownloads } from "@/components/feature/downloads/action";
import ListOfDownloads from "@/components/feature/downloads/list-of-downloads";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Downloads"
};

export default async function Page() {
	const downloads = await getAllDownloads();

	return (
		<div className="">
			<ListOfDownloads initialData={downloads} />
		</div>
	);
}
