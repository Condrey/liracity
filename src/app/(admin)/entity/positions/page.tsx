import { getAllPositions } from "@/components/feature/entity/position/action";
import ButtonAddEditPosition from "@/components/feature/entity/position/button-add-edit-position";
import ListOfPositions from "@/components/feature/entity/position/list-of-positions";
import { PageTitle } from "@/components/page-utils";
import prisma from "@/lib/prisma";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";

const PAGE_TITLE = "List of Positions";

export const metadata: Metadata = {
	title: PAGE_TITLE
};

export default async function Page() {
	const positions = await getAllPositions()
	return (
		<div>
			<PageTitle heading={PAGE_TITLE}>
				<ButtonAddEditPosition>
					<PlusIcon />
				</ButtonAddEditPosition>
			</PageTitle>
			<ListOfPositions positions={positions} />
		</div>
	);
}
