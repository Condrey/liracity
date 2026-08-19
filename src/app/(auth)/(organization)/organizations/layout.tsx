import { Role } from "@/generated/prisma/enums";
import { validateRequest } from "@/lib/get-session";
import { forbidden } from "next/navigation";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	const { user } = await validateRequest();
	if (user?.role !== Role.SUPER_ADMIN) forbidden();
	return (
		<div className="">
			<main className="space-y-6 p-4">{children}</main>
		</div>
	);
}
