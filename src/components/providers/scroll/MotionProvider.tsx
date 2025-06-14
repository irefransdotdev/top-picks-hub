"use client";
import * as motion from "motion/react-client";
import { createContext, useContext } from "react";

const MotionContext = createContext<typeof motion | null>(null);

export const useMotion = () => {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error("useMotion must be used within a MotionProvider");
  return ctx;
};

export const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <MotionContext.Provider value={motion}>{children}</MotionContext.Provider>
  );
};
