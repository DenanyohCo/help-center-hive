"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="container bg-white flex-grow-0">
      <div className="flex justify-center">
        <NameLogo />
        {/* <div className="flex flex-col justify-center">
          Pages
          <Link href="/template">Template</Link>
          <Link href="/about">About</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex flex-col justify-center">
          Resources
          <Link href="/resources">Hire an expert</Link>
        </div>
        <div className="flex flex-col justify-center">
          Subscribe
          <div>
            Get the best help center design tips and inspiration and idea to
            provide world class support to your customers.
          </div>
        </div> */}
      </div>
      <div className="py-10 md:flex md:items-center md:justify-between">
        <p className="text-base text-muted-foreground">
          &copy; 2023 HelpCenter Design. All screenshots &copy; of their
          respective owners.
        </p>
        <div className="socials flex justify-center items-center sm:justify-end">
          <div className="text-xl">Follow Us:</div>
          <Link href="/">
            <FaLinkedin className="text-4xl mx-4" />
          </Link>
          <Link href="/">
            <FaTwitter className="text-4xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
function NameLogo() {
  return (
    <Link href="/" className="flex flex-row items-center justify-center">
      <Image
        src="/HelpCenterDesignsLogo.svg"
        width="50"
        height="50"
        alt="Help Center Designs Logo"
      />
      <h1 className="text-4xl">HELP CENTER HIVE</h1>
    </Link>
  );
}
export default Footer;
