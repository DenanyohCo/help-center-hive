"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
const About = () => {
    const newMetadata = {
        title: 'About Us',
        description: 'Discover the best websites created by top design agencies, and get ideas and inspiration for your next website.',
        image: 'https://example.com/path-to-your-image.jpg' // Replace with your image URL
    };
    const [metadata, setMetadata] = useState(newMetadata);
    useEffect(() => {
        if (metadata.title !== newMetadata.title || metadata.description !== newMetadata.description) {
            setMetadata(newMetadata);
        }
    }, [newMetadata]);

    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:image" content={metadata.image} />
            </Helmet>
            <section className="container">
                <div className="bg-[#F9F6F2] py-20 px-10 md:px-20 mx-auto container">
                    <div className="text-center mb-12">
                        <h2 className="uppercase tracking-wide text-sm">{`About Us`}
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
                            {`Curating amazing help center sites.`}
                        </h1>
                        <p className="mt-4 leading-relaxed">
                            {`Discover the best websites created by top design agencies, and get ideas and inspiration for your next website.`}
                        </p>
                    </div>
                </div>
                <div className="container py-20 px-10 grid grid-cols-1 md:grid-cols-3 bg-[#0B2027] gap-8 text-[#F9F6F2] w-full text-center">
                    <div>
                        <div className="text-4xl">{`6,000+`}</div>
                        <div className="text-lg">{`subscribers, and growing fast`}</div>
                    </div>
                    <div>
                        <div className="text-4xl">{`4`}</div>
                        <div className="text-lg">{`Team members`}</div>
                    </div>
                    <div>
                        <div className="text-4xl">{`230`}</div>
                        <div className="text-lg">{`Websites featured`}</div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap">
                        <div className="w-80">
                            <Image
                                unoptimized
                                src='/images/aboutPageImage.svg'
                                alt='Our Story Illustration'
                                width="380"
                                height="380"
                                className="max-w-full h-auto pt-12"
                            />
                        </div>
                        <div className="flex-1 pl-8">
                            <h2 className="text-2xl font-semibold mb-3">
                                {`OUR STORY`}
                            </h2>
                            <h1 className="text-5xl font-bold mb-6">
                                {`Where we're from and why we're here.`}
                            </h1>
                            <p className="text-lg">
                                {`The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.

                            A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!

                            Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.`}
                            </p>
                        </div>
                        <div className="flex bg-[#EAD7AC] items-center flex-col justify-center my-4 py-12 px-4">
                            <div className="container flex flex-col justify-center items-center">
                                <h2 className="mb-2 text-3xl font-semibold text-gray-950 ">
                                    Get the latest inspiration, weekly.
                                </h2>
                                <p className="text-lg text-center py-2">
                                    Discover the best websites created by top design agencies, and get ideas and inspiration for your next website.
                                </p>
                            </div>
                            <div className="max-w-full py-2">
                                <div className="container flex flex-col items-center md:flex-row md:space-x-2">
                                    <Input
                                        className="max-w-md p-6 text-lg"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <Button
                                        type="submit"
                                        className="mt-4 w-full max-w-md p-6 text-lg md:mt-0 md:w-40"
                                    >
                                        Subscribe
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
