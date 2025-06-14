import TestimonialForm from "../forms/testimonial-form";

const TestimonialFeedback = () => {
  return (
    <section className="text-gray-900 w-full py-5">
      <div className="px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <h2 className="text-xl text-primary font-bold">
            Share Your Experience with TopPicksHub!
          </h2>
          <p className="text-secondary">
            We&#39;d love to hear how TopPicksHub helped you make smarter buying
            decisions. Share your testimonial below:
          </p>
        </header>
        <div className="w-full">
          <TestimonialForm />
        </div>
      </div>
    </section>
  );
};

export default TestimonialFeedback;
