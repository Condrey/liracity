import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";

const { title, description } = {
  title: "Sports & Recreation",
  description: "Engage in sports and recreational activities in Lira.",
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
