"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";

export default function Navbar({ navbar }: { navbar: Content.NavbarDocument }) {
    const [open, setOpen] = useState(false);
    return (
        <nav
            aria-label="Main navigation"
            className="container top-0 z-50 mx-auto rounded-md bg-white  md:sticky"
        >
            <div className="flex items-center justify-between py-4">
                <div className="flex w-full items-center justify-between">
                    <PrismicNextLink field={navbar.data.logo_link} className="flex flex-row items-center justify-center">
                        <PrismicNextImage
                            field={navbar.data.logo_image}
                            width="45"
                            height="45"
                        />
                        <h1 className="text-3xl">{navbar.data.logo_text}</h1>
                    </PrismicNextLink>
                    <button
                        aria-expanded={open}
                        aria-label="Open menu"
                        className="block p-2 text-2xl text-slate-800 md:hidden"
                        onClick={() => setOpen(true)}
                    >
                        <MdMenu />
                    </button>
                </div>
                <div
                    className={clsx(
                        "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-white pt-14 transition-transform duration-300 ease-in-out md:hidden",
                        open ? "translate-x-0" : "translate-x-[100%]"
                    )}
                >
                    <button
                        aria-label="Close menu"
                        aria-expanded={open}
                        className="fixed right-4 top-3 block p-2 text-2xl text-slate-800 md:hidden "
                        onClick={() => setOpen(false)}
                    >
                        <MdClose />
                    </button>
                    <div className="container ml-auto mr-6 flex flex-col items-center">
                        <Button variant={"ghost"} className="p-6">
                            <PrismicNextLink field={navbar.data.buy_me_a_coffee_link}
                                className="w-full text-xl font-light">
                                {navbar.data.buy_me_a_coffee_text}
                            </PrismicNextLink>
                        </Button>
                        <Button className="w-full p-6">
                            <PrismicNextLink
                                className="text-xl font-light"
                                field={navbar.data.submit_a_site_link}
                            >
                                {navbar.data.submit_a_site_text}
                            </PrismicNextLink>
                        </Button>
                    </div>
                </div>
                <div className="relative z-50 hidden flex-row items-center gap-1 py-0 md:flex">
                    <div className="ml-auto flex items-center">
                        <Button variant={"ghost"} className="mr-6 p-6">
                            <PrismicNextLink className="text-base font-bold" field={navbar.data.buy_me_a_coffee_link} target="_blank">
                                {navbar.data.buy_me_a_coffee_text}
                            </PrismicNextLink>
                        </Button>
                        <Button className="p-6">
                            <PrismicNextLink className="text-base font-bold" field={navbar.data.submit_a_site_link}>
                                {navbar.data.submit_a_site_text}
                            </PrismicNextLink>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
