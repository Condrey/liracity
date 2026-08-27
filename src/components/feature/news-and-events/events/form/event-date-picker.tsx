"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EventSchema } from "@/lib/validation";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export function EventDatePicker({ form }: { form: UseFormReturn<EventSchema> }) {
	const watchedStartDate = form.watch("startDate");
	const watchedEndDate = form.watch("endDate");
	const [openFrom, setOpenFrom] = useState(false);
	const [openTo, setOpenTo] = useState(false);

	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			{/* Start Date */}
			<FormField
				control={form.control}
				name="startDate"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<div className="flex gap-4">
								{/* Date */}
								<div className="flex flex-1 flex-col gap-2">
									<FormLabel htmlFor="date-from" className="px-1">
										Start date
									</FormLabel>
									<Popover open={openFrom} onOpenChange={setOpenFrom}>
										<PopoverTrigger asChild>
											<Button variant="outline" id="date-from" className="h-9 w-full justify-between font-normal">
												{field.value
													? field.value.toLocaleDateString("en-US", {
															day: "2-digit",
															month: "short",
															year: "numeric"
														})
													: "Select date"}
												<ChevronDownIcon />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={(date) => {
													if (date) {
														// Preserve time when updating date
														const updated = new Date(field.value ?? date);
														updated.setFullYear(date.getFullYear());
														updated.setMonth(date.getMonth());
														updated.setDate(date.getDate());
														field.onChange(updated);

														// Optional: auto-set end date if empty (+2h)
														if (!watchedEndDate) {
															const autoEnd = new Date(updated);
															autoEnd.setHours(autoEnd.getHours() + 2);
															form.setValue("endDate", autoEnd);
														}
													}
													setOpenFrom(false);
												}}
											/>
										</PopoverContent>
									</Popover>
								</div>

								{/* Time */}
								<div className="flex flex-col gap-2">
									<FormLabel htmlFor="time-from" className="invisible px-1">
										From
									</FormLabel>
									<Input
										id="time-from"
										type="time"
										step="60"
										value={field.value ? field.value.toTimeString().substring(0, 5) : ""}
										onChange={(e) => {
											const [hours, minutes] = e.target.value.split(":").map(Number);
											const date = new Date(field.value ?? new Date());
											date.setHours(hours);
											date.setMinutes(minutes);
											date.setSeconds(0);
											field.onChange(date);
										}}
										className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden"
									/>
								</div>
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			{/* End Date */}
			<FormField
				control={form.control}
				name="endDate"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<div className="flex gap-4">
								{/* Date */}
								<div className="flex flex-1 flex-col gap-2">
									<FormLabel htmlFor="date-to" className="px-1">
										End date
									</FormLabel>
									<Popover open={openTo} onOpenChange={setOpenTo}>
										<PopoverTrigger asChild>
											<Button variant="outline" id="date-to" className="h-9 w-full justify-between font-normal">
												{field.value
													? field.value.toLocaleDateString("en-US", {
															day: "2-digit",
															month: "short",
															year: "numeric"
														})
													: "Select date"}
												<ChevronDownIcon />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value!}
												onSelect={(date) => {
													if (date) {
														const updated = new Date(field.value ?? date);
														updated.setFullYear(date.getFullYear());
														updated.setMonth(date.getMonth());
														updated.setDate(date.getDate());
														field.onChange(updated);
													}
													setOpenTo(false);
												}}
												disabled={(date) => date < (watchedStartDate ?? new Date())}
											/>
										</PopoverContent>
									</Popover>
								</div>

								{/* Time */}
								<div className="flex flex-col gap-2">
									<Label htmlFor="time-to" className="invisible px-1">
										To
									</Label>
									<Input
										id="time-to"
										type="time"
										step="60"
										value={field.value ? field.value.toTimeString().substring(0, 5) : ""}
										onChange={(e) => {
											const [hours, minutes] = e.target.value.split(":").map(Number);
											const date = new Date(field.value ?? new Date());
											date.setHours(hours);
											date.setMinutes(minutes);
											date.setSeconds(0);
											field.onChange(date);
										}}
										className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden"
									/>
								</div>
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
}
