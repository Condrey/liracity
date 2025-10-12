import BodyContainer from "@/app/(home)/body-container";
import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";
import PageClient from "./page-client";

const { title, description } = {
	title: "The team",
	description: `Explore the focus areas and functions of the city council.`
};

export const metadata: Metadata = {
	title,
	description
};
export default function Page() {
	return (
		<BodyContainer className="">
			<PageTitle heading={title} />
			<PageClient />
		</BodyContainer>
	);
}
