import { cn } from "@/lib/utils";

interface PageTitleProps {
	heading: string;
	className?: string;
	children?: React.ReactNode;
}
export function PageTitle({ heading, children, className }: PageTitleProps) {
	return (
		<div className={cn("flex gap-1", className)}>
			{children}
			<h1
				className={cn(
					"mb-1.5 text-2xl leading-tight font-black tracking-tight uppercase md:leading-normal md:font-bold md:tracking-tighter md:capitalize"
				)}
			>
				{heading}
			</h1>
		</div>
	);
}

interface PageDescriptionProps {
	paragraph: string;
	className?: string;
}
export function PageDescription({ paragraph, className }: PageDescriptionProps) {
	return <p className={cn("w-full max-w-3xl text-justify tracking-wide hyphens-auto", className)}>{paragraph}</p>;
}

interface TypographyH1Props {
	title: string;
	className?: string;
}
export function TypographyH1({ title, className }: TypographyH1Props) {
	return (
		<h1 className={cn("scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance", className)}>
			{title}
		</h1>
	);
}

interface TypographyH2Props {
	title: string;
	className?: string;
}
export function TypographyH2({ title, className }: TypographyH2Props) {
	return (
		<h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
			{title}
		</h2>
	);
}

interface TypographyH3Props {
	title: string;
	className?: string;
}
export function TypographyH3({ title, className }: TypographyH3Props) {
	return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{title}</h3>;
}

interface TypographyH4Props {
	title: string;
	className?: string;
}
export function TypographyH4({ title, className }: TypographyH4Props) {
	return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{title}</h4>;
}

interface TypographyPProps {
	paragraph: string;
	className?: string;
}
export function TypographyP({ paragraph, className }: TypographyPProps) {
	return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{paragraph}</p>;
}
