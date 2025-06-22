"use client";

import ContactUsForm from "../forms/contact-us-form";
import { useMotion } from "../providers/scroll/MotionProvider";

const ContactUs = () => {
  const motion = useMotion();
  return (
    <section className="w-full container mx-auto">
      <div className="flex flex-col gap-5 lg:gap-10 text-center lg:text-start lg:flex-row">
        <section className="lg:basis-full">
          <article>
            <motion.div
              className="box"
              transition={{ type: "spring" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl text-primary font-bold">
                Contact Us - Get in Touch with TopPicksHub
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
                We&#39;d love to hear from you! Whether you have questions,
                suggestions, product recommendations, or partnership
                inquiries—feel free to reach out. At TopPicksHub, your feedback
                helps us improve our content and serve you better.
              </p>
            </motion.div>
          </article>
        </section>
        <section className="w-full space-y-2 lg:space-y-4 lg:basis-full">
          <motion.div
            transition={{ type: "spring", delay: 0.2 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="italic text-secondary text-sm">
              We respect your privacy. Your information will only be used to
              respond to your inquiry and will never be shared with third
              parties.
            </p>
          </motion.div>
          <ContactUsForm />
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
