import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";

const { title, description } = {
  title: "The team",
  description: `Explore the focus areas and functions of the city council.`,
};

export const metadata: Metadata = {
  title,
  description,
};
export default function Page() {
  return (
    <div className="*:pt-[85px] scroll-smooth">
      <PageTitle heading={title} />
    </div>
  );
}
