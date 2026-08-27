"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TableCell, TableRow } from "@/components/ui/table";
import { MemberSignUpSchema, MultipleMembersSignUpSchema } from "@/lib/validation";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";
import TableRowInputMember from "./table-row-input-member";

interface Props {
	form: UseFormReturn<MultipleMembersSignUpSchema>;
	member: MemberSignUpSchema;
	index: number;
}

export default function TableRowViewMember({ form, member, index }: Props) {
	const { email, name, organizationId, role, ippsNumber } = member;
	const { remove: removeEntry, update: updateEntry } = useFieldArray({ control: form.control, name: "members" });

	const [shouldEdit, setShouldEdit] = useState(false);

	return (
		<>
			{shouldEdit ? (
				<TableRowInputMember
					form={form}
					index={index}
					organizationId={organizationId}
					inputToEdit={member}
					isEditing={shouldEdit}
					onInputSubmitted={(input) => {
						updateEntry(index, input);
						setShouldEdit(false);
					}}
				/>
			) : (
				<TableRow className="*:border">
					<TableCell>{index + 1}</TableCell>
					<TableCell>{name}</TableCell>
					<TableCell>{email}</TableCell>
					<TableCell>{ippsNumber}</TableCell>
					<TableCell>{role}</TableCell>
					<TableCell className="">
						<ButtonGroup className="mx-auto w-full max-w-[150px] *:flex-1">
							<Button
								type="button"
								size={"xs"}
								variant={"destructive"}
								title={`Remove ${name} from the list`}
								onClick={() => removeEntry(index)}
							>
								<Trash2Icon />
								Remove
							</Button>
							<Button
								type="button"
								size={"xs"}
								variant={"secondary"}
								title={`Update entry for ${name} on the list`}
								onClick={() => setShouldEdit(true)}
							>
								<Edit2Icon />
								Update
							</Button>
						</ButtonGroup>
					</TableCell>
				</TableRow>
			)}
		</>
	);
}
