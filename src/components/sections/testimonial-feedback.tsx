"use client";

import TestimonialForm from "../forms/testimonial-form";
import { useMotion } from "../providers/scroll/MotionProvider";

const TestimonialFeedback = () => {
  const motion = useMotion();
  return (
    <section className="w-full container mx-auto">
      <div className="flex flex-col gap-5 lg:gap-10 text-center lg:text-start lg:flex-row">
        <section className="lg:order-2 lg:basis-full">
          <article>
            <motion.div
              className="box"
              transition={{ type: "spring" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl text-primary font-bold">
                Share Your Experience with TopPicksHub!
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
                We&#39;d love to hear how TopPicksHub helped you make smarter
                buying decisions. Your feedback helps us improve and assist more
                users like you. Share your story or suggestions—every message
                matters!
              </p>
            </motion.div>
          </article>
        </section>
        <section className="lg:basis-full lg:order-1">
          <TestimonialForm />
        </section>
      </div>
    </section>
  );
};

export default TestimonialFeedback;
