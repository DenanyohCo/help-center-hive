"use client"
import { Category } from '../payload-types';
import { Button } from "@/components/ui/button";
import { useQuery } from 'react-query';
import axios from 'axios';
import Link from "next/link";
const Hero = () => {
    const { data: categories, isLoading, error } = useQuery('category', () =>
        axios.get('/api/categories').then((res) => res.data)
    );
    const buttonItems: Category[] = categories?.docs || [];
    // const buttonItems = [
    //     {
    //         name: "social",
    //         href: "/social",
    //     },
    //     {
    //         name: "finance",
    //         href: "/finance",
    //     },
    //     {
    //         name: "consumer products",
    //         href: "/consumer-products",
    //     },
    //     {
    //         name: "home services",
    //         href: "/home-services",
    //     },
    //     {
    //         name: "media",
    //         href: "/media",
    //     },
    //     {
    //         name: "entertainment",
    //         href: "/entertainment",
    //     },
    //     {
    //         name: "tech",
    //         href: "/tech",
    //     },
    //     {
    //         name: "crm",
    //         href: "/crm",
    //     },
    //     {
    //         name: "travel",
    //         href: "/travel",
    //     },
    //     {
    //         name: "education",
    //         href: "/education",
    //     },
    //     {
    //         name: "app",
    //         href: "/app",
    //     },
    //     {
    //         name: "ecommerce",
    //         href: "/ecommerce",
    //     },
    //     {
    //         name: "health",
    //         href: "/health",
    //     },
    //     {
    //         name: "saas",
    //         href: "/saas",
    //     },
    // ];
    return (
        <section className="py-8">
            <div className="container mx-auto flex flex-col items-center py-20 text-center">
                <div className="mx-auto max-w-5xl">
                    <h1 className="mb-4 text-5xl font-bold  tracking-[-.008em] text-gray-950 md:text-6xl ">
                        The Best Help Center Examples
                    </h1>
                </div>

                <div className="mx-auto max-w-3xl">
                    <p className="text-lg text-muted-foreground  max-sm:px-4">
                        Discover curated exceptional help center designs across
                        the web.Uncover ideas, trends, and inspirations to
                        transform your help center.
                    </p>
                </div>
                <div className="mt-12 flex max-w-5xl flex-row flex-wrap justify-center gap-4">
                    {buttonItems.map((buttonItem, index) => (
                        <Link key={index} href={`/${buttonItem.name}`}
                        >
                            <Button
                                variant={"secondary"}
                                className="bg-[#ede8dd] text-xs md:text-lg"
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
