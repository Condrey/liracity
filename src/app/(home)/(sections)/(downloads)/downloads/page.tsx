import { getAllDownloads } from "@/components/feature/downloads/action";
import ButtonAddEditDownload from "@/components/feature/downloads/button-add-edit-download";
import ListOfDownloads from "@/components/feature/downloads/list-of-downloads";
import { PageTitle } from "@/components/page-utils";
import { webName } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Downloads"
};

export default async function Page() {
	const downloads = await getAllDownloads();

	return (
		<div className="mx-auto max-w-9xl space-y-6 px-4 py-12">
			<PageTitle heading={`Downloadable  items for ${webName}`}>
				<ButtonAddEditDownload>
					<PlusIcon /> Add Download
				</ButtonAddEditDownload>
			</PageTitle>
			<ListOfDownloads initialData={downloads} />
		</div>
	);
}
