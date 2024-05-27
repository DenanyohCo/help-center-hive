import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container"
    >
      <div className="bg-[#F9F6F2] py-20 px-10 md:px-20 mx-auto container">
        <div className="text-center mb-12">
          <h2 className="uppercase tracking-wide text-sm">{`About Us`}
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
            {slice.primary.heading}
          </h1>
          <p className="mt-4 leading-relaxed">
            {slice.primary.description}
          </p>
        </div>
      </div>
      <div className="container py-20 px-10 grid grid-cols-1 md:grid-cols-3 bg-[#0B2027] gap-8 text-[#F9F6F2] w-full text-center">
        <div>
          <div className="text-4xl">{slice.primary.subscribers}</div>
          <div className="text-lg">{`subscribers, and growing fast`}</div>
        </div>
        <div>
          <div className="text-4xl">{slice.primary.team_members}</div>
          <div className="text-lg">{`Team members`}</div>
        </div>
        <div>
          <div className="text-4xl">{slice.primary.websites_featured}</div>
          <div className="text-lg">{`Websites featured`}</div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-80">
            <PrismicNextImage field={slice.primary.about_us_image} />
          </div>
          <div className="flex-1 pl-8">
            <h2 className="text-2xl font-semibold mb-3">
              {`OUR STORY`}
            </h2>
            <h1 className="text-5xl font-bold mb-6">
              {slice.primary.story_title}
            </h1>
            <p className="text-lg">
              {slice.primary.story_content}
            </p>
          </div>
          <div className="flex bg-[#EAD7AC] items-center flex-col justify-center my-4 py-12 px-4 w-screen">
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
  );
};

export default About;
