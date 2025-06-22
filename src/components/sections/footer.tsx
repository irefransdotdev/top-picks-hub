"use client";

import { useMotion } from "../providers/scroll/MotionProvider";

const Footer = () => {
  const motion = useMotion();
  return (
    <footer className="text-white">
      <div className="container mx-auto flex justify-center items-center">
        <motion.div
          className="box"
          transition={{ type: "spring", delay: 0.2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center">
            © 2025 TopPicksHub. All rights reserved.
          </h2>
          <p className="text-white/80">
            Your trusted source for product reviews and buying guides.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
