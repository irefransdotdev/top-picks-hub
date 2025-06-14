"use client";

import ProductCard from "../cards/product-card";
import { useMotion } from "../providers/scroll/MotionProvider";

const topProducts = [
  {
    name: "Apple AirPods Pro (2nd Generation)",
    description:
      "Experience exceptional sound quality with Apple AirPods Pro 2. Featuring Active Noise Cancellation, adaptive transparency, and improved battery life, these wireless earbuds are perfect for both work and play.",
    features: [
      "Active Noise Cancellation",
      "Sweat & Water Resistant",
      "30-Hour Battery Life",
    ],
  },
  {
    name: "Ninja Foodi 8-Quart Air Fryer",
    description:
      "Cook healthier meals with less oil using the Ninja Foodi Air Fryer. With multiple cooking modes—air fry, bake, roast, and dehydrate—this kitchen essential saves time and delivers crispy, delicious results.",
    features: [
      "8-Quart Capacity",
      "4-in-1 Functionality",
      "Dishwasher-Safe Parts",
    ],
  },
  {
    name: "Fitbit Charge 6",
    description:
      "Track your health like a pro with Fitbit Charge 6. Monitor your heart rate, sleep patterns, stress levels, and activity to stay fit and active. Its long-lasting battery ensures uninterrupted fitness tracking.",
    features: [
      "7-Day Battery Life",
      "GPS & Heart Rate Tracking",
      " Stress Management Tools",
    ],
  },
];

const Recommendations = () => {
  const motion = useMotion();

  return (
    <section className="text-gray-900 w-full py-5">
      <div className="px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <motion.div
            className="box"
            transition={{ type: "spring" }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-xl text-primary font-bold">
              Top 3 Recommended Products You Can&#39;t Miss This Month
            </h2>
          </motion.div>
          <motion.div
            className="box"
            transition={{ type: "spring" }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-secondary">
              Explore our top 3 best-selling and highly-rated products—carefully
              selected to offer you the best value, quality, and customer
              satisfaction.
            </p>
          </motion.div>
        </header>
        <div className="flex flex-col gap-4 w-full">
          {topProducts.map((topProduct, index) => (
            <motion.div
              className="box"
              transition={{ type: "spring" }}
              initial={{ opacity: 0, y: 61 }}
              whileInView={{ opacity: 1, y: 0 }}
              key={index}
            >
              <ProductCard topProduct={topProduct} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
