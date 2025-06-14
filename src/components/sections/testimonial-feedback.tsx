"use client";

import TestimonialForm from "../forms/testimonial-form";
import { useMotion } from "../providers/scroll/MotionProvider";

const TestimonialFeedback = () => {
  const motion = useMotion();
  return (
    <section className="text-gray-900 w-full py-5">
      <div className="px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <motion.div
            className="box"
            transition={{ type: "spring" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
          >
            <p className="text-secondary">
              We&#39;d love to hear how TopPicksHub helped you make smarter
              buying decisions. Share your testimonial below:
            </p>
          </motion.div>
        </header>
        <div className="w-full">
          <TestimonialForm />
        </div>
      </div>
    </section>
  );
};

export default TestimonialFeedback;
