"use client";

import {
  NewsLetterSubscriptionSchema,
  newsLetterSubscriptionSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import LoadingButton from "../ui/loading-button";

export default function NewsLetterForm() {
  const form = useForm<NewsLetterSubscriptionSchema>({
    resolver: zodResolver(newsLetterSubscriptionSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (input: NewsLetterSubscriptionSchema) => {};
  return (
    <Form {...form}>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Request Newsletter</CardTitle>
          <CardDescription>
            Subscribe to our newsletter to stay ahead. Get notified about news
            feeds and upcoming events before others.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="e.g., Okello Tom Richard"
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
                      placeholder="e.g., trokello5@gmail.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton loading>Request</LoadingButton>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}
