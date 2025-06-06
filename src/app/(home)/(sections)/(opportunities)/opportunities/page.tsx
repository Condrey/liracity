import { PageTitle } from "@/components/page-utils";
import { cityOpportunityLinks, NavLink } from "@/components/user/constants";
import { Metadata } from "next";

const { title, description } = {
  title: "Opportunities",
  description: "Explore opportunities to grow and serve.",
};

export const metadata: Metadata = {
  title,
  description,
};
export default function Page() {
  return (
    <div className="pt-[85px]">
      <PageTitle heading={title} />
    </div>
  );
}
