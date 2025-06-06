import { PageTitle } from "@/components/page-utils";
import { cityMediaCenterLinks, NavLink } from "@/components/user/constants";
import { Metadata } from "next";

const { title, description } = cityMediaCenterLinks.find(
  (val) => val.href === "/media/social-media-podcasts",
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
