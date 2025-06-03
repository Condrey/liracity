'use server'

import prisma from "@/lib/prisma"
import { webName } from "@/lib/utils"
import { singleContentSchema, SingleContentSchema } from "@/lib/validation"
import { cache } from "react"

async function entity(){
    return await prisma.entity.findFirst()
}
export const getEntity = cache(entity)


export async function upsertAbout(input:SingleContentSchema){
    const {singleContent} = singleContentSchema.parse(input)
    return await prisma.entity.upsert({
        where:{id:'entity'},
        create:{about: singleContent,id:'entity' , webName},
        update: {about:singleContent,webName}
    })
}