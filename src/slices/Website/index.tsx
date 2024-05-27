import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { PiArrowSquareOutFill } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
/**
 * Props for `Website`.
 */
export type WebsiteProps = SliceComponentProps<Content.WebsiteSlice>;

/**
 * Component for "Website" Slices.
 */
const Website = async ({ slice }: WebsiteProps): Promise<JSX.Element> => {
  const client = createClient();
  const website = await client.getAllByType("website");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container"
    >
      <Link href={"/"} className="flex items-center py-4">
        <MdArrowBackIos /> See All Inspiration
      </Link>
      <div className="flex flex-col md:flex-row-reverse">
        <div className="my-4">
          <div className="h-fit md:w-[420px] w-auto border-2 p-2 px-4">
            <h1 className="mb-2 text-2xl font-bold">
              {slice.primary.website_title}
            </h1>
            <PrismicNextLink
              field={slice.primary.website_link}
              className="mb-2 flex items-center"
            >
              See the full website{" "}
              <PiArrowSquareOutFill className="ml-1 text-lg text-[#C1982D]" />
            </PrismicNextLink>
            <div className="text-base">
              <PrismicRichText field={slice.primary.website_description} />
            </div>
            <div className="my-4 flex">
              {website.map((tag) => (
                tag.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="mr-2 rounded-lg bg-[#F6F1D1] p-0.5 px-2 text-xs"
                  >
                    {tag}
                  </div>
                ))
              ))}
            </div>
            {/* {website.fi.forEach((index, tag) => (
                <div
                  key={index}
                  className="mr-2 rounded-lg bg-[#F6F1D1] p-0.5 px-2 text-xs"
                >
                  {tag}
                </div>
              ))} */}
          </div>
          <div className="my-2 hidden h-fit border-2 md:block">
            <div className="bg-[#F6F1D1] p-2 px-4 text-4xl font-bold">
              Reach 1000s with your ad here
            </div>
            <div className="p-2">
              sponsored by [your brand here]
            </div>
          </div>
        </div>
        <div className="my-4 mr-4 w-auto border-2">
          <PrismicNextImage field={slice.primary.website_image} width="1500"
            height="1500"
            className="h-full w-full max-w-full" />
        </div>
      </div>
      <div className="my-8 flex flex-col justify-center bg-[#EDE8DD] py-8">
        <h1 className="mb-8 ml-16 text-4xl font-semibold">
          Similar Inspiration
        </h1>
        <div className="container mb-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {slice.items.map((item, index) => (
            <div key={index}>
              <div className="h-auto w-full">
                <div className="group relative">
                  <div className="absolute right-5 top-5 hidden group-hover:block">
                    <PrismicNextLink
                      field={item.link}
                      className="flex h-9 w-9 items-center justify-center rounded-sm bg-[theme(colors.zinc.950/.6)]"
                    >
                      <span className="sr-only">
                        Visit Website
                      </span>
                      <PiArrowSquareOutFill className="text-2xl text-white" />
                    </PrismicNextLink>
                  </div>
                  <div className="mb-4 aspect-[4/5]">
                    <Card className="mb-2 h-full overflow-hidden rounded bg-white shadow-sm transition duration-300 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-black/10 dark:bg-zinc-800">
                      <PrismicNextLink field={item.page_link}>
                        <CardHeader>
                          <PrismicNextImage
                            field={item.image}
                            width="380"
                            height="380"
                            className="h-full w-full max-w-full object-cover object-top"
                          />
                        </CardHeader>
                      </PrismicNextLink>
                    </Card>
                  </div>
                  <CardContent>
                    <CardTitle>{item.heading}</CardTitle>
                    <CardDescription>
                      {item.subheading}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Website;
