import { Suspense } from "react";
import FormAddEditIGGDeclaration from "./form-add-edit-igg-declaration";
import { getAllIggDeclarations } from "./action";
import ListOfIGGDeclarations from "./list-of-igg-declarations";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Registration for Bi-annual IGG-Declaration for Leaders"
};
export default async function Page() {
	const allIggDeclarations = await getAllIggDeclarations();
	return (
		<div className="w-full gap-4 overscroll-y-auto lg:grid lg:grid-cols-3 lg:py-4">
			<div className="space-y-6 p-4 md:col-span-2">
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
