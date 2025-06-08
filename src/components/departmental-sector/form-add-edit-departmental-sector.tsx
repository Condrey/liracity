import { NumberInput } from "@/components/number-input/number-input";
import ResponsiveDrawer from "@/components/responsive-drawer";
import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { DepartmentalSectorData } from "@/lib/types";
import {
  departmentalSectorSchema,
  DepartmentalSectorSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertDepartmentalSectorMutation } from "./mutation";

interface FormAddEditDepartmentalSectorProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  departmentalSectorToEdit?: DepartmentalSectorData;
  departMentId: string;
}

export default function FormAddEditDepartmentalSector({
  open,
  setOpen,
  departmentalSectorToEdit,
  departMentId,
}: FormAddEditDepartmentalSectorProps) {
  const form = useForm<DepartmentalSectorSchema>({
    resolver: zodResolver(departmentalSectorSchema),
    defaultValues: {
      id: departmentalSectorToEdit?.id || "",
      name: departmentalSectorToEdit?.name || "",
      description: departmentalSectorToEdit?.description || "",
      hierarchy: departmentalSectorToEdit?.hierarchy!,
      departMentId:
        departmentalSectorToEdit?.departMentId || departMentId || "",
    },
  });
  const watchedName = form.watch("name");

  const { isPending, mutate } = useUpsertDepartmentalSectorMutation();
  function onSubmit(input: DepartmentalSectorSchema) {
    mutate(input, {
      onSuccess() {
        setOpen(false);
      },
    });
  }

  return (
    <ResponsiveDrawer
      open={open}
      setOpen={setOpen}
      title={
        departmentalSectorToEdit
          ? "Update departmental sector"
          : "Add departmental sector"
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Departmental sector</FormLabel>
                <FormControl>
                  <Input placeholder="e.g Information Technology" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="hierarchy"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Hierarchy/ rank</FormLabel>
                <FormControl>
                  <NumberInput
                    placeholder="e.g 1 for highest rank"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Refer to the organography diagram for the hierarchy
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brief description</FormLabel>
                <FormControl>
                  <TipTapEditorWithHeader
                    onTextChanged={field.onChange}
                    placeholder={`Brief description about ${
                      watchedName || "this"
                    } departmental sector`}
                    initialContent={field.value}
                    includeHeader={false}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-end items-center gap-4">
            <LoadingButton loading={isPending}>
              {departmentalSectorToEdit ? "Update" : "Submit"}
            </LoadingButton>
          </div>
        </form>
      </Form>
    </ResponsiveDrawer>
  );
}
