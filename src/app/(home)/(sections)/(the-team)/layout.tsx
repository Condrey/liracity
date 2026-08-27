import PageContainer from "@/components/page-container";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <PageContainer className="pt-0">{children}</PageContainer>;
}
