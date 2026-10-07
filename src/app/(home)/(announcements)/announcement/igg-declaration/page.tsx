import { Suspense } from "react";
import FormAddEditIGGDeclaration from "./form-add-edit-igg-declaration";
import { getAllIggDeclarations } from "./action";
import ListOfIGGDeclarations from "./list-of-igg-declarations";
import { Metadata } from "next";
import { ButtonAddEditIGGDeclaration } from "./button-add-edit-iggDeclaration";
import { InfoIcon, PlusIcon } from "lucide-react";
import EligibleLeaders from "./eligible-leaders";

export const metadata: Metadata = {
	title: "Registration for Bi-annual IGG-Declaration for Leaders",
	description: `
Eligible leaders are City Mayor, City Councilors, Division Chairpersons, Division Vice Chairpersons;
Specified Leaders like Town Clerk, Deputy & Division Town Clerks, Assistant Town Clerks, Treasurers; Deputy & Assistant Treasures
Heads of Department including; Engineer, Education Officer, Community Development Officer, Education Officer; Health Officer; Engineer; Production Officer, Planner, Internal Auditor, Natural resources Officer and Chief Finance Officer
Chairperson, Members and Secretary of the City Commission, City Land Board and City Contracts Committee.
All Accountants, Internal Auditors and Procurement Officers of and above the rank of officer.
`
};
export default async function Page() {
	const allIggDeclarations = await getAllIggDeclarations();
	return (
		<div className="h-dvh w-full gap-4 overflow-y-auto overscroll-y-auto lg:grid lg:grid-cols-3 lg:py-4">
			<div className="space-y-6 p-4 md:col-span-2">
				<div className="sticky top-0 flex flex-col bg-card lg:hidden z-50">
					<h1 className="mt-4 text-lg font-bold tracking-tight text-pretty uppercase">
						All Submitted Leader details{" "}
						<span className="font-normal text-muted-foreground">({allIggDeclarations.length})</span>
					</h1>
					<div className="flex w-full justify-between">
						<EligibleLeaders variant={"link"}>
							<InfoIcon className="inline" /> Show Eligible Leaders
						</EligibleLeaders>
						<ButtonAddEditIGGDeclaration variant="default">
							<PlusIcon /> Self Register
						</ButtonAddEditIGGDeclaration>
					</div>
				</div>

				<ListOfIGGDeclarations initialData={allIggDeclarations} />
			</div>
			<div className="mr-4 hidden space-y-6 bg-card p-0 lg:flex lg:flex-col lg:p-4">
				<h1 className="text-lg font-bold tracking-tight text-pretty uppercase">
					IGG Declaration Registration Form (Leaders only for Lira City Council)
				</h1>
				<Suspense>
					<FormAddEditIGGDeclaration />
				</Suspense>
			</div>
		</div>
	);
}
