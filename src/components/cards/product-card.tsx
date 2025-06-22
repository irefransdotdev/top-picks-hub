"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { useMotion } from "../providers/scroll/MotionProvider";

interface ProductCardProps {
  topProduct: {
    name: string;
    description: string;
    features: string[];
  };
}

const ProductCard = ({ topProduct }: ProductCardProps) => {
  const motion = useMotion();
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="h-full">
      <article className="w-full cursor-pointer h-full">
        <Card className="border-none shadow-none bg-card h-full flex flex-col justify-between">
          <CardHeader>
            <CardTitle>
              <h3 className="text-xl font-bold text-primary text-start">
                {topProduct.name}
              </h3>
            </CardTitle>
            <CardDescription>
              <section className="text-secondary">
                <ul aria-label="Product features">
                  {topProduct.features.map((feature, index) => (
                    <li className="flex flex-row gap-2" key={index}>
                      <div className="w-5 h-5">
                        <Check aria-hidden="true" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <footer className="w-full">
              <motion.div whileTap={{ scale: 0.9 }} className="w-full">
                <Button className="bg-success text-success-foreground w-full cursor-pointer hover:bg-success/80">
                  Check Out Here
                </Button>
              </motion.div>
            </footer>
          </CardFooter>
        </Card>
      </article>
    </motion.div>
  );
};

export default ProductCard;
