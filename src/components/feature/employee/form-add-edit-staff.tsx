"use client";

import { NumberInput } from "@/components/number-input/number-input";
import ResponsiveDrawer from "@/components/responsive-drawer";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Form, FormControl, FormField, FormFooter, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EmployeeData, OrganizationData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { employeeSchema, EmployeeSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, ChevronsUpDown, ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { upsertStaffEmployeeMutation } from "./mutation";

interface FormAddEditStaffProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	departments: OrganizationData[];
	employee?: EmployeeData;
}

export default function FormAddEditStaff({ open, setOpen, departments, employee }: FormAddEditStaffProps) {
	const currentYear = new Date().getFullYear();
	const form = useForm<EmployeeSchema>({
		resolver: zodResolver(employeeSchema),
		defaultValues: {
			userId: employee?.userId || uuidv4(),
			ippsNumber: Number(employee?.ippsNumber!),
			name: employee?.user.name || "",
			organizationId: employee?.id || "",
			employeeId: employee?.id || "",
			assumedOffice: employee?.assumedOffice || currentYear,
			position: employee?.positionId || ""
		}
	});
	const [departmentId, setDepartmentId] = useState("");
	const sectors = departments.flatMap((d) => d.teams).filter((s) => s.id === departmentId);

	const { isPending, mutate } = upsertStaffEmployeeMutation();
	function submitInfo(input: EmployeeSchema) {
		mutate(input, { onSuccess: () => setOpen(false) });
	}

	return (
		<ResponsiveDrawer
			open={open}
			setOpen={setOpen}
			title={`${employee ? "Update" : "Create new"} employee information`}
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(submitInfo)} className="space-y-4">
					<FormItem>
						<FormLabel>Department</FormLabel>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									className={cn("w-[200px] justify-between", !departmentId && "text-muted-foreground")}
								>
									{departmentId
										? departments.find((department) => department.id === departmentId)?.name
										: "Select department"}
									<ChevronsUpDownIcon className="opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-[200px] p-0">
								<Command>
									<CommandInput placeholder="Search department..." className="h-9" />
									<CommandList>
										<CommandEmpty>No department found</CommandEmpty>
										<CommandGroup>
											{departments.map((department) => (
												<CommandItem
													value={department.id}
													key={department.id}
													onSelect={() => {
														setDepartmentId(department.id);
													}}
												>
													{department.name}
													<CheckIcon
														className={cn("ml-auto", department.id === departmentId ? "opacity-100" : "opacity-0")}
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
					<FormField
						control={form.control}
						name="organizationId"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Section</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												role="combobox"
												className={cn("w-[200px] justify-between", !field.value && "text-muted-foreground")}
											>
												{field.value ? sectors.find((sector) => sector.id === field.value)?.name : "Select sector"}{" "}
												<ChevronsUpDown className="opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-[200px] p-0">
										<Command>
											<CommandInput placeholder="Search sector" className="h-9" />
										</Command>
									</PopoverContent>
								</Popover>
							</FormItem>
						)}
					/>
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Staff full name</FormLabel>
								<FormControl>
									<Input placeholder="enter staff full name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="ippsNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>IPPS number</FormLabel>
								<FormControl>
									<NumberInput placeholder="enter staff IPPS number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="position"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Staff post</FormLabel>
								<FormControl>
									<Input placeholder="e.g., Information Technology Officer" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="assumedOffice"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Assumed office</FormLabel>
								<FormControl>
									<NumberInput placeholder="year of employment" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormFooter>
						<LoadingButton loading={isPending}>{!employee ? "Create employee" : "Update employee"}</LoadingButton>
					</FormFooter>
				</form>
			</Form>
		</ResponsiveDrawer>
	);
}
