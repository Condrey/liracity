import { clsx, type ClassValue } from "clsx";
import {
	differenceInCalendarYears,
	differenceInDays,
	differenceInHours,
	differenceInMonths,
	formatDate,
	formatDistanceToNowStrict,
	isAfter,
	isBefore,
	isSameDay,
	isValid,
	isWithinInterval
} from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const webName = "Lira City";
export const countryCurrency = "UGX";

export function getTitle(position: string): string {
	return position
		.split(" ")
		.map((word) => {
			if (word.toLowerCase() === "and") return "";
			return word.charAt(0).toUpperCase();
		})
		.join("");
}

export const siteConfig = {
	name: `Lira City – The Official Website of Lira City Council, Uganda`,
	url: process.env.NEXT_PUBLIC_BASE_URL,
	logo: "/logo.png",
	defaultCoverImage: "/web-app-manifest-512x512.png",
	description: `Welcome to Lira City, one of Uganda’s fastest-growing urban centers and a hub of commerce, education, and culture in the Northern Region. Discover city services, investment opportunities, development projects, and community resources from the official Lira City Council. Stay informed with the latest news, tenders, events, and updates shaping Lira’s transformation into a modern, sustainable city.`
};

export function formatCurrency(price: number | string = 0, currency?: string) {
	const numericPrice = Number(price);

	const formattedPrice = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency || countryCurrency,
		minimumFractionDigits: numericPrice % 1 === 0 ? 0 : 2,
		maximumFractionDigits: 2
	}).format(numericPrice);

	return formattedPrice;
}

export function formatNumber(n: number): string {
	return Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(n);
}

export function formatDateToLocal(date: Date) {
	const now = new Date();

	// Handle invalid date
	if (!isValid(date)) return "Invalid date";

	const hoursDiff = Math.abs(differenceInHours(now, date));
	const absHours = Math.abs(hoursDiff);

	const daysDiff = differenceInDays(now, date);
	const absDays = Math.abs(daysDiff);

	const monthsDiff = differenceInMonths(now, date);
	const absMonths = Math.abs(monthsDiff);

	// < 24 hours ➜ "in 5 hours" / "3 hours ago"
	if (absHours < 24) {
		return formatDistanceToNowStrict(date, { addSuffix: true });
	}
	// 1–30 days ➜ use "in X days" or "X days ago"
	if (absDays < 30) {
		return formatDistanceToNowStrict(date, { addSuffix: true });
	}
	// 1–11 months ➜ "in 2 months" / "3 months ago"
	if (absMonths < 12) {
		return formatDistanceToNowStrict(date, { addSuffix: true });
	}

	// Same year but far in the past/future
	if (differenceInCalendarYears(now, date) === 0) {
		return formatDate(date, "MMM d, hh:mm a");
	}
	// Different year ➜ include year
	return formatDate(date, "MMM d, yyyy, hh:mm a");
}

export function slugify(input: string | undefined): string {
	return input
		? input
				.toLowerCase() // Convert to lowercase
				.trim() // Remove leading and trailing whitespace
				.replace(/[^a-z0-9\s-]/g, "") // Remove special characters
				.replace(/\s+/g, "-") // Replace spaces with hyphens
				.replace(/-+/g, "-") // Remove multiple consecutive hyphens
		: "";
}

export function getEventStatusAndPeriod({ startDate, endDate }: { startDate: Date; endDate: Date | null }) {
	const now = new Date();
	let status = "",
		period = "";

	// .....................................................
	// Case 1: Event has no end Date
	// .....................................................
	if (!endDate) {
		// If upcoming
		if (isBefore(now, startDate)) {
			status = "UPCOMING EVENT";
			// but same day
			if (isSameDay(now, startDate)) {
				// but later
				period = `starts ${formatDateToLocal(startDate)}`;
			} else {
				period = `starting  ${formatDateToLocal(startDate)}`;
			}
		}
		//Exactly when it starts or after
		else if (isWithinInterval(now, { start: startDate, end: startDate })) {
			status = "ONGOING EVENT";
			period = "happening Now";
		}
		// If past
		else if (isAfter(now, startDate)) {
			status = "PAST EVENT";
			period = `happened ${formatDateToLocal(startDate)}	`;
		}
		return { status, period };
	}
	// .....................................................
	// Case 2: Event has end Date
	// .....................................................
	// If upcoming
	if (isBefore(now, startDate)) {
		status = "UPCOMING EVENT";
		// but same day
		if (isSameDay(now, startDate)) {
			period = `starts today at ${formatDateToLocal(startDate)}`;
		} else {
			period = `starting on ${formatDateToLocal(startDate)}`;
		}
	}
	// If ongoing (start<=now<=end)
	else if (isWithinInterval(now, { start: startDate, end: endDate })) {
		status = "ONGOING EVENT";
		period = `ends ${formatDateToLocal(endDate)}`;
	}

	// if Past
	else if (isAfter(now, endDate)) {
		status = "PAST EVENT";
		period = `ended ${formatDateToLocal(endDate)}`;
	}
	return { status, period };
}
