import BlogCard from "../cards/blog-card";

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
  return (
    <section className="text-gray-900 w-full">
      <div className="px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <h2 className="text-xl text-primary font-bold">
            Latest Product Reviews, Comparisons, and Expert Buying Guides
          </h2>
          <p className="text-secondary">
            Stay updated with our latest product reviews, in-depth comparisons,
            and helpful buying guides designed to make your online shopping
            experience easier and smarter.
          </p>
        </header>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            {latestBlogs.map((latestBlog, index) => (
              <BlogCard
                key={index}
                title={latestBlog.title}
                description={latestBlog.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
