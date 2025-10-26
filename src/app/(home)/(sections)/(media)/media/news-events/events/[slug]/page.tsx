import { validateRequest } from "@/auth";
import { getEventBySlug, getRelatedArticlesByCategory } from "@/components/news-and-events/events/action";
import { EventStatus, Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import { siteConfig } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import { notFound, unauthorized } from "next/navigation";
import { EventClient } from "./event-client";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { slug } = await params;
	const decodedSlug = decodeURIComponent(slug);
	const event = await getEventBySlug(decodedSlug);
	if (!event)
		return {
			title: "Event not found",
			description: "This event may have been removed or is no longer available."
		};

	const previousImages = (await parent).openGraph?.images || [];
	const title = event.title;
	const description = (event.summary || event.description).replace(/<[^>]+>/g, "").slice(0, 160) + "...";
	const imageUrl = event.coverImage?.url || `${siteConfig.url}/${siteConfig.defaultCoverImage}`;
	const logoUrl = `${siteConfig.url}/${siteConfig.logo}`;
	const eventUrl = `${siteConfig.url}/media/news-and-events/events/${event.slug}`;

	// --- JSON-LD Structured Data ---
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Event",
		name: title,
		description,
		image: [imageUrl, ...previousImages],
		startDate: event.startDate.toISOString(),
		endDate: event.endDate?.toISOString(),
		eventStatus: "https://schema.org/EventScheduled",
		eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
		location: {
			"@type": "Place",
			name: event.location,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Lira City",
				addressCountry: "UG"
			}
		},
		organizer: {
			"@type": "Organization",
			name: siteConfig.name,
			url: siteConfig.url,
			logo: logoUrl
		},
		url: eventUrl
	};

	return {
		title,
		description,
		alternates: { canonical: eventUrl },
		openGraph: {
			title,
			description,
			url: eventUrl,
			type: "article",
			images: [
				{
					url: imageUrl,
					width: 1200,
					height: 630,
					alt: event.title
				},
				...previousImages
			]
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [imageUrl, ...previousImages]
		},
		other: {
			"script:type": "application/ld+json",
			"script:innerHTML": JSON.stringify(jsonLd)
		}
	};
}
export default async function Page({ params }: PageProps) {
	const { slug } = await params;
	const decodedSlug = decodeURIComponent(slug);
	const { user } = await validateRequest();
	const event = await getEventBySlug(decodedSlug);
	if (!event) return notFound();
	const relatedEvents = await getRelatedArticlesByCategory({
		categoryId: event.categoryId,
		currentArticleId: event.id
	});
	const isAStaff = !!user && myPrivileges[user.role].includes(Role.STAFF);
	const isAnEditor = !!user && myPrivileges[user.role].includes(Role.MODERATOR);
	if (event.status === EventStatus.DRAFT && !isAnEditor) return unauthorized();
	if (event.status === EventStatus.PRIVATE && !isAStaff) return unauthorized();

	return (
		<div className="">
			<EventClient initialData={event} slug={decodedSlug} relatedEvents={relatedEvents} />
		</div>
	);
}
