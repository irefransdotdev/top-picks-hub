import Link from "next/link";

const Header = () => {
  return (
    <header className="text-white" aria-label="Site Header">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold" title="Go to TopPickHubs homepage">
          Top Picks Hub
        </Link>
        <nav aria-label="Main Navigation">
          {/* Navigation links go here in the future */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
