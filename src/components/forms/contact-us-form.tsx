"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useMotion } from "../providers/scroll/MotionProvider";
import { AnimatePresence } from "motion/react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 character(s)")
    .max(50, "Name exceeds 50 character(s)"),
  email: z
    .string()
    .email("You must enter a valid email")
    .min(2, "Email must contain at least 2 character(s)")
    .max(50, "Email exceeds 50 character(s)"),
  subject: z
    .string()
    .min(2, "Subject must contain at least 2 character(s)")
    .max(50, "Subject exceeds 50 character(s)"),
  message: z
    .string()
    .min(10, "Message must contain at least 10 character(s)")
    .max(500, "Message exceeds 500 character(s)"),
});

const ContactUsForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const motion = useMotion();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Form {...form}>
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="box"
            transition={{ type: "spring", duration: 0.5 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            key="thank-you-message-contact-us"
          >
            <div className="text-green-600 text-center font-semibold mb-5">
              Thank you for your testimonial!
            </div>
          </motion.div>
        )}
        <motion.div
          key="contanct-us-form"
          className="box"
          transition={{ type: "spring" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          layout
        >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className={cn(
                        "w-full",
                        form.formState.errors.name
                          ? "placeholder:text-red-600"
                          : "",
                        form.watch("name")
                          ? "placeholder:text-primary"
                          : "placeholder:text-secondary"
                      )}
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
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      className={cn(
                        "w-full",
                        form.formState.errors.email
                          ? "placeholder:text-red-600"
                          : "",
                        form.watch("email")
                          ? "placeholder:text-primary"
                          : "placeholder:text-secondary"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      {...field}
                      className={cn(
                        "w-full",
                        form.formState.errors.subject
                          ? "placeholder:text-red-600"
                          : "",
                        form.watch("subject")
                          ? "placeholder:text-primary"
                          : "placeholder:text-secondary"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      rows={8}
                      {...field}
                      className={cn(
                        "w-full",
                        form.formState.errors.message
                          ? "placeholder:text-red-600"
                          : "",
                        form.watch("message")
                          ? "placeholder:text-primary"
                          : "placeholder:text-secondary"
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div whileTap={{ scale: 0.9 }} className="w-full">
              <Button
                type="submit"
                className="cursor-pointer bg-button-primary w-full hover:bg-button-primary/80 hover:text-white/80"
              >
                Submit
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </AnimatePresence>
    </Form>
  );
};

export default ContactUsForm;
