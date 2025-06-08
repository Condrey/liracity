"use client";

import { Form } from "@/components/ui/form";
import { EmployeeData } from "@/lib/types";
import { useForm } from "react-hook-form";

interface FormAddEditHeadOfDepartmentProps {
  departmentId: string;
  employee?: EmployeeData;
}

export default function FormAddEditHeadOfDepartment({
  departmentId,
  employee,
}: FormAddEditHeadOfDepartmentProps) {
  const form = useForm({});
  function submitForm() {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitForm)}
        className="space-y-4"
      ></form>
    </Form>
  );
}
