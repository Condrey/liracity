import { Metadata } from "next"
import GeographyAndLandmarks from "./geography-and-landmarks"
import HistoryAndCulture from "./history-and-culture"

const { title, description } = {
    title: "About",
    description: `Discover Lira’s history, culture, and geography.`,
  };
  
  export const metadata: Metadata = {
    title,
    description,
  };
export default function Page(){
    return <div className="*:pt-[85px] scroll-smooth">
        <HistoryAndCulture/>
        <GeographyAndLandmarks/>
    </div>
}