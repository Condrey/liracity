import { Prisma } from "@/generated/prisma";

// User
export const userDataSelect = {
  name: true,
  avatarUrl: true,
  telephone: true,
  email: true,
} satisfies Prisma.UserSelect;
export type UserDataSelect = Prisma.UserGetPayload<{
  select: typeof userDataSelect;
}>;

// News Article
export const newsArticleDataInclude = {
  author: { select: userDataSelect },
  _count: { select: { newsArticleLikes: true, newsComments: true } },
} satisfies Prisma.NewsArticleInclude;
export type NewsArticleData = Prisma.NewsArticleGetPayload<{
  include: typeof newsArticleDataInclude;
}>;

// Leader container
export interface LeaderContainer {
  leader: UserDataSelect;
}

// Departmental sectors
export const departmentalSectorDataInclude = {
  employees: true,
  departMent: true,
  _count: { select: { employees: true } },
} satisfies Prisma.DepartMentalSectorInclude;
export type DepartmentalSectorData = Prisma.DepartMentalSectorGetPayload<{
  include: typeof departmentalSectorDataInclude;
}>;

// Department
export const departmentDataInclude = {
  departmentalSectors: { include: departmentalSectorDataInclude },
  headOfDepartment: { include: { user: true } },
  _count: { select: { departmentalSectors: true } },
} satisfies Prisma.DepartMentInclude;
export type DepartmentData = Prisma.DepartMentGetPayload<{
  include: typeof departmentDataInclude;
}>;

// Msc 
export type ResponsiveBreadcrumbItem={
  label:string,href:string
}