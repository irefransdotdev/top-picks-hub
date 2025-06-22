"use client";
import Link from "next/link";
import { useMotion } from "../providers/scroll/MotionProvider";
import { useRouter } from "next/navigation";

const Header = () => {
  const motion = useMotion();
  const router = useRouter();
  return (
    <header className="text-white" aria-label="Site Header">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/"
            className="font-bold"
            title="Go to TopPickHubs homepage"
            onClick={() => router.push("/")}
          >
            Top Picks Hub
          </Link>
        </motion.div>
        <nav aria-label="Main Navigation">
          {/* Navigation links go here in the future */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
