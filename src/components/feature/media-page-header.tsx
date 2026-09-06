import { PageTitle } from "@/components/page-utils";
interface Props {
	title: string;
	start: React.ReactNode;
	end: React.ReactNode;
	className?: string;
}
export default function MediaPageHeader({ title, start, end, className }: Props) {
	return (
		<header className="sticky top-0 z-45 flex min-h-16 w-full flex-wrap items-center justify-between gap-2 border-b bg-background px-2">
			<PageTitle heading={title} className="mr-auto w-full max-w-fit px-3">
				{start}
			</PageTitle>
			{end}
		</header>
	);
}
