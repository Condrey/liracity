import { PageTitle } from "@/components/page-utils";
import { cityOpportunityLinks, NavLink } from "@/components/user/constants";
import { Metadata } from "next";

const {title,description} = cityOpportunityLinks.find(val=>val.href==='/opportunities/careers-internships')!
export const metadata:Metadata={
    title,description
}
export default function Page(){
    return <div className="pt-[85px]">
        <PageTitle heading={title}/>
    </div>
}