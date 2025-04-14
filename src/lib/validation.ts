import { z } from "zod";

const requiredString = z.string().min(1, "This field is required.").trim();

//NewsLetter
export const newsLetterSubscriptionSchema = z.object({
  email: requiredString.email().min(1, "An email is required."),
  name: requiredString.min(1, "Please enter your full name"),
});
export type NewsLetterSubscriptionSchema = z.infer<
  typeof newsLetterSubscriptionSchema
>;
