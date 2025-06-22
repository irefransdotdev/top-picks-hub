"use client";

import Image from "next/image";
import { useMotion } from "../providers/scroll/MotionProvider";
import { Button } from "../ui/button";

const Hero = () => {
  const motion = useMotion();

  return (
    <section className="text-gray-900 w-full container mx-auto">
      <div className="flex flex-col gap-5 text-center items-center lg:text-start lg:flex-row">
        <section className="basis-full space-y-2 lg:space-x-4">
          <article className="space-y-2 lg:space-y-4">
            <motion.div
              transition={{ type: "spring", delay: 0.1 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 id="hero-heading" className="text-xl text-primary-foreground">
                Welcome to <span className="font-bold">TopPickHubs</span>
              </h2>
            </motion.div>
            <motion.div
              transition={{ type: "spring", delay: 0.2 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl text-primary-foreground leading-8">
                Your Trusted Source for the Best Product Reviews and Buying
                Guides!
              </p>
            </motion.div>
            <motion.div
              transition={{ type: "spring", delay: 0.3 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-primary-foreground">
                Looking for the best products, honest reviews, and expert
                recommendations? At TopPicksHub, we make online shopping easier
                by curating the top-rated gadgets, lifestyle products, home
                essentials, and all in one.
              </p>
            </motion.div>
          </article>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
            <motion.div
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
              transition={{ type: "spring", delay: 0.5 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button className="cursor-pointer border border-button-primary bg-transparent w-full hover:bg-button-primary/20 hover:border-button-primary/80 hover:text-white/80">
                Explore Categories
              </Button>
            </motion.div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row w-full gap-2.5 h-72">
          <div className="flex w-full relative">
            <motion.div
              transition={{ type: "spring", delay: 0.6 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute z-10 scale-60 w-full lg:scale-70 inset-0 -translate-x-10 lg:-translate-y-20 
 lg:-translate-x-10 xl:scale-50"
            >
              <Image
                src="/assets/hero/iphone-16-pro-mockup-v19-front-view.webp"
                width={320}
                height={320}
                alt="top view camera lens chest game"
                className="drop-shadow-2xl w-full"
                fill={false}
                quality={100}
              />
            </motion.div>
            <motion.div
              transition={{ type: "spring", delay: 0.7 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute z-10 inset-0 scale-45 translate-y-20 w-full lg:scale-55 translate-x-15 lg:-translate-y-0 
 lg:translate-x-20 xl:scale-35"
            >
              <Image
                src="/assets/hero/Apple_Watch_Mockup_2.webp"
                width={320}
                height={320}
                alt="top view camera lens chest game"
                className="drop-shadow-2xl w-full"
                fill={false}
                quality={100}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
