import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OrganizationData } from "@/lib/types";
import { formatDate } from "date-fns";
import { Edit2Icon, HistoryIcon, TextCursorInputIcon } from "lucide-react";
import ButtonAddEditOrganization from "./button-add-edit-organization";

interface Props {
	organization: OrganizationData;
	className?: string;
}

export default function SlugOrganizationDetails({ organization, className }: Props) {
	const { name, slug, createdAt, logo, metadata } = organization;
	return (
		<Card className={className}>
			<CardHeader className="">
				<CardTitle>{name}</CardTitle>
				<CardDescription>
					<TextCursorInputIcon className="mr-1 inline size-4" />
					slug: <span className="text-card-foreground select-all">{slug}</span>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<span className="text-xs text-muted-foreground">
					<HistoryIcon className="mr-1 inline size-3.5" />
					{formatDate(createdAt, "PPPpp")}
				</span>

				<CardAction>
					<ButtonAddEditOrganization organization={organization} className="">
						<Edit2Icon /> Update
					</ButtonAddEditOrganization>
				</CardAction>
			</CardContent>
		</Card>
	);
}
