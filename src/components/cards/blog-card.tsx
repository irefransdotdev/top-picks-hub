import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface BlogCardProps {
  title?: string;
  description?: string;
}

const BlogCard = ({ title, description }: BlogCardProps) => {
  return (
    <article className="w-full h-full cursor-pointer  hover:outline hover:outline-secondary rounded-lg">
      <Card className="border-none shadow-none bg-card h-full">
        <CardHeader className="font-bold text-xl">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-start font-normal text-secondary">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <footer className="w-full">
            <Button className="bg-button-primary w-full cursor-pointer hover:bg-button-primary/80">
              Read More
            </Button>
          </footer>
        </CardFooter>
      </Card>
    </article>
  );
};

export default BlogCard;
