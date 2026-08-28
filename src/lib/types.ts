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
	emailVerified: true,
	bio: true,
	username: true,
	role: true
} satisfies Prisma.UserSelect;
export type UserDataSelect = Prisma.UserGetPayload<{
	select: typeof userDataSelect;
}>;

// Employee
export const employeeDataInclude = {
	user: { select: userDataSelect },
	currentPosition: true
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

// Team Member
export const teamMemberDataInclude = {
	employee: { include: employeeDataInclude },
	user: { select: userDataSelect },
	team: { select: { name: true, organizationId: true, organization: { select: { name: true } } } }
} satisfies Prisma.TeamMemberInclude;
export type TeamMemberData = Prisma.TeamMemberGetPayload<{
	include: typeof teamMemberDataInclude;
}>;
// Team
export const teamDataInclude = {
	organization: {},
	teammembers: { include: teamMemberDataInclude },
	_count: { select: { teammembers: true } }
} satisfies Prisma.TeamInclude;
export type TeamData = Prisma.TeamGetPayload<{
	include: typeof teamDataInclude;
}>;

// Member
export const memberDataInclude = {
	organization: {},
	employee: { include: employeeDataInclude },
	user: { select: userDataSelect }
} satisfies Prisma.MemberInclude;
export type MemberData = Prisma.MemberGetPayload<{
	include: typeof memberDataInclude;
}>;

// Organization
export const organizationDataInclude = {
	members: {
		include: memberDataInclude,
		where: { role: { not: "owner" } },
		orderBy: [{ role: "asc" }, { user: { name: "asc" } }]
	},
	teams: {
		include: teamDataInclude,
		orderBy: { name: "asc" }
	},
	_count: { select: { teams: true, members: { where: { role: { not: "owner" } } } } }
} satisfies Prisma.OrganizationInclude;
export type OrganizationData = Prisma.OrganizationGetPayload<{
	include: typeof organizationDataInclude;
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
