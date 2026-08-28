import { Metadata } from "next";
import { Suspense } from "react";
import { getAllStaffs } from "./actions";
import StaffList from "./staff-list";

export const metadata: Metadata = {
	title: "All Staffs"
};

export default function Page() {
	return (
		<Suspense fallback={"Loading"}>
			<AllStaffs />
		</Suspense>
	);
}

async function AllStaffs() {
	const allStaffs = await getAllStaffs();

	return <div className="pt-8">
		{/* <StaffList staffs={allStaffs}/> */}
	</div>;
}
