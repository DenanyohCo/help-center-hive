"use client"
import { usePathname } from "next/navigation";
import { Site, Media, Category } from "../../../payload-types";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { PiArrowSquareOutFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
const CategoryPage = () => {
    const helmetContext: { helmet?: any } = {};
    useEffect(() => {
        const { helmet } = helmetContext;
        helmet && helmet.toComponent().forEach((component: any) => {
            if (component && component.props) {
                document.title = component.props.title || '';
                let metaDescription = document.querySelector('meta[name="description"]');
                if (metaDescription) {
                    metaDescription.setAttribute('content', component.props.content || '');
                }
            }
        });
    }, []);
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
    const category = categories?.docs.find((category: Category) => category.name === path);

    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <title>{category?.meta?.title}</title>
                <meta name="description" content={category?.meta?.description} />
                <meta property="og:image" content={category?.meta?.image} />
            </Helmet>
            <section className="container">
                <div className="mt-6 mx-auto flex flex-col items-center py-20 text-center">
                    <div className="mx-auto max-w-5xl">
                        <h1 className="container mb-4 text-4xl font-bold  tracking-[-.008em] text-gray-950 md:text-6xl flex-wrap">
                            The Best
                            {` ${path?.replace('%20', " ")} `}
                            Help Center Site Examples
                        </h1>
                    </div>
                </div>
                <div className="container mt-6 flex max-w-5xl flex-row flex-wrap justify-center gap-4 mb-10 pb-10">
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
                                                <Link href={`/sites/${item.path}`}>
                                                    <CardHeader>
                                                        <Image
                                                            unoptimized
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
                    )}
                </div>
            </section>
        </HelmetProvider>)
};

export default CategoryPage;