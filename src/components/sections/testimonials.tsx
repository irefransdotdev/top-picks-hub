import TestimonialCard from "../cards/testimonial-card";

const testimonials = [
  {
    firstName: "Mark",
    lastName: "Doe",
    profession: "Tech Enthusiast",
    title: "TopPicksHub saved me so much time!",
    message:
      "I used to spend hours comparing products, but thanks to TopPicksHub's honest reviews, I found the perfect laptop in minutes. Highly recommended!",
  },
  {
    firstName: "Sarah",
    lastName: "Loe",
    profession: "Homeowner",
    title: "Their recommendations never fail.",
    message:
      "I used to spend hours comparing products, but thanks to TopPicksHub's honest reviews, I found the perfect laptop in minutes. Highly recommended!",
  },
  {
    firstName: "Jason",
    lastName: "Roe",
    profession: "Fitness Coach",
    title: "A must-visit before shopping online.",
    message:
      "I always check TopPicksHub before buying anything new. Their top picks and comparisons are spot-on!",
  },
];

const Testimonials = () => {
  return (
    <section className="text-gray-900 w-full py-5">
      <div className="px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <h2 className="text-xl text-primary font-bold">
            What Our Readers Say
          </h2>
          <p className="text-secondary">
            Join thousands of happy readers who rely on TopPicksHub for their
            smart buying decisions!
          </p>
        </header>
        <div className="flex flex-col gap-4 w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
