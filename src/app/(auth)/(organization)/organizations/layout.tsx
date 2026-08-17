import { Navbar } from "@/app/(home)/navbar";
import { SUPER_ADMIN_USER } from "@/lib/constants";
import { validateRequest } from "@/lib/get-session";
import { forbidden } from "next/navigation";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	const { user } = await validateRequest();
	if (user?.role !== SUPER_ADMIN_USER) forbidden();
	return (
		<div className="">
			<Navbar />
			<main className="space-y-6 p-4">{children}</main>
		</div>
	);
}
