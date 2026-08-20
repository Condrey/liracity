import { Metadata } from "next";
import { Suspense } from "react";
import { getAllStaffs } from "./actions";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

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
