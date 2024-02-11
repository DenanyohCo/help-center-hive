"use client";
import { usePathname } from 'next/navigation';
import { Site, Media, Category } from '../../../payload-types';
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowBackIos } from "react-icons/md";
import { PiArrowSquareOutFill } from "react-icons/pi";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const SitePage = () => {
    const pathName = usePathname();
    const path = pathName.split('/').pop();
    const { data: sites, isLoading, error } = useQuery('sites', () =>
        axios.get(`/api/sites`).then((res) => res.data)
    );
    const similarSites = sites?.docs.filter((site: Site) => site.path !== path);
    const site = sites?.docs.find((site: Site) => site.path === path);
    function shuffle(array: any[]) {
        let currentIndex = array.length, temporaryValue, randomIndex;
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
        <section className='container'>
            <Link href={"/"} className='flex items-center py-4'>
                <MdArrowBackIos /> See All Inspiration
            </Link>
            <div className='flex flex-col md:flex-row-reverse'>
                <div className='my-4'>
                    <div className='w-auto h-fit border-2 p-2 px-4'>
                        <h1 className='text-2xl font-bold mb-2'>{site?.name}</h1>
                        <Link href={`${site?.url}`} className='flex items-center mb-2'>
                            See the full website <PiArrowSquareOutFill className='text-[#C1982D] text-lg ml-1' />
                        </Link>
                        <p className='text-base'>{site?.description}</p>
                        <div className='flex my-4'>
                            {site?.category.map((category: Category) => (
                                <div key={category.id} className='text-xs p-0.5 rounded-lg bg-[#F6F1D1] mr-2 px-2'>
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='h-fit my-2 border-2 md:block hidden'>
                        <div className='bg-[#F6F1D1] p-2 text-4xl font-bold px-4'>
                            Reach 1000s with your ad here
                        </div>
                        <div className='p-2'>
                            sponsored by [your brand here]
                        </div>
                    </div>
                </div>
                <div className='w-auto mr-4 my-4 border-2'>
                    <Image
                        src={(site?.image as Media)?.url ?? ''}
                        alt={site?.name}
                        width="1500"
                        height="1500"
                        className="h-full w-full max-w-full"
                    />
                </div>
            </div>
            <div className='bg-[#EDE8DD] flex flex-col my-8 py-8 justify-center'>
                <h1 className='text-4xl ml-16 mb-8 font-semibold'>Similar Inspiration</h1>
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
                                            <Link href={`sites/${item.path}`}>
                                                <CardHeader>
                                                    <Image
                                                        src={(item.image as Media)?.url ?? ''}
                                                        alt={(item.image as Media)?.alt ?? ''}
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
    );
};

export default SitePage;