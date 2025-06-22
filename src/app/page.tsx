import AboutUs from "@/components/sections/about-us";
import Categories from "@/components/sections/categories";
import ContactUs from "@/components/sections/contact-us";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import LatestBlogs from "@/components/sections/latest-blogs";
import Recommendations from "@/components/sections/recommendations";
import TestimonialFeedback from "@/components/sections/testimonial-feedback";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-background h-16 flex items-center px-5">
        <Header />
      </div>
      <main aria-label="Main Content" tabIndex={-1}>
        <div className="bg-background">
          <div className="px-5 container mx-auto max-w-lg lg:mx-0 lg:max-w-full flex justify-between items-center py-5 lg:py-10">
            <Hero />
          </div>
        </div>
        <div className="px-5 container mx-auto max-w-lg lg:mx-0 lg:max-w-full flex justify-between items-center py-5 lg:py-10">
          <Recommendations />
        </div>
        <div className="bg-muted">
          <div className="px-5 container mx-auto max-w-lg lg:mx-0 lg:max-w-full flex justify-between items-center py-5 lg:py-10">
            <Categories />
          </div>
        </div>
        <div className="bg-white">
          <div className="px-5 container mx-auto max-w-lg lg:mx-0 lg:max-w-full flex justify-between items-center py-5 lg:py-10">
            <LatestBlogs />
          </div>
        </div>
        <div className="bg-muted">
          <div className="px-5 container mx-auto max-w-lg lg:mx-0 lg:max-w-full flex justify-between items-center py-5 lg:py-10">
            <Testimonials />
          </div>
        </div>
        <div className="bg-white">
          <div className="px-5 container mx-auto max-w-lg lg:mx-0 lg:max-w-full flex justify-between items-center py-5 lg:py-10">
            <AboutUs />
          </div>
        </div>
        <div className="bg-muted">
          <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
            <ContactUs />
          </div>
        </div>
        <div className="bg-white">
          <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
            <TestimonialFeedback />
          </div>
        </div>
      </main>
      <div className="bg-blue-dark">
        <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
          <Footer />
        </div>
      </div>
    </>
  );
}
