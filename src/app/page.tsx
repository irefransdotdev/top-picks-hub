import Categories from "@/components/sections/categories";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import LatestBlogs from "@/components/sections/latest-blogs";
import Recommendations from "@/components/sections/recommendations";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-background h-16 flex items-center px-5">
        <Header />
      </div>
      <main aria-label="Main Content" tabIndex={-1}>
        <div className="bg-background">
          <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
            <Hero />
          </div>
        </div>
        <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
          <Recommendations />
        </div>
        <div className="bg-muted">
          <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
            <Categories />
          </div>
        </div>
        <div className="bg-white">
          <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
            <LatestBlogs />
          </div>
        </div>
        <div className="bg-muted">
          <div className="px-5 container mx-auto max-w-lg flex justify-between items-center py-5">
            <Testimonials />
          </div>
        </div>
      </main>
    </>
  );
}
