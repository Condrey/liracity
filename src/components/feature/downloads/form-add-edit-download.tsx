import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import AttachFileMedia from "@/components/uploadthing/attachment-file-media";
import { MediaData } from "@/lib/types";
import { mediaSchema, MediaSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpsertDownloadMutation } from "./mutation";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
	downloadToEdit?: MediaData;
}
export default function FormAddEditDownload({ open, setOpen, downloadToEdit }: Props) {
	const [mediaIds, setMediaIds] = useState<string[]>([]);
	const form = useForm<MediaSchema>({
		resolver: zodResolver(mediaSchema),
		values: {
			id: downloadToEdit?.id || "",
			name: downloadToEdit?.name || "",
			description: downloadToEdit?.description || ""
		}
	});

	const { isPending, mutate, error } = useUpsertDownloadMutation();
	function onSubmit(input: MediaSchema) {
		mutate(
			{ download: input, mediaId: mediaIds[0] },
			{
				onSuccess() {
					setOpen(false);
					form.reset();
				}
			}
		);
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent side="top" className="px-4">
				<SheetHeader>
					<SheetTitle>{downloadToEdit ? "Update Download" : "Add Download"}</SheetTitle>
				</SheetHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<span>{JSON.stringify(mediaIds, null, 2)}</span>
						<div className="flex flex-col gap-4 md:flex-row">
							<div className="space-y-4">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel required>Download name</FormLabel>
											<FormControl>
												<Input placeholder="enter name of the file" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Download description</FormLabel>
											<FormControl>
												<Textarea placeholder="optionally give a description of the download" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<AttachFileMedia setMediaIds={setMediaIds} title="Add PDF document" maxAttachments={1} />
						</div>
						<div role="alert" className="text-destructive">
							{error?.message}
						</div>
						<div className="flex w-full items-center justify-end gap-4">
							<LoadingButton
								type="button"
								loading={isPending}
								disabled={!form.formState.isDirty}
								onClick={() => form.handleSubmit(onSubmit)()}
							>
								{downloadToEdit ? "Update download" : "Add download"}
							</LoadingButton>
						</div>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
