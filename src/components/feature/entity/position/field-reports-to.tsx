"use query";

import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ItemDescription, ItemTitle } from "@/components/ui/item";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { PositionSchema } from "@/lib/validation";
import { ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import CommandItemUniversal, { ChosenUniversalCommandItem } from "../../command-item-universal";
import ButtonAddEditPosition from "./button-add-edit-position";
import { usePositionsQuery } from "./query";

interface Props {
	form: UseFormReturn<PositionSchema>;
}
export default function FieldReportsTo({ form }: Props) {
	const [open, setOpen] = useState(false);
	const query = usePositionsQuery();
	const { status, data: positions } = query;

	if (status === "error") return <ErrorContainer errorMessage="Err getting positions" query={query} />;
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
			name="reportsToId"
			render={({ field }) => {
				const hasValue = !!field.value;
				const currentItem = positions.find((position) => position.id === field.value);
				return (
					<FormItem>
						<FormLabel >Reports To</FormLabel>
						<Popover open={open} onOpenChange={setOpen} modal={true}>
							<PopoverTrigger asChild>
								<FormControl>
									<Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
										{hasValue ? (
											<ChosenUniversalCommandItem
												title={currentItem?.jobTitle}
												subTitle={currentItem?.departmentalSection?.stationType}
											/>
										) : (
											"Choose position..."
										)}
										<ChevronsUpDownIcon className="opacity-50" />
									</Button>
								</FormControl>
							</PopoverTrigger>
							<PopoverContent className="w-full p-0">
								<Command>
									<CommandInput placeholder="Search member..." className="h-9" />
									<CommandList>
										<CommandEmpty className="flex max-w-sm flex-col items-center justify-center gap-2 p-3 text-center">
											<p className="inline-block">No result</p>
											<ButtonAddEditPosition variant={"secondary"}>Add new Position</ButtonAddEditPosition>
										</CommandEmpty>
										<CommandGroup>
											{positions.map(({ id, jobTitle, departmentalSection }) => {
												const isChecked = field.value === id;
												return (
													<CommandItem
														key={id}
														value={id}
														onSelect={() => {
															form.setValue("reportsToId", id);
															setOpen(false);
														}}
													>
														<CommandItemUniversal
															isChecked={isChecked}
															primaryContent={<ItemTitle className="line-clamp-1">{jobTitle}</ItemTitle>}
                              	secondaryContent=
														{
															<>
																{departmentalSection && (
																	<>
																		
																		<ItemTitle className="line-clamp-1 text-xs">
																			{departmentalSection.sectionName}
																		</ItemTitle>
																		<ItemDescription className="line-clamp-1 text-xs">
																			{departmentalSection.stationType}
																		</ItemDescription>
																	</>
																)}
															</>
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
