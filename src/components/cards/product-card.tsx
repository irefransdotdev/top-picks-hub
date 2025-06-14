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

const ProductCard = () => {
  return (
    <article className="w-full">
      <Card className="border-none">
        <CardHeader>
          <CardTitle>
            <h3 className="text-xl font-bold text-primary">Product #1</h3>
          </CardTitle>
          <CardDescription>
            <section className="text-secondary">
              {/* Add product image here */}
              <ul aria-label="Product features">
                <li className="flex flex-row gap-2">
                  <div className="w-5 h-5">
                    <Check aria-hidden="true" />
                  </div>
                  <span>Affordable and high-quality</span>
                </li>
                <li className="flex flex-row gap-2">
                  <div className="w-5 h-5">
                    <Check aria-hidden="true" />
                  </div>
                  <span>Top-rated by users</span>
                </li>
                <li className="flex flex-row gap-2">
                  <div className="w-5 h-5">
                    <Check aria-hidden="true" />
                  </div>
                  <span className="text-start">
                    Ideal for [insert niche, e.g., tech lovers, home
                    improvement, fitness]
                  </span>
                </li>
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
