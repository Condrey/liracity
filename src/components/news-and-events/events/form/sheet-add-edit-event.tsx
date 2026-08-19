import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormFooter, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import LoadingButton from "@/components/ui/loading-button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
import { ButtonAddSingleAttachment } from "@/components/uploadthing/button-add-attachment";
import { EventStatus } from "@/generated/prisma/enums";
import { eventStatuses } from "@/lib/enums";
import { EventData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { eventSchema, EventSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatDate } from "date-fns";
import { CalendarRangeIcon, MapPinIcon, SaveIcon } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import EventsCategory from "./event-category";
import { EventDatePicker } from "./event-date-picker";
import { useUpsertEventMutation } from "./mutation";
import OtherMedia from "./other-media";
import { useCoverImageUpload } from "./use-media-upload";

interface SheetAddEditEventsProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	event?: EventData;
	altId: string;
	userId: string | undefined | null;
}

export default function SheetAddEditEvents({ event, open, setOpen, altId, userId }: SheetAddEditEventsProps) {
	const prevMediaIds = event?.media.map((m) => m.id);
	const [mediaIds, setMediaIds] = useState<string[]>(prevMediaIds || []);
	const form = useForm<EventSchema>({
		resolver: zodResolver(eventSchema),
		defaultValues: {
			id: event?.id || altId,
			title: event?.title || "",
			categoryId: event?.categoryId || "",
			status: event?.status || "DRAFT",
			authorId: event?.authorId || userId || "",
			description: event?.description || "",
			coverImageId: event?.coverImageId,
			location: event?.location || "",
			slug: event?.slug,
			summary: event?.summary,
			startDate: event?.startDate || new Date(),
			endDate: event?.endDate
		}
	});
	const watchedTitle = form.watch("title");
	const watchedStatus = form.watch("status") || EventStatus.DRAFT;
	const watchedId = form.watch("id")!;
	const watchedStartDate = form.watch("startDate")!;
	const watchedEndDate = form.watch("endDate")!;
	const { eventStatus } = eventStatuses[watchedStatus];
	const sheetTitle = event ? "Update event" : "Add event";

	const {
		startUpload,
		attachment,
		isUploading,
		uploadProgress,
		removeAttachment,
		reset: resetMediaUploads
	} = useCoverImageUpload();
	const coverImageUrl = !!event ? event?.coverImage?.url : !attachment ? "" : URL.createObjectURL(attachment.file);

	const { isPending, mutate } = useUpsertEventMutation();
	function onSubmit(input: EventSchema) {
		const newFields = { ...input, coverImageId: attachment ? attachment.mediaId : event?.coverImageId };
		mutate(
			{ formData: newFields, mediaIds },
			{
				onSuccess: () => setOpen(false)
			}
		);
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<SheetContent side="bottom" className="h-svh overflow-y-auto bg-muted">
						<div className="relative mx-auto flex min-h-[100px] w-full max-w-7xl flex-col justify-center">
							{coverImageUrl && (
								<div className="min-h-[180px] w-full mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% brightness-50">
									<Image src={coverImageUrl} alt="Cover image" fill className="w-full rounded-xl object-cover" />
								</div>
							)}
							<div
								className={cn(
									"absolute h-fit w-full",
									coverImageUrl && "my-auto max-h-fit bg-background/20 p-3 backdrop-blur-2xl"
								)}
							>
								<SheetHeader className="max-h-none w-full">
									<div className="flex flex-wrap items-end justify-between gap-3">
										<div className="flex flex-wrap">
											{!!watchedTitle && <SheetDescription>{sheetTitle}</SheetDescription>}
											{!!watchedTitle ? (
												<CardTitle className="line-clamp-3 tracking-tighter text-wrap break-all md:line-clamp-1">
													{watchedTitle}
												</CardTitle>
											) : (
												<SheetTitle>{sheetTitle}</SheetTitle>
											)}
											<div>
												<div className="flex flex-wrap gap-2">
													<Badge variant={"warning"}>{eventStatus}</Badge>
													{!!watchedStartDate && (
														<Badge variant={"secondary"} className="flex gap-0.5">
															<span className="text-sm text-muted-foreground italic">
																<CalendarRangeIcon className="mr-1 hidden size-4 md:inline-flex" />
																Start:
															</span>
															{formatDate(watchedStartDate, "PPp")}
														</Badge>
													)}
													{!!watchedEndDate && (
														<Badge variant={"secondary"} className="flex gap-0.5">
															<span className="text-sm text-muted-foreground italic">
																<CalendarRangeIcon className="mr-1 hidden size-4 md:inline-flex" />
																End:
															</span>
															{formatDate(watchedEndDate, "PPp")}
														</Badge>
													)}
												</div>
											</div>
										</div>
										<LoadingButton
											loading={isPending}
											type="submit"
											size={"lg"}
											onClick={() => form.handleSubmit(onSubmit)()}
											className="ml-auto hidden md:inline-flex"
										>
											<SaveIcon /> Submit
										</LoadingButton>
									</div>
								</SheetHeader>
							</div>
						</div>
						{/* <pre>
							{JSON.stringify(
								{ formData: { ...form.watch(), coverImageId: !!attachment ? attachment.mediaId : "" }, mediaIds },
								null,
								2
							)}
							
						</pre> */}
						{/* <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre> */}
						<div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-3 md:flex-row">
							{/* main content  */}
							<div className="space-y-4 md:w-2/3 md:*:space-y-4 md:*:border md:*:bg-card md:*:p-3">
								<div className="space-y-4">
									<FormField
										control={form.control}
										name="title"
										render={({ field }) => (
											<FormItem>
												<CardTitle>Event title</CardTitle>
												<FormControl>
													<Input placeholder="enter event headline here" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="flex flex-row flex-wrap gap-4">
										<FormField
											control={form.control}
											name="coverImageId"
											render={({ field }) => (
												<FormItem className="max-w-fit">
													<FormLabel>Cover image</FormLabel>
													<FormControl>
														<ButtonAddSingleAttachment
															onFilesSelected={startUpload}
															disabled={isUploading || form.formState.isSubmitting}
															type="button"
															variant={"secondary"}
														>
															{isUploading && <Spinner />}
															Choose image
														</ButtonAddSingleAttachment>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="location"
											render={({ field }) => (
												<FormItem className="min-w-[100px] flex-1">
													<FormLabel>Location</FormLabel>
													<FormControl>
														<InputGroup>
															<InputGroupInput placeholder="where will it be?" {...field} value={field.value!} />
															<InputGroupAddon align={"inline-end"}>
																<InputGroupButton>
																	<MapPinIcon />
																</InputGroupButton>
															</InputGroupAddon>
														</InputGroup>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<EventsCategory form={form} />
									</div>
								</div>
								<div>
									<FormField
										control={form.control}
										name="description"
										render={({ field }) => (
											<FormItem>
												<CardTitle>Event description</CardTitle>
												<FormControl>
													<TipTapEditorWithHeader
														onChange={field.onChange}
														value={field.value!}
														placeholder="describe the event "
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</div>
							{/* lesser content  */}
							<div className="space-y-4 md:w-1/3 md:*:space-y-4 md:*:border md:*:bg-card md:*:p-3">
								<div className="space-y-4">
									<EventDatePicker form={form} />
									<FormField
										control={form.control}
										name="summary"
										render={({ field }) => (
											<FormItem>
												<CardTitle>Event Summary</CardTitle>
												<FormControl>
													<TipTapEditorWithHeader
														onChange={field.onChange}
														includeHeader={false}
														value={field.value!}
														placeholder="in about 200 words summarize the event"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div>
									<OtherMedia eventId={watchedId} mediaIds={(ids) => setMediaIds(ids)} />
								</div>
							</div>
							<FormFooter>
								<LoadingButton
									loading={isPending}
									type="submit"
									size={"lg"}
									onClick={() => form.handleSubmit(onSubmit)()}
									className="ml-auto md:hidden"
								>
									<SaveIcon /> Submit
								</LoadingButton>
							</FormFooter>
						</div>
					</SheetContent>
				</form>
			</Form>
		</Sheet>
	);
}
