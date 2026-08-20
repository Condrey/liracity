import { Prisma } from "@/generated/prisma/client";
import { LucideIcon } from "lucide-react";

// User
export const userDataSelect = {
	id: true,
	name: true,
	image: true,
	telephone: true,
	email: true,
	isVerified: true,
	bio: true,
	username: true
} satisfies Prisma.UserSelect;
export type UserDataSelect = Prisma.UserGetPayload<{
	select: typeof userDataSelect;
}>;

// Employee
export const employeeDataInclude = {
	user: { select: userDataSelect },
	departMentalSector: { include: { departMent: true } },
	departMents: true,
	position: true
} satisfies Prisma.EmployeeInclude;
export type EmployeeData = Prisma.EmployeeGetPayload<{
	include: typeof employeeDataInclude;
}>;

// Media
export const mediaDataInclude = {} satisfies Prisma.MediaInclude;
export type MediaData = Prisma.MediaGetPayload<{
	include: typeof mediaDataInclude;
}>;

// News Article
export const newsArticleDataInclude = {
	author: { select: userDataSelect },
	coverImage: { select: { url: true } },
	category: true,
	media: true,
	tags: true,
	_count: { select: { newsArticleLikes: true, newsComments: true } }
} satisfies Prisma.NewsArticleInclude;
export type NewsArticleData = Prisma.NewsArticleGetPayload<{
	include: typeof newsArticleDataInclude;
}>;

// Events
export const eventDataInclude = {
	author: { select: userDataSelect },
	coverImage: { select: { url: true } },
	category: true,
	media: true,
	_count: { select: { eventLikes: true, eventComments: true } }
} satisfies Prisma.EventInclude;
export type EventData = Prisma.EventGetPayload<{
	include: typeof eventDataInclude;
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
			headOfDepartment: { include: employeeDataInclude }
		}
	},
	_count: { select: { employees: true } }
} satisfies Prisma.DepartMentalSectorInclude;
export type DepartmentalSectorData = Prisma.DepartMentalSectorGetPayload<{
	include: typeof departmentalSectorDataInclude;
}>;

// Department
export const departmentDataInclude = {
	departmentalSectors: { include: departmentalSectorDataInclude },
	headOfDepartment: { include: employeeDataInclude },
	_count: { select: { departmentalSectors: true } }
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
	image: string | null;
	isVerified?: boolean;
	position: string;
	title: string | null;
	hierarchy: number;
	telephone: string;
	email: string;
};
export interface Attachment {
	file: File;
	mediaId?: string;
	isUploading: boolean;
	extension?: string;
	name?: string;
	message?: string;
}

export type SideBarSubItem = {
	title: string;
	url: string;
	paramValue: string | undefined;
};

export type SideBarItem = {
	title: string;
	url: string;
	icon?: LucideIcon;
	filter: string;
	isActive?: boolean;
	items?: SideBarSubItem[];
};
