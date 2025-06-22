"use client";

import { useMotion } from "../providers/scroll/MotionProvider";

const AboutUs = () => {
  const motion = useMotion();
  return (
    <section className="w-full container mx-auto">
      <div className="flex flex-col gap-5 lg:gap-10 text-center lg:text-start">
        <article className="space-y-2 lg:space-y-4">
          <header>
            <motion.div
              className="box"
              transition={{ type: "spring" }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl text-primary font-bold">
                About TopPicksHub - Your Trusted Source for Product Reviews and
                Buying Guides
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
              At TopPicksHub, we help smart shoppers like you make informed
              buying decisions by providing unbiased product reviews, top-rated
              recommendations, and comprehensive buying guides. Whether
              you&#39;re searching for the best tech gadgets, affordable home
              essentials, fitness gear, or skincare products, our mission is to
              simplify your shopping experience with trusted, well-researched
              content.
            </p>
          </motion.div>
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
        </article>
        <article className="space-y-2 lg:space-y-4 flex flex-col justify-center items-center lg:items-start">
          <motion.div
            className="box"
            transition={{ type: "spring" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-base">Why Trust TopPicksHub?</h3>
          </motion.div>
          <ul className="list-disc pl-2 lg:pl-4">
            <motion.li
              className="text-secondary text-left"
              transition={{ type: "spring", delay: 0.1 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>Expert Reviews & Comparisons to save you time and money.</p>
            </motion.li>
            <motion.li
              className="text-secondary text-left"
              transition={{ type: "spring", delay: 0.2 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>Regularly updated lists featuring the top products of 2025.</p>
            </motion.li>
            <motion.li
              className="text-secondary text-left"
              transition={{ type: "spring", delay: 0.3 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Transparent affiliate disclosure, so you know how we earn
                without extra cost to you.
              </p>
            </motion.li>
            <motion.li
              className="text-secondary text-left"
              transition={{ type: "spring", delay: 0.4 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Trusted by hundreds of visitors looking for reliable shopping
                advice online.
              </p>
            </motion.li>
          </ul>
        </article>
        <footer>
          <motion.p
            className="text-secondary"
            transition={{ type: "spring" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            At TopPicksHub, we believe smart shopping starts with the right
            information. That&#39;s why we&#39;re committed to helping you find
            top-quality products—backed by research, honest recommendations, and
            genuine user experiences.
          </motion.p>
        </footer>
      </div>
    </section>
  );
};

export default AboutUs;
