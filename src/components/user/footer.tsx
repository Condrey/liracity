"use client";

import { cityGetInvolvedLinks, cityMediaCenterLinks, cityServicesLinks, NavLink, whatWeDoLinks } from "@/lib/constants";
import { cn, webName } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "../theme-toggler";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export default function Footer({ className }: { className?: string }) {
	const currentYear = new Date().getFullYear();
	return (
		<footer
			className={cn(
				"flex w-full flex-col bg-black/80 text-background dark:bg-white/20 dark:text-foreground",
				className
			)}
		>
			{/* sections corner  */}
			<div className="mx-auto hidden w-full max-w-9xl grid-cols-2 gap-6 p-4 sm:grid-cols-3 md:grid md:grid-cols-4 xl:grid-cols-5">
				{/* logo section  */}
				<section className="flex flex-col items-center justify-center sm:row-span-2">
					<Image src={`/coat-of-arms.png`} height={150} width={150} alt="logo" />
				</section>
				{/* City services links  */}
				<LinkGroup title="City  Services" links={cityServicesLinks} />
				{/* City media center links  */}
				<LinkGroup title="City Media Center" links={cityMediaCenterLinks} />
				{/* What we do links  */}
				<LinkGroup title="The team" links={whatWeDoLinks} />
				{/* City get involved links  */}
				<LinkGroup title="Get Involved" links={cityGetInvolvedLinks} />
				{/* logo section  */}
			</div>
			{/* Copyright details and theme toggler  */}
			<div className="w-full bg-foreground/5 px-4 py-2 tracking-wider text-muted-foreground capitalize md:mt-8 md:bg-black dark:md:bg-background">
				<div className="mx-auto flex w-full max-w-9xl items-center justify-between">
					<p className='text-center text-xs md:text-sm md:after:content-["_-_The_Republic_Of_Uganda"]'>
						{`Copyright 2025${currentYear <= 2025 ? "" : `- ${currentYear}`},
            ${webName}`}
					</p>
					<ThemeToggler />
				</div>
			</div>
		</footer>
	);
}

function LinkGroup({ title, links }: { title: string; links: NavLink[] }) {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-lg font-bold tracking-tighter uppercase">{title}</h1>
			<div className="flex flex-col gap-3">
				{links.map((item) => (
					<LinkItem key={item.href} item={item} />
				))}
			</div>
		</section>
	);
}

function LinkItem({ item }: { item: NavLink }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Link
						href={item.href}
						passHref
						className="leading-tight tracking-wide visited:text-amber-500 hover:text-primary hover:underline"
					>
						{item.title}
					</Link>
				</TooltipTrigger>
				<TooltipContent className="max-w-[200px]">
					<p className="text-pretty">{item.description}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
