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
            We carefully handpick and review products from leading brands to
            ensure you get only the best value for your money. Our team spends
            countless hours analyzing product features, reading user reviews,
            and comparing specifications—so you don&#39;t have to.
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
