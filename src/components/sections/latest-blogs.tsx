"use client";

import BlogCard from "../cards/blog-card";
import { useMotion } from "../providers/scroll/MotionProvider";

const latestBlogs = [
  {
    title: "10 Must-Have Tech Gadgets for 2025",
    description:
      "Stay ahead of the curve with these cutting-edge gadgets that will make your life smarter and more efficient.",
  },
  {
    title: "The Ultimate Guide to Choosing the Best Air Fryer for Your Kitchen",
    description:
      "Confused about which air fryer to buy? This guide compares the top models for performance, price, and features.",
  },
  {
    title: "Top 5 Budget Fitness Equipment for Home Workouts",
    description:
      "Build your dream home gym without breaking the bank. Check out these affordable and effective fitness tools.",
  },
];

const LatestBlogs = () => {
  const motion = useMotion();
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
              Latest Product Reviews, Comparisons, and Expert Buying Guides
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
              Stay updated with our latest product reviews, in-depth
              comparisons, and helpful buying guides designed to make your
              online shopping experience easier and smarter.
            </p>
          </motion.div>
        </header>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:gap-8 w-full h-full lg:h-60">
          {latestBlogs.map((latestBlog, index) => (
            <motion.div
              className="h-full"
              transition={{
                type: "spring",
                delay: Number(((index + 1) * 0.1 + 0.1).toFixed(1)),
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={index}
            >
              <BlogCard
                key={index}
                title={latestBlog.title}
                description={latestBlog.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
