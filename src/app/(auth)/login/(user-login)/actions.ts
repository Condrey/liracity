"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { loginSchema, LoginValues } from "@/lib/validation";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(
  credentials: LoginValues,
): Promise<{ error: string }> {
  const cookieStore = await cookies();
  console.log(credentials);
  const { username, password } = loginSchema.parse(credentials);

  let existingUser = await prisma.user.findFirst({
    where: {
      username: {
        equals: username,
        mode: "insensitive",
      },
    },
  });
  if (!existingUser) {
    existingUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: username,
          mode: "insensitive",
        },
      },
    });
  }

  if (!existingUser || !existingUser.passwordHash) {
    return {
      error: "Incorrect username or password.",
    };
  }

  const validPassword = await verify(existingUser.passwordHash, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  if (!validPassword) {
    return {
      error: "Incorrect username or password.",
    };
  }

  const session = await lucia.createSession(existingUser.id, {
    role: existingUser.role || "USER",
  });
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect(
    existingUser.isVerified ? "/" : `/user-verification/${existingUser.id}`,
  );
}
