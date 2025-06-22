"use client";

import { cn } from "@/lib/utils";
import TestimonialCard from "../cards/testimonial-card";
import { useMotion } from "../providers/scroll/MotionProvider";

const testimonials = [
  {
    firstName: "Mark",
    lastName: "Doe",
    profession: "Tech Enthusiast",
    title: "TopPicksHub saved me so much time!",
    message:
      "I used to spend hours comparing products, but thanks to TopPicksHub's honest reviews, I found the perfect laptop in minutes. Highly recommended!",
  },
  {
    firstName: "Sarah",
    lastName: "Loe",
    profession: "Homeowner",
    title: "Their recommendations never fail.",
    message:
      "I used to spend hours comparing products, but thanks to TopPicksHub's honest reviews, I found the perfect laptop in minutes. Highly recommended!",
  },
  {
    firstName: "Jason",
    lastName: "Roe",
    profession: "Fitness Coach",
    title: "A must-visit before shopping online.",
    message:
      "I always check TopPicksHub before buying anything new. Their top picks and comparisons are spot-on!",
  },
];

const Testimonials = () => {
  const motion = useMotion();

  const middleIndex = Math.floor(testimonials.length / 2);
  const middleTestimonial = testimonials[middleIndex];

  return (
    <section className="w-full container mx-auto">
      <div className="flex flex-col gap-5 lg:gap-10 text-center lg:text-start">
        <header>
          <motion.div
            className="box"
            transition={{ type: "spring" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl text-primary font-bold">
              What Our Readers Say
            </h2>
          </motion.div>
          <motion.div
            className="box"
            transition={{ type: "spring", delay: 0.1 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary">
              Join thousands of happy readers who rely on TopPicksHub for their
              smart buying decisions!
            </p>
          </motion.div>
        </header>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:gap-14 w-full h-full lg:h-50">
          {testimonials.map((testimonial, index) => {
            const middleIndex = Math.floor(testimonials.length / 2);
            const isMiddle = index === middleIndex;
            return (
              <motion.div
                className={cn(isMiddle && "scale-110 z-10")}
                transition={{
                  type: "spring",
                  delay: Number(((index + 1) * 0.1 + 0.1).toFixed(1)),
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                key={index}
                viewport={{ once: true }}
              >
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  isMiddle={isMiddle}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
