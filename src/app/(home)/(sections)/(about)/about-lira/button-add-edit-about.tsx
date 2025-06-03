"use client";

import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from "@/components/ui/loading-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { singleContentSchema, SingleContentSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpsertAboutMutation } from "./mutation";

interface ButtonAddEditAboutProps extends ButtonProps {
  about?: string;
}

export default function ButtonAddEditAbout({
  about,
  className,
  ...props
}: ButtonAddEditAboutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={about ? "Update about information" : "Create about information"}
        className={cn("", className)}
        {...props}
      />
      <FormAddEditAbout open={open} setOpen={setOpen} about={about} />
    </>
  );
}

interface FormAddEditAboutProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  about?: string;
}
export function FormAddEditAbout({
  open,
  setOpen,
  about,
}: FormAddEditAboutProps) {
  const { isPending, mutate } = useUpsertAboutMutation();
  const form = useForm<SingleContentSchema>({
    resolver: zodResolver(singleContentSchema),
    values: {
      singleContent: about || "",
    },
  });
  function handleSubmit(input: SingleContentSchema) {
    mutate(input, {
      onSuccess() {
        setOpen(false);
      },
    });
  }
  return (
    <Sheet open={open} onOpenChange={setOpen} modal>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>{about ? "Edit" : "Add"} about information</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4 px-3 max-w-4xl pb-6 w-full mx-auto"
          >
            <FormField
              control={form.control}
              name="singleContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>About information</FormLabel>
                  <FormControl>
                    <TipTapEditorWithHeader
                      includeHeader
                      initialContent={field.value}
                      onTextChanged={field.onChange}
                      className="max-h-fit"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormFooter>
              <LoadingButton loading={isPending}>
                {about ? "Update" : "Create"}
              </LoadingButton>
            </FormFooter>
          </form>
        </Form>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
        <p className="block">james</p>
      </SheetContent>
    </Sheet>
  );
}
