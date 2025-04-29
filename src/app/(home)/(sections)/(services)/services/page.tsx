import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";

const { title, description } = {
  title: "City services",
  description: "Access services offered by the Lira City Council.",
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
