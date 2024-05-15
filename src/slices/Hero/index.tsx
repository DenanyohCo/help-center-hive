import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 min-h-screen"
    >
      <div className="container mx-auto flex flex-col items-center py-20 text-center">
        <div className="mx-auto max-w-5xl md:w-[680px]">
          <h1 className="mb-4 text-5xl font-bold  tracking-[-.008em] text-gray-950 md:text-6xl ">
            {slice.primary.title}
          </h1>
        </div>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground  max-sm:px-4">
            {slice.primary.description}
          </p>
        </div>
        <div className="mt-12 flex max-w-5xl flex-row flex-wrap justify-center gap-4">
          {slice.items.map((item, index) => (
            <PrismicNextLink key={index} field={item.tag_link}>
              <Button
                variant={"secondary"}
                className="bg-[#ede8dd] text-xs md:text-lg"
              >
                {item.tag_name ? item.tag_name.toUpperCase() : ""}{" "}
              </Button>
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
