import { BlocksIcon, FilmIcon, HomeIcon, InfoIcon, LucideIcon, MailPlusIcon } from "lucide-react";

export const MAX_ATTACHMENTS = 5;
export const REDIRECT_TO_URL_SEARCH_PARAMS = "redirectToUrl";
export const SEARCH_PARAMS_NEWS_EVENTS = "defaultNewsEventsTabs";
export const DEFAULT_PASSWORD = "defaultPassword123!";

export const LINK_ESSENTIAL_SERVICES = "/services/essential";
export const LINK_NEWS = "/media/news";
export const LINK_EVENTS = "/media/events";
export const LINK_PUBLICATIONS = "/media/publications";
export const LINK_GALLERY = "/media/gallery";
export const LINK_SOCIAL_MEDIA = "/media/social-media";
export const LINK_PODCASTS = "/media/podcasts";
export const LINK_DEPARTMENTS = "/departments";
export const LINK_TECHNICAL_STAFFS = "/technical-staffs";
export const LINK_HIERARCHY = "/hierarchy";

export type NavLink = { title: string; href: string; description: string };
export type NavLinkGroup = {
	title: string;
	href: string;
	description: string;
	children: NavLink[];
	icon?: LucideIcon;
};

export const cityServicesLinks: NavLink[] = [
	{
		title: "Essential Services",
		href: LINK_ESSENTIAL_SERVICES,
		description: "Access vital services like water, sanitation, waste, and emergency response."
	},
	{
		title: "Community & Social Services",
		href: "/services/community-social",
		description: "Support for families, neighborhoods, housing, libraries, and cultural programs."
	},
	{
		title: "Health & Education",
		href: "/services/health-education",
		description: "Find healthcare facilities and educational programs within the city."
	},
	{
		title: "Infrastructure & Development",
		href: "/services/infrastructure-development",
		description: "Learn about infrastructure projects and community development efforts."
	},
	{
		title: "Transport & Mobility",
		href: "/services/transport",
		description: "Get around the city with information on roads, public transport, and mobility services."
	}
];

export const cityMediaCenterLinks: NavLink[] = [
	{
		title: "News",
		href: LINK_NEWS,
		description: "Catch up on the latest city news"
	},
	{
		title: "Events",
		href: LINK_EVENTS,
		description: "Catch up on the latest city  upcoming events."
	},
	// {
	// 	title: "Publications",
	// 	href: LINK_PUBLICATIONS,
	// 	description: "View official reports from city activities."
	// },
	// {
	// 	title: "Gallery",
	// 	href: LINK_GALLERY,
	// 	description: "View official  photos, and videos from city activities."
	// },
	// {
	// 	title: "Social Media ",
	// 	href: LINK_SOCIAL_MEDIA,
	// 	description: "Engage with us through social media."
	// },
	// {
	// 	title: "Podcasts",
	// 	href: LINK_PODCASTS,
	// 	description: "Engage with us through featured audio stories."
	// }
];

export const cityGetInvolvedLinks: NavLink[] = [
	{
		title: "Contact & Feedback",
		href: "/info-feedback",
		description: "Reach out to us or share your thoughts and suggestions."
	},
	{
		title: "FAQs & Public Meetings",
		href: "/faqs-meetings",
		description: "Find common questions and learn about city council meetings."
	},
	{
		title: "Report an Issue",
		href: "/report",
		description: "Quickly report problems or concerns to city authorities."
	}
];

export const staffLinks: NavLink[] = [
	{
		title: "Organogram",
		href: LINK_HIERARCHY,
		description: "Hierarchy and organography of departments and teams."
	},
	{
		title: "Departments",
		href: LINK_DEPARTMENTS,
		description: "Meet the departments that run the city."
	},
	{
		title: "Technical Staffs",
		href: LINK_TECHNICAL_STAFFS,
		description: "Meet the technical staffs that run the city."
	}
];

export const cityOpportunityLinks: NavLink[] = [
	{
		title: "Careers & Internships",
		href: "/opportunities/careers-internships",
		description: "Search job openings and internship programs in the city council."
	},
	{
		title: "Grants & Scholarships",
		href: "/opportunities/grants-scholarships",
		description: "Apply for financial aid, grants, and academic scholarships."
	},
	{
		title: "Volunteering",
		href: "/opportunities/volunteering",
		description: "Give back by volunteering with various city initiatives."
	},
	{
		title: "Bid opportunities",
		href: "/opportunities/bids",
		description: "Browse open bidding opportunities in the city"
	}
];

export const citySportsAndReactionLinks: NavLink[] = [
	{
		title: "Events & Facilities",
		href: "/sports/events-facilities",
		description: "Participate in sports events and discover local facilities."
	},
	{
		title: "Programs & Clubs",
		href: "/sports/programs-clubs",
		description: "Join sports clubs and development programs across Lira."
	}
];

export const cityAboutLinks: NavLink[] = [
	{
		title: "History & Culture",
		href: "/about-lira#history-culture",
		description: "Uncover the stories, traditions, and cultural heritage of Lira."
	},
	{
		title: "Geography & Landmarks",
		href: "/about-lira#geography",
		description: "Explore the natural features and key landmarks across Lira."
	}
];

export const navLinks: NavLinkGroup[] = [
	{
		title: "Home",
		href: "/",
		description: "",
		icon: HomeIcon,
		children: []
	},
	{
		title: "About Lira",
		href: "/about-lira",
		description: `Discover Lira’s history, culture, and geography.`,
		icon: InfoIcon,
		children: []
		// children: cityAboutLinks,
	},
	// {
	// 	title: "City Services",
	// 	href: "/services",
	// 	description: "Access services offered by the Lira City Council.",
	// 	icon: RadioTowerIcon,
	// 	children: cityServicesLinks,
	// },
	{
		title: "The team",
		href: "/the-team",
		description: "Explore the focus areas and functions of the city council.",
		icon: BlocksIcon,
		children: staffLinks
	},
	{
		title: "Media Center",
		href: "/media",
		description: "Stay updated with the latest from the city council.",
		icon: FilmIcon,
		children: cityMediaCenterLinks
	},
	// {
	// 	title: "Opportunities",
	// 	href: "/opportunities",
	// 	description: "Explore opportunities to grow and serve.",
	// 	icon: BriefcaseBusinessIcon,
	// 	children: cityOpportunityLinks,
	// },
	// {
	// 	title: "Sports & Recreation",
	// 	href: "/sports",
	// 	description: "Engage in sports and recreational activities in Lira.",
	// 	icon: TrophyIcon,
	// 	children: citySportsAndReactionLinks,
	// },
	// {
	// 	title: "Get Involved",
	// 	href: "/contact-us",
	// 	description: "Contact, engage, and share feedback with the council.",
	// 	icon: MailPlusIcon,
	// 	children: cityGetInvolvedLinks
	// }
];
