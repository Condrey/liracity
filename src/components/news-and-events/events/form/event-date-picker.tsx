"use client";

import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EventSchema } from "@/lib/validation";
import { UseFormReturn } from "react-hook-form";

export function EventDatePicker({ form }: { form: UseFormReturn<EventSchema> }) {
	const [openFrom, setOpenFrom] = React.useState(false);
	const [openTo, setOpenTo] = React.useState(false);
	const watchedStartDate = form.watch("startDate");
	const watchedEndDate = form.watch("endDate");
	// const [dateFrom, setDateFrom] = React.useState<Date | undefined>(
	//   new Date("2025-06-01")
	// )
	// const [dateTo, setDateTo] = React.useState<Date | undefined>(
	//   new Date("2025-06-03")
	// )

	return (
		<div className="flex w-full max-w-sm min-w-0 flex-col gap-4">
			{/* start date  */}
			<FormField
				control={form.control}
				name="startDate"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<div className="flex w-full  gap-4">
								<div className="flex flex-1 flex-col gap-2">
									<FormLabel htmlFor="date-from" className="px-1">
										Start time
									</FormLabel>
									<Popover open={openFrom} onOpenChange={setOpenFrom}>
										<PopoverTrigger asChild>
											<Button variant="outline" id="date-from" className="w-full h-9 justify-between font-normal">
												{watchedStartDate
													? watchedStartDate.toLocaleDateString("en-US", {
															day: "2-digit",
															month: "short",
															year: "numeric"
													  })
													: "Select date"}
												<ChevronDownIcon />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto overflow-hidden p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												captionLayout="dropdown"
												onSelect={(date) => {
													const theDate = date.to
													field.onChange(date);
													setOpenFrom(false);
												}}
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="flex flex-col gap-2">
									<FormLabel htmlFor="time-from" className="invisible px-1">
										From
									</FormLabel>
									<Input
										id="time-from"
										type="time"
										step="60"
										defaultValue={field.value ? field.value.toISOString().substring(11, 16) : ""}
										onChange={(e) => {
											const [hours, minutes] = e.target.value.split(":").map(Number);
											const date = new Date();
											date.setHours(hours);
											date.setMinutes(minutes);
											date.setSeconds(0);
											field.onChange(date);
										}}
										className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
									/>
								</div>
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			{/* end date  */}
			<FormField
				control={form.control}
				name="endDate"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<div className="flex gap-4">
								<div className="flex flex-1 flex-col gap-2">
									<FormLabel htmlFor="date-to" className="px-1">
										End time
									</FormLabel>
									<Popover open={openTo} onOpenChange={setOpenTo}>
										<PopoverTrigger asChild>
											<Button variant="outline" id="date-to" className="w-full h-9 justify-between font-normal">
												{watchedEndDate
													? watchedEndDate.toLocaleDateString("en-US", {
															day: "2-digit",
															month: "short",
															year: "numeric"
													  })
													: "Select date"}
												<ChevronDownIcon />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto overflow-hidden p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value!}
												captionLayout="dropdown"
												onSelect={(date) => {
													field.onChange(date);
													setOpenTo(false);
												}}
												disabled={watchedEndDate! && { before: watchedStartDate }}
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="flex flex-col gap-2">
									<Label htmlFor="time-to" className="invisible px-1">
										To
									</Label>
									<Input
										id="time-to"
										type="time"
										step="60"
										defaultValue={field.value ? field.value.toISOString().substring(11, 16) : ""}
										onChange={(e) => {
											const [hours, minutes] = e.target.value.split(":").map(Number);
											const date = new Date();
											date.setHours(hours);
											date.setMinutes(minutes);
											date.setSeconds(0);
											field.onChange(date);
										}}
										className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
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
