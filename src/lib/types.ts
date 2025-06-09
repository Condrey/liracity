import { Prisma } from "@/generated/prisma";

// User
export const userDataSelect = {
  id: true,
  name: true,
  avatarUrl: true,
  telephone: true,
  email: true,
  isVerified: true,
} satisfies Prisma.UserSelect;
export type UserDataSelect = Prisma.UserGetPayload<{
  select: typeof userDataSelect;
}>;

// Employee
export const employeeDataInclude = {
  user: { select: userDataSelect },
} satisfies Prisma.EmployeeInclude;
export type EmployeeData = Prisma.EmployeeGetPayload<{
  include: typeof employeeDataInclude;
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
export interface Leader {
  leader: UserDataSelect;
}

// Departmental sectors
export const departmentalSectorDataInclude = {
  employees: { include: employeeDataInclude },
  departMent: {
    include: {
      headOfDepartment: { include: { user: { select: userDataSelect } } },
    },
  },
  _count: { select: { employees: true } },
} satisfies Prisma.DepartMentalSectorInclude;
export type DepartmentalSectorData = Prisma.DepartMentalSectorGetPayload<{
  include: typeof departmentalSectorDataInclude;
}>;

// Department
export const departmentDataInclude = {
  departmentalSectors: { include: departmentalSectorDataInclude },
  headOfDepartment: { include: { user: { select: userDataSelect } } },
  _count: { select: { departmentalSectors: true } },
} satisfies Prisma.DepartMentInclude;
export type DepartmentData = Prisma.DepartMentGetPayload<{
  include: typeof departmentDataInclude;
}>;

// Msc
export type ResponsiveBreadcrumbItem = {
  label: string;
  href: string;
};
export type ChartUser = {
  id: string;
  name: string;
  resumedOffice: number;
  endedOffice: number | null;
  avatarUrl: string | null;
  isVerified?: boolean;
  position: string;
  title: string | null;
  hierarchy: number;
  telephone: string;
  email: string;
};
