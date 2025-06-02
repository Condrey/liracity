"use client";

import { useSession } from "@/app/session-provider";
import {
  NewsLetterSubscriptionSchema,
  newsLetterSubscriptionSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import ky from "ky";
import { MailIcon, SendIcon } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import LoadingButton from "../ui/loading-button";

export default function NewsLetterForm() {
  const [isPending, startTransition] = useTransition();
  const { user } = useSession();
  const form = useForm<NewsLetterSubscriptionSchema>({
    resolver: zodResolver(newsLetterSubscriptionSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const onSubmit = (input: NewsLetterSubscriptionSchema) => {
    startTransition(async () => {
      const response = await ky.post("/api/subscribe-news-letter", {
        body: JSON.stringify(input),
      });
      if (response.ok) {
        toast.info(response.statusText);
      } else {
        toast.error(response.statusText);
      }
    });
  };
  return (
    <Form {...form}>
      <Card className="w-full max-w-2xl mx-auto group/newsLetter bg-gradient-to-br from-accent">
        <CardHeader className="flex flex-row gap-3 items-center">
          <MailIcon
            className="size-20 text-muted-foreground hidden sm:block  group-hover/newsLetter:animate-none"
            strokeWidth={0.5}
          />
          <div className=" gap-1.5 flex flex-col">
            <CardTitle className="uppercase">
              Request Periodic Newsletter
            </CardTitle>
            <CardDescription>
              Subscribe to our free newsletter to stay ahead. Get notified about
              news feeds and upcoming events before others.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="w-full  ">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full *:w-full *:max-w-md *:sm:max-w-none "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Full name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="e.g., John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="e.g., someone@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormFooter>
              <LoadingButton type="submit" loading={isPending}>
                Request <SendIcon className="ms-2" />
              </LoadingButton>
            </FormFooter>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}
