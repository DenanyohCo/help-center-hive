import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { PiArrowSquareOutFill } from "react-icons/pi";
import NewsletterCTA from "@/components/newsletterCTA";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
/**
 * Props for `CardItems`.
 */
export type CardItemsProps = SliceComponentProps<Content.CardItemsSlice>;

/**
 * Component for "CardItems" Slices.
 */
const CardItems = ({ slice }: CardItemsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mb-40 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {slice.items.map(
          (item, index) => (
            <div key={index}>
              <div className="h-auto w-full">
                <div className="group relative">
                  <div className="absolute right-5 top-5 hidden group-hover:block">
                    <PrismicNextLink
                      field={item.help_center_link}
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
                      <PrismicNextLink field={item.website_page_link}>
                        <CardHeader>
                          <PrismicNextImage
                            field={item.screenshot}
                            width="380"
                            height="380"
                            className="h-full w-full max-w-full object-cover object-top"
                          />
                        </CardHeader>
                      </PrismicNextLink>
                    </Card>
                  </div>
                  <CardContent>
                    <CardTitle>{item.website_title}</CardTitle>
                    <CardDescription>
                      {item.website_description}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="col-span-full row-span-2 my-4">
        <NewsletterCTA />
      </div>
    </section>
  );
};

export default CardItems;
