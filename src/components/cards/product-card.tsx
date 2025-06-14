import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

interface ProductCardProps {
  topProduct: {
    name: string;
    description: string;
    features: string[];
  };
}

const ProductCard = ({ topProduct }: ProductCardProps) => {
  return (
    <article className="w-full">
      <Card className="border-none shadow-none bg-card transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
                  <li className="flex flex-row gap-2">
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
            <Button className="bg-success text-success-foreground w-full cursor-pointer hover:bg-success/80">
              Check Out Here
            </Button>
          </footer>
        </CardFooter>
      </Card>
    </article>
  );
};

export default ProductCard;
