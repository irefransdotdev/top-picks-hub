import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className=" text-gray-900" aria-labelledby="hero-heading">
      <div className="container px-4 gap-5 flex flex-col items-center text-center">
        <header>
          <h2 id="hero-heading" className="text-xl text-primary-foreground">
            Welcome to <span className="font-bold">TopPickHubs</span>
          </h2>
        </header>
        <p className="text-4xl text-primary-foreground leading-8">
          Your Trusted Source for the Best Product Reviews and Buying Guides!
        </p>
        <p className="text-primary-foreground">
          Looking for the best products, honest reviews, and expert
          recommendations? At TopPicksHub, we make online shopping easier by
          curating the top-rated gadgets, lifestyle products, home essentials,
          and all in one.
        </p>
        <footer className="flex flex-col w-full gap-2.5">
          <a href="#top-picks" role="button" aria-label="Browse Top Picks">
            <Button className="bg-button-primary w-full">
              Browse Top Picks
            </Button>
          </a>
          <a href="#categories" role="button" aria-label="Explore Categories">
            <Button className="border border-button-primary bg-transparent w-full">
              Explore Categories
            </Button>
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Hero;
