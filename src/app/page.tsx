import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Recommendations from "@/components/sections/recommendations";

export default function Home() {
  return (
    <>
      <div className="bg-background h-16 flex items-center px-5">
        <Header />
      </div>
      <main aria-label="Main Content" tabIndex={-1}>
        <div className="bg-background px-5 container mx-auto flex justify-between items-center py-5">
          <Hero />
        </div>
        <div className="bg-white container mx-auto flex justify-between items-center py-5">
          <Recommendations />
        </div>
      </main>
    </>
  );
}
