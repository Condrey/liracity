import { Prisma } from "@/generated/prisma";

// User
export const userDataSelect = {
    name:true,
    avatarUrl:true,
    telephone:true,
    email:true,
} satisfies Prisma.UserSelect;

// News Article 
export const newsArticleDataInclude = {
    author: {select: userDataSelect},
    _count:{select:{NewsArticleLike:true,newsComments:true}}
} satisfies Prisma.NewsArticleInclude;
export type NewsArticleData = Prisma.NewsArticleGetPayload<{include: typeof newsArticleDataInclude}>;