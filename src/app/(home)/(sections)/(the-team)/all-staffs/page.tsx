import { Metadata } from "next";
import { Suspense } from "react";
import { getAllStaffs } from "./actions";

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
	const allStaffs = getAllStaffs();

	return <div>All staffs</div>;
}
