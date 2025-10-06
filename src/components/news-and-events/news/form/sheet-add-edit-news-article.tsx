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
import { newsArticleStatuses } from "@/components/user/constants";
import { NewsArticleData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { newsArticleSchema, NewsArticleSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPinIcon, SaveIcon } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpsertNewsArticleMutation } from "./mutation";
import NewsArticleCategory from "./news-article-category";
import NewsArticleTag from "./news-article-tags";
import OtherMedia from "./other-media";
import { useCoverImageUpload } from "./use-media-upload";

interface SheetAddEditNewsArticleProps {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	newsArticle?: NewsArticleData;
	altId: string;
	userId: string | undefined | null;
}

export default function SheetAddEditNewsArticle({
	newsArticle,
	open,
	setOpen,
	altId,
	userId
}: SheetAddEditNewsArticleProps) {
	const [mediaIds, setMediaIds] = useState<string[]>([]);
	const form = useForm<NewsArticleSchema>({
		resolver: zodResolver(newsArticleSchema),
		defaultValues: {
			id: newsArticle?.id || altId,
			title: newsArticle?.title || "",
			categoryId: newsArticle?.categoryId || "",
			status: newsArticle?.status || "DRAFT",
			authorId: newsArticle?.authorId || userId || "",
			content: newsArticle?.content || "",
			coverImage: newsArticle?.coverImage,
			location: newsArticle?.location,
			slug: newsArticle?.slug,
			summary: newsArticle?.summary,
			tags: newsArticle?.tags,
			publishedAt: newsArticle?.publishedAt
		}
	});
	const watchedTitle = form.watch("title");
	const watchedStatus = form.watch("status");
	const watchedTags = form.watch("tags");
	const watchedId = form.watch("id")!;
	const { newsArticleStatus } = newsArticleStatuses[watchedStatus];
	const sheetTitle = newsArticle ? "Update news article" : "Add news article";

	const {
		startUpload,
		attachment,
		isUploading,
		uploadProgress,
		removeAttachment,
		reset: resetMediaUploads
	} = useCoverImageUpload();
	const coverImageUrl = !attachment ? "" : URL.createObjectURL(attachment.file);

	const { isPending, mutate } = useUpsertNewsArticleMutation();
	function onSubmit(input: NewsArticleSchema) {
		const newFields = { ...input, coverImage: attachment.mediaId };
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
													{watchedTitle}{" "}
												</CardTitle>
											) : (
												<SheetTitle>{sheetTitle}</SheetTitle>
											)}
											<div>
												<div className="flex gap-2">
													<Badge variant={"warning"}>{newsArticleStatus}</Badge>
													{!watchedTags?.length ? (
														""
													) : (
														<div className="flex gap-0.5">
															<span className="text-muted-foreground text-sm italic">Hashtag:</span>
															{watchedTags.map((tag) => (
																<Badge key={tag.name} variant={"secondary"}>
																	#{tag.name}
																</Badge>
															))}
														</div>
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
											<SaveIcon /> Submit Article
										</LoadingButton>
									</div>
								</SheetHeader>
							</div>
						</div>
						{/* <pre>
							{JSON.stringify(
								{ formData: { ...form.watch(), coverImage: !!attachment ? attachment.mediaId : "" }, mediaIds },
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
												<CardTitle>Headline</CardTitle>
												<FormControl>
													<Input placeholder="enter news headline here" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="flex  gap-4">
										<FormField
											control={form.control}
											name="coverImage"
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
															<InputGroupInput
																placeholder="which location was the news taken from"
																{...field}
																value={field.value!}
															/>
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
										<NewsArticleCategory form={form} />
									</div>
								</div>
								<div>
									<FormField
										control={form.control}
										name="content"
										render={({ field }) => (
											<FormItem>
												<CardTitle>News Content</CardTitle>
												<FormControl>
													<TipTapEditorWithHeader
														onTextChanged={field.onChange}
														initialContent={field.value!}
														placeholder="start typing news article"
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
									<NewsArticleTag form={form} />
									<FormField
										control={form.control}
										name="summary"
										render={({ field }) => (
											<FormItem>
												<CardTitle>News Summary</CardTitle>
												<FormControl>
													<TipTapEditorWithHeader
														onTextChanged={field.onChange}
														includeHeader={false}
														initialContent={field.value!}
														placeholder="in about 200 words"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div>
									<OtherMedia newsArticleId={watchedId} mediaIds={(ids) => setMediaIds(ids)} />
								</div>
							</div>
						</div>
					</SheetContent>
				</form>
			</Form>
		</Sheet>
	);
}
