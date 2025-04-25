import { z } from "zod";

const requiredString = z.string().min(1, "This field is required.").trim();

// NewsLetter
export const newsLetterSubscriptionSchema = z.object({
  email: requiredString.email().min(1, "An email is required."),
  name: requiredString.min(1, "Please enter your full name"),
});
export type NewsLetterSubscriptionSchema = z.infer<
  typeof newsLetterSubscriptionSchema
>;

// Department
export const departmentSchema = z.object({
  id: z.string().optional(),
  name: requiredString
    .min(1, "Department name is missing")
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),
  about: z.string().max(200, "Write within 250 characters").optional(),
  headOfDepartmentId: z.string().optional(),
});
export type DepartmentSchema = z.infer<typeof departmentSchema>;

// Departmental sector 
export const departmentalSectorSchema = z.object({
  id: z.string().optional(),
  name: requiredString
    .min(1, "Departmental Sector name is missing")
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),
  description: z.string().max(200, "Write within 250 characters").optional(),
  hierarchy:z.number(),
  departMentId: requiredString.min(1,'Please choose a department'),
});
export type DepartmentalSectorSchema = z.infer<typeof departmentalSectorSchema>;