"use client";

import ErrorContainer from "@/components/query-containers/error-container";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import LoadingButton from "@/components/ui/loading-button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { EventCategorySchema, EventSchema } from "@/lib/validation";
import { useQuery } from "@tanstack/react-query";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { getAllEventCategories } from "./action";
import { useUpsertEventCategoryMutation } from "./mutation";

export default function eventCategory({ form }: { form: UseFormReturn<EventSchema> }) {
	const [commandText, setCommandText] = useState("");
	const { isPending, mutate } = useUpsertEventCategoryMutation();
	const query = useQuery({
		queryKey: ["event-categories"],
		queryFn: getAllEventCategories
	});
	const { data, status } = query;
	if (status === "error") return <ErrorContainer errorMessage="Failed to get categories" query={query} />;
	if (status === "pending")
		return (
			<div className="space-y-3 flex-1">
				<Skeleton className="w-2/3 h-5" />
				<Skeleton className="w-full h-9" />
			</div>
		);
	return (
		<FormField
			control={form.control}
			name="categoryId"
			render={({ field }) => (
				<FormItem className="flex flex-1 flex-col">
					<FormLabel>Category</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									type="button"
									role="combobox"
									className={cn("h-9 justify-between", !field.value && "text-muted-foreground")}
								>
									{field.value ? data.find((category) => category.id === field.value)?.name : "Select category"}
									<ChevronsUpDownIcon className="opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput
									placeholder="Search category..."
									className="h-9"
									value={commandText}
									onValueChange={setCommandText}
								/>
								<CommandList>
									<CommandEmpty>
										{!commandText ? (
											"No category found."
										) : (
											<LoadingButton
												loading={isPending}
												variant={"default"}
												type="button"
												onClick={() =>
													mutate({ name: commandText, id: Date.now().toString() } as EventCategorySchema, {
														onSuccess(data, variables, context) {
															form.setValue("categoryId", data.id);
															setCommandText(data.name);
														}
													})
												}
												className="w-full max-w-fit mx-auto"
											>
												Add <q className="ms-1.5">{commandText}</q>
											</LoadingButton>
										)}
									</CommandEmpty>
									<CommandGroup>
										{data.map((category) => (
											<CommandItem
												value={category.name}
												key={category.id}
												onSelect={() => {
													form.setValue("categoryId", category.id);
												}}
											>
												{category.name}
												<CheckIcon
													className={cn("ml-auto", category.id === field.value ? "opacity-100" : "opacity-0")}
												/>
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>

					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
