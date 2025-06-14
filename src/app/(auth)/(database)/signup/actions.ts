"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(
  credentials: SignUpValues,
): Promise<{ error: string }> {
  const { username, email, password } = signUpSchema.parse(credentials);
  const passwordHash = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  const userId = generateIdFromEntropySize(10);
  const existingUserName = await prisma.user.findFirst({
    where: {
      username: {
        equals: username,
        mode: "insensitive",
      },
    },
  });
  if (existingUserName) {
    return {
      error: "Username is already taken, please select another",
    };
  }
  const existingEmail = await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
        mode: "insensitive",
      },
    },
  });
  if (existingEmail) {
    return {
      error:
        "Email is already taken or has been used to register before, just login",
    };
  }

  const user = await prisma.user.create({
    data: {
      id: userId,
      username,
      name: username,
      email,
      passwordHash,
    },
  });

  const session = await lucia.createSession(
    userId,
    {
      role: user.role || "USER",
    },
    {},
  );
  const sessionCookie = lucia.createSessionCookie(session.id);
  const cookieStore = await cookies();
  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}
