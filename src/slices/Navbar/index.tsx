"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
/**
 * Props for `Navbar`.
 */
export type NavbarProps = SliceComponentProps<Content.NavbarSlice>;

/**
 * Component for "Navbar" Slices.
 */
const Navbar = ({ slice }: NavbarProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container top-0 z-50 mx-auto rounded-md bg-white md:sticky"
    >
      <nav aria-label="Main navigation">
        <div className="flex items-center justify-between py-4">
          <div className="flex w-full items-center justify-between">
            <PrismicNextLink field={slice.primary.logo_link} className="flex flex-row items-center justify-center">
              <PrismicNextImage field={slice.primary.logo_image} />
              <h1 className="text-3xl">{slice.primary.logo_text}</h1>
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
              <Button variant={"ghost"} className="w-full p-6">
                <PrismicNextLink field={slice.primary.buy_me_a_coffee_link} className="w-full text-xl font-light">
                  {slice.primary.buy_me_a_coffee_text}
                </PrismicNextLink>
              </Button>
              <Button className="w-full p-6">
                <PrismicNextLink field={slice.primary.submit_a_site_link} className="text-xl font-light">
                  {slice.primary.submit_a_site_text}
                </PrismicNextLink>
              </Button>
            </div>
          </div>
          <div className="relative z-50 hidden flex-row items-center gap-1 py-0 md:flex">
            <div className="ml-auto flex items-center">
              <Button variant={"ghost"} className="mr-6 p-6">
                <PrismicNextLink field={slice.primary.buy_me_a_coffee_link} className="text-base font-bold">
                  {slice.primary.buy_me_a_coffee_text}
                </PrismicNextLink>
              </Button>
              <Button className="p-6">
                <PrismicNextLink field={slice.primary.submit_a_site_link} className="text-base font-bold">
                  {slice.primary.submit_a_site_text}
                </PrismicNextLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
