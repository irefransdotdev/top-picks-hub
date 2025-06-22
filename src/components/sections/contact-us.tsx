"use client";

import ContactUsForm from "../forms/contact-us-form";
import { useMotion } from "../providers/scroll/MotionProvider";

const ContactUs = () => {
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
            viewport={{ once: true }}
          >
            <h2 className="text-xl text-primary font-bold">
              Contact Us - Get in Touch with TopPicksHub
            </h2>
          </motion.div>
        </header>
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.1 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary">
            We&#39;d love to hear from you! Whether you have questions,
            suggestions, product recommendations, or partnership inquiries—feel
            free to reach out. At TopPicksHub, your feedback helps us improve
            our content and serve you better.
          </p>
        </motion.div>
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.2 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="italic text-secondary text-sm">
            We respect your privacy. Your information will only be used to
            respond to your inquiry and will never be shared with third parties.
          </p>
        </motion.div>
        <footer className="w-full">
          <ContactUsForm />
        </footer>
      </div>
    </section>
  );
};

export default ContactUs;
