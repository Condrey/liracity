import { ButtonAddSingleAttachment } from "@/components/attachment/button-add-attachment";
import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import LoadingButton from "@/components/ui/loading-button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
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
	const [mediaIds, setMediaIds] = useState<string[]>([]);
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
	const watchedStatus = form.watch("status");
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
	const coverImageUrl = !attachment ? "" : URL.createObjectURL(attachment.file);

	const { isPending, mutate } = useUpsertEventMutation();
	function onSubmit(input: EventSchema) {
		const newFields = { ...input, coverImageId: attachment.mediaId };
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
						<div className="relative max-w-7xl min-h-[100px] w-full mx-auto flex flex-col justify-center">
							{!!attachment && !!attachment.file && (
								<div className=" w-full min-h-[180px] brightness-50 mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80%">
									<Image src={coverImageUrl} alt="Cover image" fill className="object-cover w-full rounded-xl" />
								</div>
							)}
							<div
								className={cn(
									"w-full absolute h-fit",
									!!attachment && !!attachment.file && "p-3 bg-background/20 backdrop-blur-2xl max-h-fit my-auto"
								)}
							>
								<SheetHeader className=" w-full ">
									<div className="flex gap-3 justify-between items-end">
										<div>
											{!!watchedTitle && <SheetDescription>{sheetTitle}</SheetDescription>}
											{!!watchedTitle ? (
												<CardTitle className="tracking-tighter line-clamp-3 md:line-clamp-1 text-wrap break-all">
													{watchedTitle}
												</CardTitle>
											) : (
												<SheetTitle>{sheetTitle}</SheetTitle>
											)}
											<div>
												<div className="flex gap-2">
													<Badge variant={"warning"}>{eventStatus}</Badge>
													{!!watchedStartDate && (
														<Badge variant={"secondary"} className="flex gap-0.5">
															<span className="text-muted-foreground text-sm italic">
																<CalendarRangeIcon className="inline-flex size-4 mr-1" />
																Start:
															</span>
															{formatDate(watchedStartDate, "PPp")}
														</Badge>
													)}
													{!!watchedEndDate && (
														<Badge variant={"secondary"} className="flex gap-0.5">
															<span className="text-muted-foreground text-sm italic">
																<CalendarRangeIcon className="inline-flex size-4 mr-1" />
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
						<div className="w-full flex-col md:flex-row max-w-7xl mx-auto flex gap-3 ">
							{/* main content  */}
							<div className="md:w-2/3 space-y-4 md:*:p-3 md:*:bg-card md:*:border md:*:space-y-4">
								<div className="">
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
									<div className="flex  gap-4">
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
												<FormItem className="flex-1">
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
														onTextChanged={field.onChange}
														initialContent={field.value!}
														placeholder="describe the event "
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</div>
							{/* lesser content  */}
							<div className="md:w-1/3 space-y-4 md:*:p-3 md:*:bg-card md:*:border md:*:space-y-4">
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
														onTextChanged={field.onChange}
														includeHeader={false}
														initialContent={field.value!}
														placeholder="in about 200 words summarize the event"
														{...field}
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
						</div>
					</SheetContent>
				</form>
			</Form>
		</Sheet>
	);
}
