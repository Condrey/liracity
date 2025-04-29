import { PageTitle } from "@/components/page-utils";
import { cityServicesLinks, NavLink } from "@/components/user/constants";
import { Metadata } from "next";

const {title,description} = cityServicesLinks.find(val=>val.href==='/services/infrastructure-development')!
export const metadata:Metadata={
    title,description
}
export default function Page(){
    return <div className="pt-[85px]">
        <PageTitle heading={title}/>
    </div>
}