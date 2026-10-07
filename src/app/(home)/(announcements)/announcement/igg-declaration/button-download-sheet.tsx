"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import LoadingButton from "@/components/ui/loading-button";
import kyInstance from "@/lib/ky";
import { useTransition } from "react";

export default function ButtonDownloadIgDeclarationSheetSheet({ ...props }: ButtonProps) {
	const [isPending, startDownloadTransition] = useTransition();
	const now = new Date();
	const fullYear = now.getFullYear();

	function downloadXLSXTemplate() {
		startDownloadTransition(async () => {
			await kyInstance
				.post("/api/sheet/ig-declaration-leaders", {
					body: JSON.stringify({ department: "" })
				})
				.then(async (response) => {
					const blob = response.blob();
					const url = window.URL.createObjectURL(await blob);
					const a = document.createElement("a");
					a.href = url;
					a.download = `Lira_City_Council_Bi-annual_IG-Declaration_Registration_${fullYear}.xlsx`;
					document.body.appendChild(a);
					a.click();
					a.remove();
					window.URL.revokeObjectURL(url);
				});
		});
	}
	return <LoadingButton loading={isPending} {...props} onClick={downloadXLSXTemplate} />;
}
