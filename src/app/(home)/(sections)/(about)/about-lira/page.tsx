import { Metadata } from "next"
import GeographyAndLandmarks from "./geography-and-landmarks"
import HistoryAndCulture from "./history-and-culture"

export const metadata:Metadata={
    title:'About'
}
export default function Page(){
    return <div className="*:pt-[85px] scroll-smooth">
        <HistoryAndCulture/>
        <GeographyAndLandmarks/>
    </div>
}