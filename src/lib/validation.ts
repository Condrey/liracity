import { EventStatus, NewsArticleStatus, Role } from "@/generated/prisma/enums";
import { z } from "zod";

const requiredString = z.string({ error: "This field should have a value" }).trim();

// Signup
export const signUpSchema = z
	.object({
		email: z.email().min(1, "Please an email is required").describe("Email for signing up"),
		name: requiredString
			.min(1, "You need a username")
			.describe("User username for the user.")
			.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),

		password: requiredString.min(8, "Password must be at least 8 characters").describe("Password for the user."),
		passwordConfirmation: requiredString
			.min(8, "Password must be at least 8 characters")
			.describe("Password confirmation for the user.")
	})
	.superRefine((data, ctx) => {
		if (data.password !== data.passwordConfirmation) {
			return ctx.addIssue({
				code: "custom",
				message: "The passwords entered are not matching",
				path: ["passwordConfirmation"]
			});
		}
	});

export type SignUpSchema = z.infer<typeof signUpSchema>;

// Login
export const signInSchema = z.object({
	email: z.email().min(1, "Please input your username or email that you registered with."),
	password: requiredString.min(1, "Password is required to login").describe("Password that you registered with."),
	rememberMe: z.boolean()
});
export type SignInSchema = z.infer<typeof signInSchema>;
export const staffLoginSchema = z.object({
	ippsNumber: z.number().min(1, "Please input your staff assigned IPPS number."),
	password: requiredString.min(1, "Password is required to login").describe("Password that you registered with.")
});
export type StaffLoginValues = z.infer<typeof staffLoginSchema>;

// Member
export const memberSignUpSchema = z.object({
	ippsNumber: z.number().nullish(),
	email: z.email().min(1, "Please input your username or email that you registered with."),
	role: z.enum(Role, { error: "Please choose the correct role" }),
	name: requiredString
		.min(1, "Name is a must")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),
	organizationId: requiredString.min(1, "Please choose a department")
});
export type MemberSignUpSchema = z.infer<typeof memberSignUpSchema>;
export const multipleMembersSignUpSchema = z.object({ members: z.array(memberSignUpSchema) });
export type MultipleMembersSignUpSchema = z.infer<typeof multipleMembersSignUpSchema>;

//User
export const userSchema = z.object({
	name: requiredString
		.min(1, "Name must be provided.")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),
	id: z.string().optional(),
	username: z.string().optional(),
	email: z.string().email().optional(),
	telephone: z
		.string()
		.optional()
		.refine((val) => !val || /^\+\d{1,3}\d{7,14}$/.test(val), {
			message: "Telephone number must start with a '+' followed by country code and number."
		})
});
export type UserSchema = z.infer<typeof userSchema>;

export const verifyUserSchema = z.object({
	name: requiredString
		.min(1, "Name must be provided.")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),
	id: requiredString.min(1, "User id is missing"),
	username: requiredString
		.min(1, "Please add a user name")
		.describe("User username for the user.")
		.regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ are allowed"),
	email: requiredString.email().min(1, "A working email is required"),
	telephone: z
		.string()
		.trim()
		.optional()
		.refine((val) => !val || /^\+\d{1,3}\d{7,14}$/.test(val), {
			message: "Telephone number must start with a '+' followed by country code and number."
		}),
	password: requiredString.min(8, "Password must be at least 8 characters").describe("Password for the user.")
});
export type VerifyUserSchema = z.infer<typeof verifyUserSchema>;

// Employee
export const employeeSchema = z.object({
	organizationId: requiredString,
	userId: requiredString,
	name: requiredString.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),
	ippsNumber: z.number({ error: "IPPS number is a must" }),
	employeeId: requiredString,
	position: requiredString,
	assumedOffice: z.number({
		error: "Please enter year staff assumed office."
	})
});
export type EmployeeSchema = z.infer<typeof employeeSchema>;

// NewsLetter
export const newsLetterSubscriptionSchema = z.object({
	email: requiredString.email().min(1, "An email is required."),
	name: requiredString
		.min(1, "Please enter your full name")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase()))
});
export type NewsLetterSubscriptionSchema = z.infer<typeof newsLetterSubscriptionSchema>;
export const newsLetterSchema = z.object({
	name: requiredString.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),

	email: requiredString.email()
});
export type NewsLetterSchema = z.infer<typeof newsLetterSchema>;

// organization
export const organizationSchema = z.object({
	id: z.string().optional().describe("Unique identifier(UUIDV4) for the buyer"),
	name: requiredString
		.min(1, { error: "Please enter a correct name" })
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),
	slug: requiredString.min(1, { error: "Organization Slug is required" }),
	logo: z.string().optional(),
	metadata: z.string().optional(),
	about: z.string().max(350, "Write within 350 characters").optional(),

	keepCurrentActiveOrganization: z.boolean()
});
export type OrganizationSchema = z.infer<typeof organizationSchema>;

// Team
export const teamSchema = z.object({
	id: z.string().optional(),
	name: requiredString
		.min(1, "Team name is missing")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase())),
	organizationId: requiredString.min(1, "Please chose an organization")
});
export type TeamSchema = z.infer<typeof teamSchema>;

// Tag
export const tagSchema = z.object({
	id: z.string().optional(),
	name: requiredString
		.min(1, "Please provide a category")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase()))
});
export type TagSchema = z.infer<typeof tagSchema>;

// News article
export const newsArticleSchema = z.object({
	id: z.string().optional(),
	title: requiredString.min(1, "Please add a title"),
	slug: z.string().optional(),
	coverImageId: z.string().optional().nullable(),
	summary: z.string().optional().nullable(),
	publishedAt: z.date().optional().nullable(),
	status: z.enum(NewsArticleStatus),
	content: requiredString,
	authorId: requiredString,
	categoryId: requiredString,
	tags: z.array(tagSchema).optional(),
	location: z.string().trim().optional().nullable()
});
export type NewsArticleSchema = z.infer<typeof newsArticleSchema>;

// News article category
export const newsArticleCategorySchema = z.object({
	id: z.string().optional(),
	name: requiredString
		.min(1, "Please provide a category")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase()))
});
export type NewsArticleCategorySchema = z.infer<typeof newsArticleCategorySchema>;

// Event
export const eventSchema = z.object({
	id: z.string().optional(),
	title: requiredString.min(1, "Please add a title"),
	slug: z.string().optional(),
	coverImageId: z.string().optional().nullable(),
	summary: z.string().optional().nullable(),
	status: z.enum(EventStatus),
	description: requiredString,
	authorId: requiredString,
	categoryId: requiredString,
	location: requiredString,
	startDate: z.date(),
	endDate: z.date().nullish()
});
export type EventSchema = z.infer<typeof eventSchema>;

// Event  category
export const eventCategorySchema = z.object({
	id: z.string().optional(),
	name: requiredString
		.min(1, "Please provide a category")
		.transform((val) => val.trim().replace(/\b\w/g, (char) => char.toUpperCase()))
});
export type EventCategorySchema = z.infer<typeof eventCategorySchema>;

// miscellaneous
export const emailSchema = z.object({ email: z.string().trim().email() });
export type EmailSchema = z.infer<typeof emailSchema>;

export const singleContentSchema = z.object({ singleContent: requiredString });
export type SingleContentSchema = z.infer<typeof singleContentSchema>;
