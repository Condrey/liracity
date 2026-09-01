import { EventStatus, NewsArticleStatus, Role,StationType } from "@/generated/prisma/enums";
import { InboxIcon, LetterTextIcon, LockIcon, LucideIcon, TrashIcon, UploadIcon } from "lucide-react";

// role
const allRoles = Object.values(Role);
export const myPrivileges: Record<Role, Role[]> = {
	SUPER_ADMIN: allRoles,
	ADMIN: allRoles,
	STATUTORY: [],
	HOD: [],
	HOS: [],
	MODERATOR: allRoles.filter((role) => role !== Role.ADMIN),
	STAFF: [Role.STAFF, Role.USER],
	USER: [],
	COUNCIL: []
};
export const userRoles: Record<Role, { role: string }> = {
	USER: {
		role: "Visitor"
	},
	ADMIN: {
		role: "Administrator"
	},
	MODERATOR: {
		role: "Moderator"
	},
	STAFF: {
		role: "Staff Member"
	},
	SUPER_ADMIN: {
		role: "Super administrator"
	},
	HOD: {
		role: "Head Of Department"
	},
	HOS: {
		role: "Head Of Section/ Unit"
	},
	COUNCIL: {
		role: "Council Staff"
	},
	STATUTORY: {
		role: "Statutory Staff"
	}
};

// event
export const allEventStatuses = Object.values(EventStatus);
export const eventStatuses: Record<
	EventStatus,
	{
		eventStatus: string;
		icon: LucideIcon;
		variant: "default" | "success" | "outline" | "destructive" | "secondary" | "warning" | null | undefined;
	}
> = {
	DRAFT: {
		eventStatus: "Draft",
		icon: LetterTextIcon,
		variant: "warning"
	},
	PUBLISHED: {
		eventStatus: "Published",
		icon: UploadIcon,
		variant: "success"
	},
	CANCELLED: {
		eventStatus: "Cancelled",
		icon: TrashIcon,
		variant: "destructive"
	},
	PRIVATE: {
		eventStatus: "Private",
		icon: LockIcon,
		variant: "destructive"
	}
};

// news article
export const allNewsArticleStatuses = Object.values(NewsArticleStatus);
export const newsArticleStatuses: Record<
	NewsArticleStatus,
	{
		newsArticleStatus: string;
		icon: LucideIcon;
		variant: "default" | "success" | "outline" | "destructive" | "secondary" | "warning" | null | undefined;
	}
> = {
	DRAFT: {
		newsArticleStatus: "Draft",
		icon: LetterTextIcon,
		variant: "warning"
	},
	PUBLISHED: {
		newsArticleStatus: "Published",
		icon: UploadIcon,
		variant: "success"
	},
	PRIVATE: {
		newsArticleStatus: "Private",
		icon: LockIcon,
		variant: "destructive"
	},
	ARCHIVED: {
		newsArticleStatus: "Archived",
		icon: InboxIcon,
		variant: "outline"
	}
};


// station types
export const allStationTypes = Object.values(StationType);
export const stationTypes: Record<
	StationType,
	{
		title: string;
		
	}
> = {
	DIVISION: {
		title: "Division"
	},
	HEADQUARTERS: {
		title: "Head Quarter"
	}
};
