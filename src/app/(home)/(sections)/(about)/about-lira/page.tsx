import { Metadata } from "next"
import GeographyAndLandmarks from "./geography-and-landmarks"
import HistoryAndCulture from "./history-and-culture"
import prisma from "@/lib/prisma";

const { title, description } = {
    title: "About",
    description: `Discover Lira’s history, culture, and geography.`,
  };
  
  export const metadata: Metadata = {
    title,
    description,
  };
export default async function Page(){
  const entity = await prisma.entity
    return <div className="*:pt-[75px] scroll-smooth">
        <HistoryAndCulture/>
        <GeographyAndLandmarks/>
    </div>
}