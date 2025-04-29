import {
  BlocksIcon,
  BriefcaseBusinessIcon,
  FilmIcon,
  InfoIcon,
  LucideIcon,
  MailPlusIcon,
  RadioTowerIcon,
  TrophyIcon,
} from "lucide-react";

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
    href: "/services/essential",
    description:
      "Access vital services like water, sanitation, waste, and emergency response.",
  },
  {
    title: "Community & Social Services",
    href: "/services/community-social",
    description:
      "Support for families, neighborhoods, housing, libraries, and cultural programs.",
  },
  {
    title: "Health & Education",
    href: "/services/health-education",
    description:
      "Find healthcare facilities and educational programs within the city.",
  },
  {
    title: "Infrastructure & Development",
    href: "/services/infrastructure-development",
    description:
      "Learn about infrastructure projects and community development efforts.",
  },
  {
    title: "Transport & Mobility",
    href: "/services/transport",
    description:
      "Get around the city with information on roads, public transport, and mobility services.",
  },
];

export const cityMediaCenterLinks: NavLink[] = [
  {
    title: "News & Events",
    href: "/media/news-events",
    description: "Catch up on the latest city news and upcoming events.",
  },
  {
    title: "Gallery & Publications",
    href: "/media/gallery-publications",
    description:
      "View official reports, photos, and videos from city activities.",
  },
  {
    title: "Social Media & Podcasts",
    href: "/media/social-media-podcasts",
    description:
      "Engage with us through social media and featured audio stories.",
  },
];

export const cityGetInvolvedLinks: NavLink[] = [
  {
    title: "Contact & Feedback",
    href: "/contact-us/info-feedback",
    description: "Reach out to us or share your thoughts and suggestions.",
  },
  {
    title: "FAQs & Public Meetings",
    href: "/faqs-meetings",
    description: "Find common questions and learn about city council meetings.",
  },
  {
    title: "Report an Issue",
    href: "/report",
    description: "Quickly report problems or concerns to city authorities.",
  },
];

export const whatWeDoLinks: NavLink[] = [
  {
    title: "Hierarchy",
    href: "/hierarchy",
    description: "Hierarchy and organography of departments and teams.",
  },
  {
    title: "Departments",
    href: "/departments",
    description: "Meet the teams and departments that run the city.",
  },
];

export const cityOpportunityLinks:NavLink[]=[
  {
    title: "Careers & Internships",
    href: "/opportunities/careers-internships",
    description:
      "Search job openings and internship programs in the city council.",
  },
  {
    title: "Grants & Scholarships",
    href: "/opportunities/grants-scholarships",
    description:
      "Apply for financial aid, grants, and academic scholarships.",
  },
  {
    title: "Volunteering",
    href: "/opportunities/volunteering",
    description: "Give back by volunteering with various city initiatives.",
  }, {
    title: "Bid opportunities",
    href: "/opportunities/bids",
    description: "Browse open bidding opportunities in the city",
  },
]

export const citySportsAndReactionLinks:NavLink[]=[
  {
    title: "Events & Facilities",
    href: "/sports/events-facilities",
    description:
      "Participate in sports events and discover local facilities.",
  },
  {
    title: "Programs & Clubs",
    href: "/sports/programs-clubs",
    description: "Join sports clubs and development programs across Lira.",
  },
]

export const cityAboutLinks:NavLink[] = [
  {
    title: "History & Culture",
    href: "/about-lira#history-culture",
    description:
      "Uncover the stories, traditions, and cultural heritage of Lira.",
  },
  {
    title: "Geography & Landmarks",
    href: "/about-lira#geography",
    description:
      "Explore the natural features and key landmarks across Lira.",
  },
]

export const navLinks: NavLinkGroup[] = [
  {
    title: "Home",
    href: "/",
    description: "",
    children: [],
  },
  {
    title: "About Lira",
    href: "/about-lira",
    description: `Discover Lira’s history, culture, and geography.`,
    icon: InfoIcon,
    children: cityAboutLinks,
  },
  {
    title: "City Services",
    href: "/services",
    description: "Access services offered by the Lira City Council.",
    icon: RadioTowerIcon,
    children: cityServicesLinks,
  },
  {
    title: "The team",
    href: "/the-team",
    description: "Explore the focus areas and functions of the city council.",
    icon: BlocksIcon,
    children: whatWeDoLinks,
  },
  {
    title: "Media Center",
    href: "/media",
    description: "Stay updated with the latest from the city council.",
    icon: FilmIcon,
    children: cityMediaCenterLinks,
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    description: "Explore opportunities to grow and serve.",
    icon: BriefcaseBusinessIcon,
    children: cityOpportunityLinks,
  },
  {
    title: "Sports & Recreation",
    href: "/sports",
    description: "Engage in sports and recreational activities in Lira.",
    icon: TrophyIcon,
    children: citySportsAndReactionLinks,
  },
  {
    title: "Get Involved",
    href: "/contact-us",
    description: "Contact, engage, and share feedback with the council.",
    icon: MailPlusIcon,
    children: cityGetInvolvedLinks,
  },
];
