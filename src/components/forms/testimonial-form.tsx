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

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 character(s)")
    .max(50, "Name exceeds 50 character(s)"),
  profession: z
    .string()
    .min(2, "Profession must contain at least 2 character(s)")
    .max(50, "Profession exceeds 50 character(s)"),
  testimonial: z
    .string()
    .min(10, "Testimonial must contain at least 10 character(s)")
    .max(500, "Testimonial exceeds 500 character(s)"),
});

const TestimonialForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const motion = useMotion();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      profession: "",
      testimonial: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
        {submitted && (
          <div className="text-green-600 text-center font-semibold mb-5">
            Thank you for your testimonial!
          </div>
        )}
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.2 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
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
        </motion.div>
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.3 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Profession (e.g. Fitness Coach, Homeowner)"
                    {...field}
                    className={cn(
                      "w-full",
                      form.formState.errors.profession
                        ? "placeholder:text-red-600"
                        : "",
                      form.watch("profession")
                        ? "placeholder:text-primary"
                        : "placeholder:text-secondary"
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.3 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FormField
            control={form.control}
            name="testimonial"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Testimonial"
                    rows={8}
                    {...field}
                    className={cn(
                      "w-full",
                      form.formState.errors.testimonial
                        ? "placeholder:text-red-600"
                        : "",
                      form.watch("testimonial")
                        ? "placeholder:text-primary"
                        : "placeholder:text-secondary"
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className="box"
          transition={{ type: "spring" }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 0 }}
        >
          <Button
            type="submit"
            className="cursor-pointer bg-button-primary w-full hover:bg-button-primary/80 hover:text-white/80"
          >
            Submit
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default TestimonialForm;
