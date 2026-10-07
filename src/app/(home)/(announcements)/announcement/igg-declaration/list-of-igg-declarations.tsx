"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllIggDeclarations } from "./action";
import { IggDeclaration } from "@/generated/prisma/client";
import ErrorContainer from "@/components/query-containers/error-container";
import EmptyContainer from "@/components/query-containers/empty-container";
import { Button } from "@/components/ui/button";
import { ButtonAddEditIGGDeclaration } from "./button-add-edit-iggDeclaration";
import { DataTable } from "@/components/data-table/data-table";
import { useIggDeclarationColumns } from "./columns";
import { Edit2Icon, EditIcon, HistoryIcon, InfoIcon, PlusIcon, SheetIcon } from "lucide-react";
import EligibleLeaders from "./eligible-leaders";
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemTitle } from "@/components/ui/item";
import { formatDate } from "date-fns";
import ButtonDownloadIgDeclarationSheetSheet from "./button-download-sheet";

interface Props {
	initialData: IggDeclaration[];
}

export default function ListOfIGGDeclarations({ initialData }: Props) {
	const query = useQuery({
		queryKey: ["iggDeclarations"],
		queryFn: getAllIggDeclarations,
		initialData
	});
	const columns = useIggDeclarationColumns();
	const { data, status, error } = query;
	const now = new Date();

	if (status === "error") {
		return <ErrorContainer query={query} errorMessage="Failed to load IGG Declarations" />;
	}
	if (!data.length) {
		console.error(error);
		return (
			<EmptyContainer
				message={"No IGG declarations found"}
				description="No leader has submitted their details for Igg Declarations yet. If you are a leader, use the button below to register."
			>
				<ButtonAddEditIGGDeclaration>Register for IG-Declaration now</ButtonAddEditIGGDeclaration>
				<EligibleLeaders variant={"link"}>
					<InfoIcon className="inline" /> Show Eligible Leaders
				</EligibleLeaders>
			</EmptyContainer>
		);
	}
	return (
		<DataTable
			data={data}
			columns={columns}
			filterColumn={{ id: "name" }}
			className="w-full"
			tableHeaderSection={
				<div className="mt-4">
					<h1 className="mt-4 text-lg font-bold tracking-tight text-pretty uppercase">
						All Submitted Leader details <span className="font-normal text-muted-foreground">({data.length})</span>
					</h1>
					<EligibleLeaders variant={"link"}>
						<InfoIcon className="inline" /> Show Eligible Leaders
					</EligibleLeaders>
				</div>
			}
			cardRenderer={(item) => {
				const { email, createdAt, name, nin, phoneNumber, title } = item;
				return (
					<Item variant={"muted"} className="w-full">
						<ItemContent>
							<ItemTitle className="uppercase">{name}</ItemTitle>
							<ItemDescription>{title}</ItemDescription>
							<ItemDescription>
								{phoneNumber} - {email}
							</ItemDescription>
						</ItemContent>
						<ItemFooter>
							<span className="text-muted-foreground">
								<HistoryIcon className="mr-1 inline size-4" />
								{formatDate(createdAt, "PPp")}
							</span>
							<ItemActions>
								<ButtonAddEditIGGDeclaration variant="secondary" iggDeclarationToEdit={item}>
									<Edit2Icon /> Edit
								</ButtonAddEditIGGDeclaration>
							</ItemActions>
						</ItemFooter>
					</Item>
				);
			}}
			// fab={
			// 	<ButtonAddEditIGGDeclaration variant="default">
			// 		<PlusIcon />
			// 	</ButtonAddEditIGGDeclaration>
			// }
		>
			<ButtonDownloadIgDeclarationSheetSheet>
				<SheetIcon />
			</ButtonDownloadIgDeclarationSheetSheet>
			<ButtonAddEditIGGDeclaration variant="outline">
				<PlusIcon /> New
			</ButtonAddEditIGGDeclaration>
		</DataTable>
	);
}
