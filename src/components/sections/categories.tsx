import CategoryCard from "../cards/category-card";
import {
  CookingPot,
  Laptop,
  Shirt,
  SoapDispenserDroplet,
  Watch,
} from "lucide-react";

const Categories = () => {
  return (
    <section className="text-gray-900 w-full">
      <div className="px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <h2 className="text-xl text-primary font-bold">
            Shop by Category - Find the Best Products for Every Need
          </h2>
          <p className="text-secondary">
            Browse our top product categories, including tech gadgets, home
            essentials, fitness equipment, fashion accessories, and
            more—handpicked for quality and performance.
          </p>
        </header>
        <div className="grid grid-cols-2 gap-4 w-full text-left">
          {/* Left column: 2 cards */}
          <div className="flex flex-col gap-4">
            <CategoryCard
              title="Tech & Gadgets"
              image="/assets/categories/tech-and-gadgets.webp"
              icon={<Laptop />}
            />
            <CategoryCard
              title="Fashion & Accessories"
              image="/assets/categories/fashion-and-accessories.webp"
              icon={<Shirt />}
            />
          </div>
          {/* Right column: 3 cards */}
          <div className="flex flex-col gap-4">
            <CategoryCard
              title="Home & Kitchen Essentials"
              image="/assets/categories/home-and-kitchen-essentials.webp"
              icon={<CookingPot />}
            />
            <CategoryCard
              title="Fitness & Health Gear"
              image="/assets/categories/fitness-and-health-gear.webp"
              icon={<Watch />}
            />
            <CategoryCard
              title="Beauty &  Personal Care"
              image="/assets/categories/beauty-and-personal-care.webp"
              icon={<SoapDispenserDroplet />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
