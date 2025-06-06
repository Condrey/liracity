"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";
import { DepartmentalSectorData, DepartmentData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useState } from "react";
import { useDeleteDepartmentalSectorMutation } from "./mutation";
import { departmentSchema } from "@/lib/validation";

interface ButtonDeleteDepartmentalSectorProps extends ButtonProps {
  departmentalSector: DepartmentalSectorData;
}

export default function ButtonDeleteDepartmentalSector({
  departmentalSector,
  variant,
  ...props
}: ButtonDeleteDepartmentalSectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant={variant || "destructive"}
        {...props}
      />
      <DeleteDepartmentalSectorDialog
        open={open}
        setOpen={setOpen}
        departmentalSector={departmentalSector}
      />
    </>
  );
}

interface DeleteDepartmentalSectorDialogProps {
  departmentalSector: DepartmentalSectorData;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export function DeleteDepartmentalSectorDialog({
  departmentalSector,
  open,
  setOpen,
}: DeleteDepartmentalSectorDialogProps) {
  const { mutate, isPending } = useDeleteDepartmentalSectorMutation();
  function handleDelete() {
    mutate(departmentalSector.id, { onSuccess: () => setOpen(false) });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-destructive ">
            <AlertTriangleIcon
              className="inline mr-2 size-10 fill-destructive text-destructive-foreground  "
              strokeWidth={0.8}
            />
            <span className="uppercase">
              Delete {departmentalSector.name} sector
            </span>
          </DialogTitle>
          <DialogDescription>
            Dangerous! Please note that this action is irreversible
          </DialogDescription>
        </DialogHeader>
        <p>
          This will delete <strong>{departmentalSector.name}</strong> sector
          from the <strong>{departmentalSector.departMent?.name}</strong>{" "}
          department and all its <strong>officers</strong> from the database.
          Continue with caution.
        </p>
        <DialogFooter>
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <LoadingButton
            loading={isPending}
            variant={"destructive"}
            onClick={handleDelete}
          >
            Continue
          </LoadingButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
