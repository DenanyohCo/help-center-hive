"use client";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="container my-10 bg-white">
            <div className="flex flex-col justify-between border-b pb-8 md:flex-row">
                <div className="items-end">
                    <NameLogo />
                </div>
                <div className="flex flex-col justify-between sm:flex-row">
                    <div className="flex w-40 flex-col px-4 md:justify-start">
                        <div className="py-2 text-2xl font-bold text-[#D6D3CC]">
                            Pages
                        </div>
                        <Link href="/template" className="text-lg">
                            Template
                        </Link>
                        <Link href="/about" className="text-lg">
                            About
                        </Link>
                        <Link href="/submit" className="text-lg">
                            Submit
                        </Link>
                        <Link href="/contact" className="text-lg">
                            Contact
                        </Link>
                    </div>
                    <div className="flex w-40 flex-col justify-start px-4">
                        <div className="py-2 text-2xl font-bold text-[#D6D3CC]">
                            Resources
                        </div>
                        <Link href="/resources" className="text-lg">
                            Hire an expert
                        </Link>
                        <Link href="/resources" className="text-lg">
                            Privacy Policy
                        </Link>
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
                            className="p-6 text-lg"
                            type="email"
                            placeholder="Email"
                        />
                        <Button
                            type="submit"
                            className="mt-4 w-full p-6 text-lg md:mt-0 md:w-40"
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="pt-4 md:flex md:items-center md:justify-between">
                    <p className="text-base text-muted-foreground">
                        &copy; {currentYear} HelpCenter Design. All screenshots
                        &copy; of their respective owners.
                    </p>
                    <div className="socials mt-3 flex items-center justify-center sm:justify-end md:mt-0">
                        <div className="text-xl">Follow Us:</div>
                        <Link href="/">
                            <FaLinkedin className="mx-4 text-4xl" />
                        </Link>
                        <Link href="/">
                            <FaTwitter className="text-4xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
function NameLogo() {
    return (
        <Link
            href="/"
            className="flex flex-row items-center justify-start md:justify-center"
        >
            <Image
                src="/HelpCenterDesignsLogo.svg"
                width="50"
                height="50"
                alt="Help Center Designs Logo"
            />
            <h1 className="text-xl md:text-4xl">HCD</h1>
        </Link>
    );
}
export default Footer;
