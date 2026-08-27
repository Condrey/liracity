import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { slugify } from "@/lib/utils";
import { NewsArticleSchema, TagSchema } from "@/lib/validation";
import { HashIcon } from "lucide-react";
import { useState } from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
export default function NewsArticleTag({ form }: { form: UseFormReturn<NewsArticleSchema> }) {
	return <FormField control={form.control} name="tags" render={({ field }) => <TagsInputField field={field} />} />;
}
function TagsInputField({ field }: { field: ControllerRenderProps<NewsArticleSchema, "tags"> }) {
	// Keep local input text for smooth typing
	const [tagsInput, setTagsInput] = useState<string>(field.value?.map((t) => t.name).join(", ") ?? "");
	const handleBlur = () => {
		const tagsArray = tagsInput
			.split(",")
			.map((t) => t.trim())
			.filter(Boolean)
			.map((t) => ({ name: slugify(t) }) as TagSchema);
		field.onChange(tagsArray);
	};
	return (
		<FormItem className="flex flex-col">
			<FormLabel>Hashtags</FormLabel>
			<FormControl>
				<InputGroup>
					<InputGroupAddon>
						<HashIcon className="h-4 w-4 text-muted-foreground" />
					</InputGroupAddon>
					<InputGroupInput
						value={tagsInput}
						onChange={(e) => setTagsInput(e.target.value)}
						onBlur={handleBlur}
						placeholder="e.g. Lira, Development, Environment"
					/>
				</InputGroup>
			</FormControl>
			<FormMessage /> <FormDescription>Separate multiple tags with commas (,)</FormDescription>
		</FormItem>
	);
}
