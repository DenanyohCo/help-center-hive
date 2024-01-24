import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
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
    <>
      <div className="py-20 mx-auto text-center flex flex-col items-center w-[60rem]">
        <h1 className="font-bold text-8xl tracking-tight text-gray-950">
          The Best Help Center Site Examples
        </h1>
        <p className="mt-6 text-2xl max-w-prose text-muted-foreground">
          Discover a curated set of exceptional help center designs across the
          web.Uncover ideas, trends, and inspirations to transform your help
          center.
        </p>
        <div className="flex flex-row gap-4 mt-6 flex-wrap justify-center">
          {/* TODO: Render buttons from PayloadCSS */}
          {buttonItems.map((buttonItem, index) => (
            <Link key={index} href={buttonItem.href}>
              <Button variant={"secondary"} className="bg-[#ede8dd]">
                {buttonItem.name.toUpperCase()}{" "}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}