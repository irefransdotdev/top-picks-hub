"use client";

import { useMotion } from "../providers/scroll/MotionProvider";
import { Button } from "../ui/button";

const Hero = () => {
  const motion = useMotion();

  return (
    <section className=" text-gray-900 py-20">
      <div className="container px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <motion.div
            className="box"
            transition={{ type: "spring", delay: 0.1 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 id="hero-heading" className="text-xl text-primary-foreground">
              Welcome to <span className="font-bold">TopPickHubs</span>
            </h2>
          </motion.div>
        </header>
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.2 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl text-primary-foreground leading-8">
            Your Trusted Source for the Best Product Reviews and Buying Guides!
          </p>
        </motion.div>
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.3 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground">
            Looking for the best products, honest reviews, and expert
            recommendations? At TopPicksHub, we make online shopping easier by
            curating the top-rated gadgets, lifestyle products, home essentials,
            and all in one.
          </p>
        </motion.div>
        <footer className="flex flex-col w-full gap-2.5">
          <motion.div
            className="box"
            transition={{ type: "spring", delay: 0.4 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button className="cursor-pointer bg-button-primary w-full hover:bg-button-primary/80 hover:text-white/80">
              Browse Top Picks
            </Button>
          </motion.div>
          <motion.div
            className="box"
            transition={{ type: "spring", delay: 0.5 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button className="cursor-pointer border border-button-primary bg-transparent w-full hover:bg-button-primary/20 hover:border-button-primary/80 hover:text-white/80">
              Explore Categories
            </Button>
          </motion.div>
        </footer>
      </div>
    </section>
  );
};

export default Hero;
