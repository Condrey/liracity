import prisma from "@/lib/prisma";
import { newsLetterSubscriptionSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name } = newsLetterSubscriptionSchema.parse(body);
    const existingUser = await prisma.newsLetterSubscription.findFirst({
      where: { email },
    });
    if (!!existingUser) {
      return Response.json(
        { message: "User is already subscribed to receive news letters" },
        {
          status: 200,
          statusText: "User is already subscribed to receive news letters",
        }
      );
    } else {
      await prisma.newsLetterSubscription.create({ data: { email, name } });
      return Response.json(
        { message: "Successfully added to newsLetter subscription" },
        {
          status: 200,
          statusText: "Successfully subscribed news letter subscription",
        }
      );
    }
  } catch (error) {
    console.error("NewsLetter subscription error: ", error);
    return Response.json(
      { error: "Server error" },
      { status: 500, statusText: "Server error" }
    );
  }
}
