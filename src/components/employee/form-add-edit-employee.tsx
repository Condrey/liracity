"use client";

import { EmployeeData } from "@/lib/types";
import ResponsiveDrawer from "../responsive-drawer";
import { useForm } from "react-hook-form";
import { Form, FormFooter } from "../ui/form";
import LoadingButton from "../ui/loading-button";

interface FormAddEditEmployeeProps {
    open:boolean;
    setOpen: (open:boolean)=>void;
  departmentalSectorId: string;
  employee?: EmployeeData;
}


export default function FormAddEditEmployee({open,setOpen,departmentalSectorId,employee}:FormAddEditEmployeeProps){
const form =useForm()
     function submitInfo(){}

    return <ResponsiveDrawer
    open={open}
    setOpen={setOpen}

   
    title={`${employee?'Update':'Create new'} employee information`}>
        <Form {...form}>
<form onSubmit={form.handleSubmit(submitInfo)} className="space-y-4">

    <FormFooter>
        <LoadingButton loading>
            {!employee?'Create employee':'Update employee'}
        </LoadingButton>
    </FormFooter>
</form>
        </Form>
    </ResponsiveDrawer>

}