import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  const buttonItems = [
    {
      name: "social",
      href: "/social",
    },
    {
      name: "finance",
      href: "/finance",
    },
    {
      name: "consumer products",
      href: "/consumer-products",
    },
    {
      name: "home services",
      href: "/home-services",
    },
    {
      name: "media",
      href: "/media",
    },
    {
      name: "entertainment",
      href: "/entertainment",
    },
    {
      name: "tech",
      href: "/tech",
    },
    {
      name: "crm",
      href: "/crm",
    },
    {
      name: "travel",
      href: "/travel",
    },
    {
      name: "education",
      href: "/education",
    },
    {
      name: "app",
      href: "/app",
    },
    {
      name: "ecommerce",
      href: "/ecommerce",
    },
    {
      name: "health",
      href: "/health",
    },
    {
      name: "saas",
      href: "/saas",
    },
  ];
  return (
    <section className="py-8">
      <div className="container py-20 mx-auto text-center flex flex-col items-center">
        <div className="max-w-5xl mx-auto">
        <h1 className="font-bold text-5xl md:text-6xl  text-gray-950 tracking-[-.008em] mb-4 ">
          The Best Help Center Examples
        </h1>
        </div>
        
        <div className="max-w-3xl mx-auto">
        <p className="text-lg max-sm:px-4  text-muted-foreground">
          Discover curated exceptional help center designs across the web.Uncover ideas, trends, and inspirations to transform your help center.
        </p>
        </div>
        <div className="max-w-5xl flex flex-row gap-4 mt-12 flex-wrap justify-center">
          {buttonItems.map((buttonItem, index) => (
            <Link key={index} href={buttonItem.href}>
              <Button
                variant={"secondary"}
                className="bg-[#ede8dd] md:text-lg text-xs"
              >
                {buttonItem.name.toUpperCase()}{" "}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
