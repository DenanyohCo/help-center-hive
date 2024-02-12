"use client"
import { usePathname } from "next/navigation";
import { Site, Media, Category } from "../../../payload-types";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";
import { PiArrowSquareOutFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
const CategoryPage = () => {
    const pathName = usePathname();
    const path = pathName.split("/").pop();
    const {
        data: sites,
    } = useQuery("sites", () =>
        axios.get(`/api/websites`).then((res) => res.data)
    );
    let cardItems: any[] = [];
    sites?.docs.forEach((item: Site) => {
        item.category?.forEach((e: any) => {
            if (path === e.name) {
                cardItems.push(item);
            }
        })
    })
    const {
        data: categories,
    } = useQuery("category", () =>
        axios.get("/api/categories").then((res) => res.data)
    );
    const buttonItems: Category[] = categories?.docs.filter((category: Category) => category.name !== path) || [];
    return (
        <section className="container">
            <div className="mt-6 mx-auto flex flex-col items-center py-20 text-center">
                <div className="mx-auto max-w-5xl">
                    <h1 className="mb-4 text-4xl font-bold  tracking-[-.008em] text-gray-950 md:text-6xl flex-wrap">
                        The Best
                        {` ${path?.replace('%20', " ")} `}
                        Help Center Site Examples
                    </h1>
                </div>
            </div>
            <div className="mt-6 flex max-w-5xl flex-row flex-wrap justify-center gap-4 mb-10 pb-10">
                {buttonItems.map((buttonItem, index) => (
                    <Link key={index} href={`${buttonItem.name}`}>
                        <Button
                            variant={"secondary"}
                            className="bg-[#ede8dd] text-xs md:text-lg"
                        >
                            {buttonItem.name.toUpperCase()}{" "}
                        </Button>
                    </Link>
                ))}
            </div>
            <div className="mb-40 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {cardItems.map(
                    (item, index) =>
                        item.is_featured && (
                            <React.Fragment key={index}>
                                <div className="h-auto w-full">
                                    <div className="group relative">
                                        <div className="absolute right-5 top-5 hidden group-hover:block">
                                            <Link
                                                className="flex h-9 w-9 items-center justify-center rounded-sm bg-[theme(colors.zinc.950/.6)]"
                                                href={item.url}
                                            >
                                                <span className="sr-only">
                                                    Visit Website
                                                </span>
                                                <PiArrowSquareOutFill className="text-2xl text-white" />
                                            </Link>
                                        </div>
                                        <div className="mb-4 aspect-[4/5]">
                                            <Card className="mb-2 h-full overflow-hidden rounded bg-white shadow-sm transition duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-black/10 dark:bg-zinc-800">
                                                <Link href={`sites/${item.path}`}>
                                                    <CardHeader>
                                                        <Image
                                                            src={
                                                                (
                                                                    item.image as Media
                                                                )?.url ?? ""
                                                            }
                                                            alt={
                                                                (
                                                                    item.image as Media
                                                                )?.alt ?? ""
                                                            }
                                                            width="380"
                                                            height="380"
                                                            className="h-full w-full max-w-full object-cover object-top"
                                                        />
                                                    </CardHeader>
                                                </Link>
                                            </Card>
                                        </div>
                                        <CardContent>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardDescription>
                                                {item.heading}
                                            </CardDescription>
                                        </CardContent>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                )}
                <div className="col-span-full row-span-2 my-4">
                    <NewsletterCTA />
                </div>
                {cardItems.map(
                    (item, index) =>
                        !item.is_featured && (
                            <React.Fragment key={index}>
                                <div className="h-auto w-full">
                                    <div className="group relative">
                                        <div className="absolute right-5 top-5 hidden group-hover:block">
                                            <Link
                                                className="flex h-9 w-9 items-center justify-center rounded-sm bg-[theme(colors.zinc.950/.6)]"
                                                href={item.url}
                                            >
                                                <span className="sr-only">
                                                    Visit Website
                                                </span>
                                                <PiArrowSquareOutFill className="text-2xl text-white" />
                                            </Link>
                                        </div>
                                        <div className="mb-4 aspect-[4/5]">
                                            <Card className="mb-2 h-full overflow-hidden rounded bg-white shadow-sm transition duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-black/10 dark:bg-zinc-800">
                                                <Link href={`sites/${item.path}`}>
                                                    <CardHeader>
                                                        <Image
                                                            src={
                                                                (
                                                                    item.image as Media
                                                                )?.url ?? ""
                                                            }
                                                            alt={
                                                                (
                                                                    item.image as Media
                                                                )?.alt ?? ""
                                                            }
                                                            width="380"
                                                            height="380"
                                                            className="h-full w-full max-w-full object-cover object-top"
                                                        />
                                                    </CardHeader>
                                                </Link>
                                            </Card>
                                        </div>
                                        <CardContent>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardDescription>
                                                {item.heading}
                                            </CardDescription>
                                        </CardContent>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                )}
            </div>
        </section>
    )
};

export default CategoryPage;