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
		<div className={cn("flex flex-col ", className)}>
			{/* sections corner  */}
			<div className="md:grid grid-cols-2 sm:grid-cols-3 gap-6 hidden p-4  max-w-9xl mx-auto  md:grid-cols-4 xl:grid-cols-5 w-full">
				{/* logo section  */}
				<section className="flex flex-col items-center  justify-center sm:row-span-2">
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
			<div className="md:bg-black bg-foreground/5 dark:md:bg-background text-muted-foreground tracking-wider capitalize w-full  px-4 py-2 md:mt-8">
				<div className="w-full flex justify-between items-center max-w-9xl mx-auto">
					<p className='text-center text-xs md:text-sm md:after:content-["_-_The_Republic_Of_Uganda"]'>
						{`Copyright 2025${currentYear <= 2025 ? "" : `- ${currentYear}`},
            ${webName}`}
					</p>
					<ThemeToggler />
				</div>
			</div>
		</div>
	);
}

function LinkGroup({ title, links }: { title: string; links: NavLink[] }) {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-lg font-bold uppercase tracking-tighter">{title}</h1>
			<div className="gap-3 flex flex-col">
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
						className="hover:underline leading-tight tracking-wide hover:text-primary visited:text-amber-500"
					>
						{item.title}
					</Link>
				</TooltipTrigger>
				<TooltipContent className="max-w-[200px] ">
					<p className="text-pretty">{item.description}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
