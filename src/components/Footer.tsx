import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
    const client = createClient();
    const footer = await client.getSingle("footer");
    return (
        <footer className="container my-10 bg-white">
            <div className="flex flex-col justify-between border-b pb-8 md:flex-row">
                <div className="items-end">
                    <PrismicNextLink
                        field={footer.data.logo_link}
                        className="flex flex-row items-center justify-start p-2 md:justify-center"
                    >
                        <PrismicNextImage
                            field={footer.data.logo_image}
                            width="50"
                            height="50"
                        />
                        <h1 className="text-xl md:text-4xl">{footer.data.logo_text}</h1>
                    </PrismicNextLink>
                </div>
                <div className="flex flex-col justify-between sm:flex-row">
                    <div className="flex w-40 flex-col px-4 md:justify-start">
                        <div className="py-2 text-2xl font-bold text-[#D6D3CC]">
                            Pages
                        </div>
                        {footer.data.pages.map((page, index) => (
                            <PrismicNextLink
                                key={index}
                                field={page.link}
                                className="text-lg"
                            >
                                {page.text}
                            </PrismicNextLink>
                        ))}
                    </div>
                    <div className="flex w-40 flex-col justify-start px-4">
                        <div className="py-2 text-2xl font-bold text-[#D6D3CC]">
                            Resources
                        </div>
                        {footer.data.resources.map((resource, index) => (
                            <PrismicNextLink
                                key={index}
                                field={resource.link}
                                className="text-lg"
                            >
                                {resource.text}
                            </PrismicNextLink>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex w-full flex-col justify-start px-4 md:mt-0 md:w-[34rem]">
                    <div className="py-2 text-2xl font-bold text-[#D6D3CC]">
                        Subscribe
                    </div>
                    <div className="py-2 text-lg">
                        Get the best help center design tips and inspiration and
                        idea to provide world class support to your customers.
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:space-x-2">
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
            <div className="py-10">
                <div className="pt-4 md:flex md:items-center md:justify-between">
                    <p className="text-base text-muted-foreground">
                        {footer.data.footer_note}
                    </p>
                    <div className="socials mt-3 flex items-center justify-center sm:justify-end md:mt-0">
                        <div className="text-xl">Follow Us:</div>
                        <PrismicNextLink field={footer.data.linkedin_link}>
                            <FaLinkedin className="mx-4 text-4xl" />
                        </PrismicNextLink>
                        <PrismicNextLink field={footer.data.twitter_link}>
                            <FaTwitter className="text-4xl" />
                        </PrismicNextLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

