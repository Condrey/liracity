import { PageTitle } from "@/components/page-utils";
import { cn } from "@/lib/utils";
interface Props {
	title: string;
	start: React.ReactNode;
	end: React.ReactNode;
	className?: string;
}
export default function MediaPageHeader({ title, start, end, className }: Props) {
	return (
		<header className={cn("sticky top-0 z-20 flex h-fit flex-col gap-2 bg-background pe-4 pt-4", className)}>
			<div className="flex shrink-0 items-center gap-2">
				<PageTitle heading={title} className="mr-auto w-full max-w-fit px-3">
					{start}
				</PageTitle>
				{end}
			</div>
		</header>
	);
}
