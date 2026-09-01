"use query";

import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ItemDescription, ItemTitle } from "@/components/ui/item";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { DepartmentalSectionSchema, PositionSchema } from "@/lib/validation";
import { ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import CommandItemUniversal, { ChosenUniversalCommandItem } from "../../command-item-universal";
import { useDepartmentalSectionsQuery } from "../departmentalSection/query";
import ButtonAddEditDepartmentalSection from "../departmentalSection/button-add-edit-departmental-section";

interface Props {
	form: UseFormReturn<PositionSchema>;
}
export default function FieldDepartmentalSection({ form }: Props) {
	const [open, setOpen] = useState(false);
	const query = useDepartmentalSectionsQuery();
	const { status, data: departmentalSections } = query;

	if (status === "error") return <ErrorContainer errorMessage="Err getting departmental Sections" query={query} />;
	if (status === "pending")
		return (
		  <div className="w-full  bg-accent animate-pulse space-y-2">
            <Skeleton className="h-4 bg-foreground/20 w-1/4" />
            <Skeleton className="h-9  bg-foreground/20 w-full" />
          </div>
		);

	return (
		<FormField
			control={form.control}
			name="departmentalSectionId"
			render={({ field }) => {
				const hasValue = !!field.value;
				const currentItem = departmentalSections.find((departmentalSection) => departmentalSection.id === field.value);
				return (
					<FormItem>
						<FormLabel required>Departmental section</FormLabel>
						<Popover open={open} onOpenChange={setOpen} modal={true}>
							<PopoverTrigger asChild>
								<FormControl>
									<Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
										{hasValue ? (
											<ChosenUniversalCommandItem
												title={currentItem?.sectionName}
												subTitle={currentItem?.stationType}
											/>
										) : (
											"Choose departmental section..."
										)}
										<ChevronsUpDownIcon className="opacity-50" />
									</Button>
								</FormControl>
							</PopoverTrigger>
							<PopoverContent className="w-full p-0">
								<Command>
									<CommandInput placeholder="Search section..." className="h-9" />
									<CommandList>
										<CommandEmpty className="flex max-w-sm flex-col items-center justify-center gap-2 p-3 text-center">
											<p className="inline-block">No result</p>
											<ButtonAddEditDepartmentalSection variant={"secondary"}>Add new Section</ButtonAddEditDepartmentalSection>
										</CommandEmpty>
										<CommandGroup>
											{departmentalSections.map(({ id,  sectionName, stationType }) => {
												const isChecked = field.value === id;
												return (
													<CommandItem
														key={id}
														value={sectionName}
														onSelect={() => {
															form.setValue("departmentalSectionId", id);
															setOpen(false);
														}}
													>
														<CommandItemUniversal
															isChecked={isChecked}
															primaryContent={<ItemTitle className="line-clamp-1">{sectionName}</ItemTitle>}
                              	secondaryContent=
														{
															<ItemDescription className="line-clamp-1 text-xs">
																			{stationType}
																		</ItemDescription>
														}
														/>
													
													</CommandItem>
												);
											})}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>

						<FormMessage />
					</FormItem>
				);
			}}
		/>
	);
}
