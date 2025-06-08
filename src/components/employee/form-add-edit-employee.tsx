"use client";

import { EmployeeData } from "@/lib/types";
import ResponsiveDrawer from "../responsive-drawer";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import LoadingButton from "../ui/loading-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema, EmployeeSchema } from "@/lib/validation";
import { Input } from "../ui/input";
import { NumberInput } from "../number-input/number-input";
import { upsertStaffEmployeeMutation } from "./mutation";
import { v4 as uuidv4 } from 'uuid';

interface FormAddEditEmployeeProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  departmentalSectorId: string;
  employee?: EmployeeData;
}

export default function FormAddEditEmployee({
  open,
  setOpen,
  departmentalSectorId,
  employee,
}: FormAddEditEmployeeProps) {
  const currentYear = new Date().getFullYear();
  const form = useForm<EmployeeSchema>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      userId: employee?.userId || uuidv4(),
      ippsNumber: Number(employee?.ippsNumber!),
      name: employee?.user.name || "",
      departmentalSectorId,
      employeeId: employee?.id || "",
      assumedOffice: employee?.assumedOffice || currentYear,
      position: employee?.position || "",
    },
  });
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
                  <NumberInput
                    placeholder="enter staff IPPS number"
                    {...field}
                  />
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
                  <Input
                    placeholder="e.g., Information Technology Officer"
                    {...field}
                  />
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
            <LoadingButton loading={isPending}>
              {!employee ? "Create employee" : "Update employee"}
            </LoadingButton>
          </FormFooter>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
