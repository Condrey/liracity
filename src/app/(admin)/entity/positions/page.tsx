import ButtonAddEditPosition from "@/components/feature/entity/position/button-add-edit-position";
import { PageTitle } from "@/components/page-utils";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";

const PAGE_TITLE = "List of Positions";

export const metadata: Metadata = {
	title: PAGE_TITLE
};

export default function Page() {
	return (
		<div>
			<PageTitle heading={PAGE_TITLE}>
				<ButtonAddEditPosition>
					<PlusIcon />
				</ButtonAddEditPosition>{" "}
			</PageTitle>
		</div>
	);
}
