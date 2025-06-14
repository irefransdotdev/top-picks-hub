import ProductCard from "../cards/product-card";

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
        <div className="flex flex-col gap-2.5 w-full">
          {new Array(3).fill(null).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
