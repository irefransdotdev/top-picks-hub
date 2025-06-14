import ProductCard from "../cards/product-card";

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
  return (
    <section className="text-gray-900 w-full">
      <div className="px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <h2 className="text-xl text-primary font-bold">
            Top 3 Recommended Products You Can't Miss This Month
          </h2>
          <p className="text-secondary">
            Explore our top 3 best-selling and highly-rated products—carefully
            selected to offer you the best value, quality, and customer
            satisfaction.
          </p>
        </header>
        <div className="flex flex-col gap-4 w-full">
          {topProducts.map((topProduct, index) => (
            <ProductCard key={index} topProduct={topProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
