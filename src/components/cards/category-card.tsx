import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";

interface CategoryCardProps {
  title?: string;
  image?: string;
  icon?: ReactNode | string;
}

const CategoryCard = ({ title, image, icon }: CategoryCardProps) => {
  return (
    <article className="w-full h-full cursor-pointer">
      <Card className="border-none shadow-none bg-white h-full overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={image || "/globe.svg"}
            alt={title || "Category image"}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-black opacity-40"
            aria-hidden="true"
          />
        </div>
        <CardHeader className="font-bold relative z-10 text-white flex items-center justify-center h-32 text-xl">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-white">{icon}</CardDescription>
        </CardHeader>
      </Card>
    </article>
  );
};

export default CategoryCard;
