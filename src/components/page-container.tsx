import Footer from "@/components/user/footer";
import { cn } from "@/lib/utils";

interface PageContainerProps {
	showFooter?: boolean;
	className?: string;
	children: React.ReactNode;
}
export default function PageContainer({ showFooter = true, className, children }: PageContainerProps) {
	return (
		<div className="h-auto w-full space-y-12">
			<div
				className={cn(
					"mx-auto h-full min-h-[84vh] w-full space-y-6 px-3 pt-6 md:min-h-[75vh]",
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
