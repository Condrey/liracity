import PageContainer from "@/components/page-container";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageContainer showFooter={false} className="px-0 min-h-auto pt-0">
			{children}
		</PageContainer>
	);
}
