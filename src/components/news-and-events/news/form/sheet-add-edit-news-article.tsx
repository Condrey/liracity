import { ButtonAddSingleAttachment } from "@/components/attachment/button-add-attachment";
import TipTapEditorHeader from "@/components/tip-tap-editor/headers/header";
import TipTapEditorWithHeader, { useTipTapEditor } from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormFooter, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import LoadingButton from "@/components/ui/loading-button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { Spinner } from "@/components/ui/spinner";
import { newsArticleStatuses } from "@/lib/enums";
import { NewsArticleData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { newsArticleSchema, NewsArticleSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditorContent } from "@tiptap/react";
import { FullscreenIcon, MapPinIcon, SaveIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ControllerRenderProps, useForm, UseFormReturn } from "react-hook-form";
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
	const prevMediaIds = newsArticle?.media.map((m) => m.id);
	const [mediaIds, setMediaIds] = useState<string[]>(prevMediaIds || []);
	const form = useForm<NewsArticleSchema>({
		resolver: zodResolver(newsArticleSchema),
		defaultValues: {
			id: newsArticle?.id || altId,
			title: newsArticle?.title || "",
			categoryId: newsArticle?.categoryId || "",
			status: newsArticle?.status || "DRAFT",
			authorId: newsArticle?.authorId || userId || "",
			content: newsArticle?.content || "",
			coverImageId: newsArticle?.coverImageId,
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
	const coverImageUrl = !!newsArticle
		? newsArticle?.coverImage?.url
		: !attachment
			? ""
			: URL.createObjectURL(attachment.file);

	const { isPending, mutate } = useUpsertNewsArticleMutation();
	function onSubmit(input: NewsArticleSchema) {
		const newFields = { ...input, coverImageId: attachment ? attachment.mediaId : newsArticle?.coverImageId };
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
					<SheetContent side="bottom" className="h-svh overflow-y-auto bg-muted px-3">
						<div className="relative">
							{coverImageUrl && (
								<Image
									src={coverImageUrl!}
									alt="Cover image"
									fill
									className="absolute w-full items-stretch rounded-xl object-cover opacity-[2.5%]"
								/>
							)}
							<div className="relative mx-auto flex min-h-[100px] w-full max-w-7xl flex-col justify-center">
								{coverImageUrl && (
									<div className="min-h-[180px] w-full mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% brightness-50">
										<Image src={coverImageUrl!} alt="Cover image" fill className="w-full rounded-xl object-cover" />
									</div>
								)}
								<div
									className={cn(
										"absolute h-fit w-full",
										!!coverImageUrl && "my-auto max-h-fit bg-background/20 p-3 backdrop-blur-2xl"
									)}
								>
									<SheetHeader className="max-h-fit w-full">
										<div className="flex w-full flex-wrap justify-between gap-3 pt-3 md:items-end">
											<div className="space-y-0.5">
												{!!watchedTitle && <SheetDescription>{sheetTitle}</SheetDescription>}
												{!!watchedTitle ? (
													<CardTitle className="line-clamp-3 tracking-tighter text-wrap break-all md:line-clamp-1">
														{watchedTitle}
													</CardTitle>
												) : (
													<SheetTitle>{sheetTitle}</SheetTitle>
												)}
												<div>
													<div className="flex gap-2">
														<Badge variant={"warning"} className="max-h-fit">
															{newsArticleStatus}
														</Badge>
														{!watchedTags?.length ? (
															""
														) : (
															<div className="flex flex-wrap gap-0.5">
																<span className="hidden text-sm text-muted-foreground italic md:flex">Hashtag:</span>
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
												className="hidden md:flex"
											>
												<SaveIcon className="mr-2 inline" /> Submit Article
											</LoadingButton>
										</div>
									</SheetHeader>
								</div>
							</div>

							{/* <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre> */}
							<pre>{JSON.stringify(form.watch("content"), null, 2)}</pre>

							<div className="mx-auto flex w-full max-w-7xl flex-col gap-3 md:flex-row">
								{/* main content  */}
								<div className="space-y-4 md:w-2/3 md:*:space-y-4 md:*:border md:*:bg-card md:*:p-3">
									<div className="space-y-4">
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
										<div className="flex flex-wrap gap-4">
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
													<CardTitle className="flex flex-row items-center justify-between gap-2">
														News Content
														<FullScreenEditor variant="outline" formValue={form} title="Full screen">
															<FullscreenIcon />
															<span className="sr-only md:not-sr-only">Full Screen</span>
														</FullScreenEditor>
													</CardTitle>
													<FormControl>
														<TipTapEditorWithHeader
															placeholder="start typing news article"
															{...field}
															value={field.value!}
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
										<NewsArticleTag form={form} />
										<FormField
											control={form.control}
											name="summary"
											render={({ field }) => (
												<FormItem>
													<CardTitle>News Summary</CardTitle>
													<FormControl>
														<TipTapEditorWithHeader
															includeHeader={false}
															placeholder="in about 200 words"
															{...field}
															value={field.value!}
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
								<FormFooter className="my-4">
									<LoadingButton
										loading={isPending}
										type="submit"
										size={"lg"}
										onClick={() => form.handleSubmit(onSubmit)()}
										className="md:hidden"
									>
										<SaveIcon /> Submit Article
									</LoadingButton>
								</FormFooter>
							</div>
						</div>
					</SheetContent>
				</form>
			</Form>
		</Sheet>
	);
}

interface FullScreenEditorProps extends ButtonProps {
	formValue: UseFormReturn<NewsArticleSchema>;
}

function FullScreenEditor({ formValue: form, ...props }: FullScreenEditorProps) {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button onClick={() => setOpen(true)} {...props} type={"button"} />
			</SheetTrigger>
			<SheetContent side="top">
				<div className="flex h-dvh flex-col overflow-y-hidden bg-muted">
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<div className="flex size-full h-dvh flex-col overflow-y-auto bg-background">
								<TipTapValue {...field} />
							</div>
						)}
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
}

function TipTapValue({
	onChange,
	value,
	placeholder
}: ControllerRenderProps<NewsArticleSchema, "content"> & { placeholder?: string }) {
	const editor = useTipTapEditor({ onChange, value, placeholder });

	useEffect(() => {
		if (!editor) return;

		const current = editor.getHTML();

		if (current !== value) {
			editor.commands.setContent(value || "");
		}
	}, [editor, value]);

	return (
		<>
			<div className="sticky top-0 z-50 max-h-fit">
				<SheetClose asChild>
					<Button type="button" variant={"destructive"} className="absolute top-2 right-2 z-50">
						<XIcon className="size-4" />
					</Button>
				</SheetClose>
				<TipTapEditorHeader editor={editor} className="pe-12" />
			</div>
			<EditorContent
				editor={editor}
				className={cn("size-full min-h-0 flex-1 list-disc px-3 pb-12 *:h-full *:w-full")}
			/>
		</>
	);
}
