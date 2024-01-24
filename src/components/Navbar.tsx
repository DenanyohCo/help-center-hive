import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-20">
      <header className="relative bg-white">
        <div className="border-b border-gray-200">
          <div className="flex h-20 items-center">
            <div className="ml-4 flex lg:ml-0">
              <Link
                href="/"
                className="flex flex-row items-center justify-center"
              >
                <Image
                  src="/HelpCenterDesignsLogo.svg"
                  width="50"
                  height="50"
                  alt="Help Center Designs Logo"
                />
                <h1 className="text-4xl">HCD</h1>
              </Link>
            </div>
            <div className="ml-auto flex items-center mr-6">
              <Button variant={"ghost"} className="p-6">
                <Link className="text-xl font-light" href="/">
                  Buy me a coffee
                </Link>
              </Button>
              <Button className="p-6">
                <Link className="text-xl font-light" href="/">
                  Submit a site
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
