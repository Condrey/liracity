"use client";

import { useSession } from "@/app/session-provider";
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
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { singleContentSchema, SingleContentSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpsertGeographicalLandmarksMutation } from "./mutation";

interface ButtonAddEditGeographicalLandmarksProps extends ButtonProps {
  geographicalLandmarks?: string;
}

export default function ButtonAddEditGeographicalLandmarks({
  geographicalLandmarks,
  className,
  ...props
}: ButtonAddEditGeographicalLandmarksProps) {
  const [open, setOpen] = useState(false);
  const { user } = useSession();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);

  return (
    <>
      {isAuthorized && (
        <Button
          onClick={() => setOpen(true)}
          title={
            geographicalLandmarks
              ? "Update geography and landmarks information"
              : "Create geography and landmarks information"
          }
          className={cn("", className)}
          {...props}
        />
      )}
      <FormAddEditGeographicalLandmarks
        open={open}
        setOpen={setOpen}
        geographicalLandmarks={geographicalLandmarks}
      />
    </>
  );
}

interface FormAddEditGeographicalLandmarksProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  geographicalLandmarks?: string;
}
export function FormAddEditGeographicalLandmarks({
  open,
  setOpen,
  geographicalLandmarks,
}: FormAddEditGeographicalLandmarksProps) {
  const { isPending, mutate } = useUpsertGeographicalLandmarksMutation();
  const form = useForm<SingleContentSchema>({
    resolver: zodResolver(singleContentSchema),
    values: {
      singleContent: geographicalLandmarks || "",
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
          <SheetTitle>
            {geographicalLandmarks ? "Edit" : "Add"} geography and landmarks{" "}
          </SheetTitle>
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
                  <FormLabel required>Geography and landmarks </FormLabel>
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
                {geographicalLandmarks ? "Update" : "Create"}
              </LoadingButton>
            </FormFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
