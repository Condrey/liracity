import MediaPageHeader from "@/components/feature/media-page-header";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { PlusIcon } from "lucide-react";
import ButtonAddEditEvent from "../button-add-edit-event";

interface Props {
	title: string;
}
export default function PageHeader({ title }: Props) {
	return (
		<MediaPageHeader
			title={title}
			start={
				<ButtonAddEditEvent>
					<PlusIcon /> event
				</ButtonAddEditEvent>
			}
			end={<SidebarTrigger size="icon" variant={"destructive"} />}
			className=""
		/>
	);
}
