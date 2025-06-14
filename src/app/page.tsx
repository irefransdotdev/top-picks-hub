import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <div className="bg-background h-16 flex items-center px-5">
        <Header />
      </div>
      <div className="bg-background px-5">
        <main aria-label="Main Content" tabIndex={-1}>
          <div className="container mx-auto flex justify-between items-center py-5">
            <Hero />
          </div>
        </main>
      </div>
    </>
  );
}
