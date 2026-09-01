import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allStationTypes, stationTypes } from "@/lib/enums";
import { DepartmentalSectionSchema, PositionSchema, SignUpSchema } from "@/lib/validation";
import { UseFormReturn } from "react-hook-form";
import { EventStatus, NewsArticleStatus, Role,StationType } from "@/generated/prisma/enums";

interface Props {
  form: UseFormReturn<DepartmentalSectionSchema>;
}
export default function FieldStationType({ form }: Props) {
  return (
    <FormField
      control={form.control}
      name="stationType"
      render={({ field }) => (
        <FormItem>
          <FormLabel required>Station type</FormLabel>
          <Select onValueChange={field.onChange} value={field.value!}>
            <SelectTrigger className="w-full">
              <FormControl>
                <SelectValue
                  placeholder={"Please choose a station type"}
                  className="w-full"
                />
              </FormControl>
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectGroup>
                <SelectLabel>Allowed Station types</SelectLabel>
                {allStationTypes
                  .map((stationType) => {
                    const { title } = stationTypes[stationType];
                    return (
                      <SelectItem key={stationType} value={stationType}>
                        {title}
                      </SelectItem>
                    );
                  })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
