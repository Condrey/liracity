import { z } from "zod";

const requiredString = z
  .string({ required_error: "This field should have a value" })
  .trim();

// Signup
export const signUpSchema = z.object({
  email: requiredString
    .min(1, "Please an email is required")
    .describe("Email for signing up")
    .email(),
  username: requiredString
    .min(1, "You need a username")
    .describe("User username for the user.")
    .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ are allowed"),
  password: requiredString
    .min(8, "Password must be at least 8 characters")
    .describe("Password for the user."),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

// Login
export const loginSchema = z.object({
  username: requiredString.min(
    1,
    "Please input your username or email that you registered with.",
  ),
  password: requiredString
    .min(1, "Password is required to login")
    .describe("Password that you registered with."),
});
export type LoginValues = z.infer<typeof loginSchema>;
export const staffLoginSchema = z.object({
  ippsNumber: z
    .number()
    .min(1, "Please input your staff assigned IPPS number."),
  password: requiredString
    .min(1, "Password is required to login")
    .describe("Password that you registered with."),
});
export type StaffLoginValues = z.infer<typeof staffLoginSchema>;

//User
export const userSchema = z.object({
  name: requiredString
    .min(1, "Name must be provided.")
    .transform((val) =>
      val.trim().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),
  id: z.string().optional(),
  username: z.string().optional(),
  email: z.string().email().optional(),
  telephone: z.string().optional(),
});
export type UserSchema = z.infer<typeof userSchema>;

export const verifyUserSchema = z.object({
  name: requiredString
    .min(1, "Name must be provided.")
    .transform((val) =>
      val.trim().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),
  id: requiredString.min(1, "User id is missing"),
  username: requiredString
    .min(1, "Please add a user name")
    .describe("User username for the user.")
    .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ are allowed"),
  email: requiredString.email().min(1, "A working email is required"),
  telephone: z.string().trim().optional(),
  password: requiredString
    .min(8, "Password must be at least 8 characters")
    .describe("Password for the user."),
});
export type VerifyUserSchema = z.infer<typeof verifyUserSchema>;

// NewsLetter
export const newsLetterSubscriptionSchema = z.object({
  email: requiredString.email().min(1, "An email is required."),
  name: requiredString.min(1, "Please enter your full name"),
});
export type NewsLetterSubscriptionSchema = z.infer<
  typeof newsLetterSubscriptionSchema
>;
export const newsLetterSchema = z.object({
  name: requiredString,
  email: requiredString.email(),
});
export type NewsLetterSchema = z.infer<typeof newsLetterSchema>;

// Department
export const departmentSchema = z.object({
  id: z.string().optional(),
  name: requiredString
    .min(1, "Department name is missing")
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),
  about: z.string().max(350, "Write within 350 characters").optional(),
  headOfDepartmentId: z.string().optional(),
});
export type DepartmentSchema = z.infer<typeof departmentSchema>;

// Departmental sector
export const departmentalSectorSchema = z.object({
  id: z.string().optional(),
  name: requiredString
    .min(1, "Departmental Sector name is missing")
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1)),
  description: z.string().max(350, "Write within 350 characters").optional(),
  hierarchy: z.number(),
  departMentId: requiredString.min(1, "Please choose a department"),
});
export type DepartmentalSectorSchema = z.infer<typeof departmentalSectorSchema>;

// miscellaneous
export const emailSchema = z.object({ email: z.string().trim().email() });
export type EmailSchema = z.infer<typeof emailSchema>;

export const singleContentSchema = z.object({ singleContent: requiredString });
export type SingleContentSchema = z.infer<typeof singleContentSchema>;
