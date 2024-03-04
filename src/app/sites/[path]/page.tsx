"use client";
import { usePathname } from "next/navigation";
import { Site, Media, Category } from "../../../payload-types";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { PiArrowSquareOutFill } from "react-icons/pi";
import React from "react";
import Head from 'next/head';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const SitePage = () => {
    const pathName = usePathname();
    const path = pathName.split("/").pop();
    const {
        data: sites,
        isLoading,
        error,
    } = useQuery("sites", () =>
        axios.get(`/api/websites`).then((res) => res.data)
    );
    const similarSites = sites?.docs.filter((site: Site) => site.path !== path);
    const site = sites?.docs.find((site: Site) => site.path === path);
    function shuffle(array: any[]) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    const randomSites = shuffle(similarSites || []).slice(0, 3);
    return (
        <>
            <Head>
                <title>{site?.seo?.title}</title>
                <meta name="description" content={site?.seo?.description} />
                <meta property="og:title" content={site?.seo?.ogTitle} />
                <meta property="og:description" content={site?.seo?.ogDescription} />
                <meta property="og:image" content={site?.seo?.ogImage?.url} />
                <meta name="twitter:title" content={site?.seo?.twitterTitle} />
                <meta name="twitter:description" content={site?.seo?.twitterDescription} />
                <meta name="twitter:image" content={site?.seo?.twitterImage?.url} />
            </Head>
            <section className="container">
                <Link href={"/"} className="flex items-center py-4">
                    <MdArrowBackIos /> See All Inspiration
                </Link>
                <div className="flex flex-col md:flex-row-reverse">
                    <div className="my-4">
                        <div className="h-fit w-auto border-2 p-2 px-4">
                            <h1 className="mb-2 text-2xl font-bold">
                                {site?.name}
                            </h1>
                            <Link
                                href={`${site?.url}`}
                                className="mb-2 flex items-center"
                            >
                                See the full website{" "}
                                <PiArrowSquareOutFill className="ml-1 text-lg text-[#C1982D]" />
                            </Link>
                            <p className="text-base">{site?.description}</p>
                            <div className="my-4 flex">
                                {site?.category &&
                                    site?.category.map((category: Category) => (
                                        <div
                                            key={category.id}
                                            className="mr-2 rounded-lg bg-[#F6F1D1] p-0.5 px-2 text-xs"
                                        >
                                            {category.name}
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="my-2 hidden h-fit border-2 md:block">
                            <div className="bg-[#F6F1D1] p-2 px-4 text-4xl font-bold">
                                Reach 1000s with your ad here
                            </div>
                            <div className="p-2">
                                sponsored by [your brand here]
                            </div>
                        </div>
                    </div>
                    <div className="my-4 mr-4 w-auto border-2">
                        <Image
                            unoptimized
                            src={(site?.image as Media)?.url ?? ""}
                            alt={site?.name}
                            width="1500"
                            height="1500"
                            className="h-full w-full max-w-full"
                        />
                    </div>
                </div>
                <div className="my-8 flex flex-col justify-center bg-[#EDE8DD] py-8">
                    <h1 className="mb-8 ml-16 text-4xl font-semibold">
                        Similar Inspiration
                    </h1>
                    <div className="container mb-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                        {randomSites.map((item: Site, index: number) => (
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
                                                <Link href={`${item.path}`}>
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
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SitePage;
