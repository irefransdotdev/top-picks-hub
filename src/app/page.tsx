import Header from "@/components/sections/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <main aria-label="Main Content" tabIndex={-1}>
          {/* Main content goes here */}
        </main>
      </div>
    </>
  );
}
