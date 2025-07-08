import { Metadata } from "next";
import { getAllStaffs } from "./actions";
import { Suspense } from "react";


export const metadata: Metadata = {
title:'All Staffs'
}

export default  function Page(){
return <Suspense fallback={'Loading'}><AllStaffs/></Suspense>

}

async function AllStaffs(){
const allStaffs = getAllStaffs()

return 
}