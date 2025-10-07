import { clsx, type ClassValue } from "clsx";
import { formatDate, formatDistanceToNowStrict } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const webName = "Lira City";
export const countryCurrency = "UGX";

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

export function formatDateToLocal(from: Date) {
	// const from = new Date(date)
	const currentDate = new Date();
	if (currentDate.getTime() - from.getTime() < 24 * 60 * 60 * 1000) {
		return formatDistanceToNowStrict(from, { addSuffix: true });
	} else {
		if (currentDate.getFullYear() === from.getFullYear()) {
			return formatDate(from, "MMM d");
		} else {
			return formatDate(from, "MMM d, yyyy");
		}
	}
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
