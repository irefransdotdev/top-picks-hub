import React from "react";

const Header = () => {
  return (
    <header className="bg-background text-white p-4" aria-label="Site Header">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="flex items-center gap-3 font-bold"
          title="Go to TopPickHubs homepage"
        >
          Top Picks Hub
        </a>
        <nav aria-label="Main Navigation">
          {/* Navigation links go here in the future */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
