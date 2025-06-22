"use client";

import CategoryCard from "../cards/category-card";
import {
  CookingPot,
  Laptop,
  Shirt,
  SoapDispenserDroplet,
  Watch,
} from "lucide-react";
import { useMotion } from "../providers/scroll/MotionProvider";

const Categories = () => {
  const motion = useMotion();
  return (
    <section className="text-gray-900 w-full container mx-auto">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        <header>
          <motion.div
            className="box"
            transition={{ type: "spring" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl text-primary font-bold">
              Shop by Category - Find the Best Products for Every Need
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
              Browse our top product categories, including tech gadgets, home
              essentials, fitness equipment, fashion accessories, and
              more—handpicked for quality and performance.
            </p>
          </motion.div>
        </header>
        <div className="grid grid-cols-2 gap-4 lg:gap-8 w-full text-left">
          {/* Left column: 2 cards */}
          <div className="flex flex-col gap-4 lg:gap-8">
            <motion.div
              className="w-full h-full"
              transition={{ type: "spring", delay: 0.2 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full h-full"
              >
                <CategoryCard
                  title="Tech & Gadgets"
                  image="/assets/categories/tech-and-gadgets.webp"
                  icon={<Laptop />}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full h-full"
              transition={{ type: "spring", delay: 0.3 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full h-full"
              >
                <CategoryCard
                  title="Fashion & Accessories"
                  image="/assets/categories/fashion-and-accessories.webp"
                  icon={<Shirt />}
                />
              </motion.div>
            </motion.div>
          </div>
          {/* Right column: 3 cards */}
          <div className="flex flex-col gap-4 lg:gap-8">
            <motion.div
              className="w-full h-full"
              transition={{ type: "spring", delay: 0.4 }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full h-full"
              >
                <CategoryCard
                  title="Home & Kitchen Essentials"
                  image="/assets/categories/home-and-kitchen-essentials.webp"
                  icon={<CookingPot />}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full h-full"
              transition={{ type: "spring", delay: 0.5 }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full h-full"
              >
                <CategoryCard
                  title="Fitness & Health Gear"
                  image="/assets/categories/fitness-and-health-gear.webp"
                  icon={<Watch />}
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="w-full h-full"
              transition={{ type: "spring", delay: 0.6 }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full h-full"
              >
                <CategoryCard
                  title="Beauty &  Personal Care"
                  image="/assets/categories/beauty-and-personal-care.webp"
                  icon={<SoapDispenserDroplet />}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
