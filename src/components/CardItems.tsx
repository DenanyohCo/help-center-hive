"use client";
import { Site, Media } from "../payload-types";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";
import { PiArrowSquareOutFill } from "react-icons/pi";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";

const CardItems = () => {
    const {
        data: sites,
        isLoading,
        error,
    } = useQuery("sites", () =>
        axios.get("/api/websites").then((res) => res.data)
    );
    const cardItems: Site[] = sites?.docs || [];
    return (
        <section>
            <div className="container mb-40 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
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
                                                        // unoptimized
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
                                                        // unoptimized
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
    );
};

export default CardItems;
