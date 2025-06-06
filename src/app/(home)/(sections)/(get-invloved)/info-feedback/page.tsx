import { PageTitle } from "@/components/page-utils";
import { cityGetInvolvedLinks, NavLink } from "@/components/user/constants";
import { Metadata } from "next";

const { title, description } = cityGetInvolvedLinks.find(
  (val) => val.href === "/info-feedback",
)!;
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
