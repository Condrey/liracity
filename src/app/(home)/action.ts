'use server'

import prisma from "@/lib/prisma"
import { newsArticleDataInclude } from "@/lib/types"
import { cache } from "react"

 async function lastTenNewsArticles (){
    return await prisma.newsArticle.findMany({
        take:10,
        include:newsArticleDataInclude
    })
}
export const getLastTenNewsArticles = cache(lastTenNewsArticles)

