import PageContainer from "@/components/page-container";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<PageContainer showFooter={false} className="min-h-auto px-0 pt-0">
			{children}
		</PageContainer>
	);
}
