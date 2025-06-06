import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";
import { Tienne } from "next/font/google";

const { title, description } = {
  title: "Media center",
  description: `Stay updated with the latest from the city council.`,
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
