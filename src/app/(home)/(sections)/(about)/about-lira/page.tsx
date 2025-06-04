import prisma from "@/lib/prisma";
import { Metadata } from "next";
import About from "./about";
import GeographyAndLandmarks from "./geography-and-landmarks";
import HistoryAndCulture from "./history-and-culture";

const { title, description } = {
  title: "About",
  description: `Discover Lira’s history, culture, and geography.`,
};

export const metadata: Metadata = {
  title,
  description,
};
export default async function Page() {
  const entity = await prisma.entity.findFirst();
  return (
    <div className="*:pt-[75px] scroll-smooth px-3 max-w-3xl mx-auto w-full  ">
      <About entity={entity!} />
      <HistoryAndCulture entity={entity!}  />
      <GeographyAndLandmarks entity={entity!}  />
    </div>
  );
}
