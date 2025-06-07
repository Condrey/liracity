import { cn } from "@/lib/utils";
import React from "react";

export default function BodyContainer({children,className}:{children:React.ReactNode,className?:string}){
    return <main className={
        cn("pt-12 w-full max-w-3xl mx-auto space-y-6",className)
    }>{children}</main>
}