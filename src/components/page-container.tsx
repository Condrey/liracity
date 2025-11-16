import Footer from "@/components/user/footer";
import { cn } from "@/lib/utils";

interface PageContainerProps {
	showFooter?: boolean;
	className?: string;
	children: React.ReactNode;
}
export default function PageContainer({ showFooter = true, className, children }: PageContainerProps) {
	return (
		<div className="h-auto w-full space-y-12 pt-6  ">
			<div
				className={cn(
					"md:min-h-[75vh] min-h-[84vh] h-full gap-12 w-full mx-auto px-3",
					showFooter && "max-w-9xl",
					className
				)}
			>
				{children}
			</div>
			{showFooter && <Footer />}
		</div>
	);
}
