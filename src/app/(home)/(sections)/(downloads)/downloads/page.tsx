import { getAllDownloads } from "@/components/feature/downloads/action";
import ListOfDownloads from "@/components/feature/downloads/list-of-downloads";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Downloads"
};

export default async function Page() {
	const downloads = await getAllDownloads();

	return (
		<div className="mx-auto max-w-9xl px-4 py-12">
			<ListOfDownloads initialData={downloads} />
		</div>
	);
}
