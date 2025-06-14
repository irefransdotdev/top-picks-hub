import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface TestimonialCardProps {
  testimonial: {
    firstName: string;
    lastName: string;
    profession: string;
    title: string;
    message: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { firstName, lastName, profession, title, message } = testimonial;
  return (
    <article className="w-full h-full cursor-pointer  hover:outline hover:outline-secondary rounded-lg">
      <Card className="border-none shadow-none bg-white flex">
        <CardHeader className="font-bold text-xl">
          <CardTitle className="text-xl">
            <div className="flex flex-row gap-2 items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>
                  {`${firstName?.[0]} ${lastName?.[0]}`}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h2 className="text-start font-bold text-primary">{`${firstName} ${lastName}`}</h2>
                <p className="text-secondary text-start font-normal text-sm">
                  {profession}
                </p>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="font-bold text-md text-start text-primary">{title}</h2>
          <p className="text-start text-secondary">{message}</p>
        </CardContent>
      </Card>
    </article>
  );
};

export default TestimonialCard;
