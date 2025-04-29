import { PageTitle } from "@/components/page-utils";
import { citySportsAndReactionLinks, NavLink } from "@/components/user/constants";
import { Metadata } from "next";

const {title,description} = citySportsAndReactionLinks.find(val=>val.href==='/sports/events-facilities')!
export const metadata:Metadata={
    title,description
}
export default function Page(){
    return <div className="pt-[85px]">
        <PageTitle heading={title}/>
    </div>
}