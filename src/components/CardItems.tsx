import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardItems = () => {
  const cardItems = [
    {
      title: "Airbnb Help Center",
      description: "Help for Airbnb Guests and Hosts",
      img: "/images/airbnb.jpeg",
      link: "https://www.airbnb.com/help?audience=guest",
      path: "/{slug}",
    },
    {
      title: "Official Apple Support",
      description: "Support for apple products and software",
      img: "/images/apple.jpeg",
      link: "https://support.apple.com/",
      path: "/{slug}",
    },
    {
      title: "BigCommerce Help Center",
      description: "Help Center for customers and partners",
      img: "/images/bigcommerce.jpeg",
      link: "https://support.bigcommerce.com/s/?language=en_US",
      path: "/{slug}",
    },
    {
      title: "Care Help Center",
      description: "For Care families, caregivers & partners",
      img: "/images/care.jpeg",
      link: "https://help.care.com/s/",
      path: "/{slug}",
    },
    {
      title: "Credit Karma Help Center",
      description: "Provides support to Credit Karma users",
      img: "/images/creditkarma.jpeg",
      link: "https://support.creditkarma.com/s/",
      path: "/{slug}",
    },
    {
      title: "Ecobee Support",
      description: "Help Center for Ecobee products",
      img: "/images/ecobee.jpeg",
      link: "https://support.ecobee.com/s/",
      path: "/{slug}",
    },
    {
      title: "Figma Help Center",
      description: "Help for designers and product teams",
      img: "/images/figma.jpeg",
      link: "https://help.figma.com/hc/en-us",
      path: "/{slug}",
    },
    {
      title: "Hulu Help Center",
      description: "Hulu Help Center for Customers",
      img: "/images/hulu.jpeg",
      link: "https://help.hulu.com/s/",
      path: "/{slug}",
    },

    {
      title: "Lumino Health",
      description: "Help for Lumino Health customers",
      img: "/images/luminohealth.jpeg",
      link: "https://luminohealth.sunlife.ca/s/",
      path: "/{slug}",
    },
    {
      title: "Nextdoor Help Center",
      description: "Help for Nextdoor users",
      img: "/images/nextdoor.jpeg",
      link: "https://help.nextdoor.com/s/",
      path: "/{slug}",
    },
    {
      title: "Salesforce Help Center",
      description: "Help for Salesforce customers & partners",
      img: "/images/salesforce.jpeg",
      link: "https://help.salesforce.com/s/",
      path: "/{slug}",
    },
    {
      title: "Sonos Help & Support",
      description: "Support and chat for sonos products",
      img: "/images/sonos.jpeg",
      link: "https://support.sonos.com/en-in/home",
      path: "/{slug}",
    },
    {
      title: "Square Support",
      description: "Support for Square customers",
      img: "/images/square-support.jpeg",
      link: "https://squareup.com/help/us/en",
      path: "/{slug}",
    },
    {
      title: "Xero Central",
      description: "Expert help for Xero customers",
      img: "/images/xerocentral.jpeg",
      link: "https://central.xero.com/s/",
      path: "/{slug}",
    },
  ];
  return (
    <section>
           <div className="container grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-3 mb-40">
      {cardItems.map((item, index) => (
      <div key={index} className="w-full h-auto">
        <div className="relative group">
          <div className="hidden absolute top-5 right-5 group-hover:block">
            <Link className="flex justify-center items-center w-9 h-9 bg-[theme(colors.zinc.950/.4)] rounded-sm" href={item.link}>
              <span className="sr-only">Visit Website</span>
            <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
            <path d="m10.743 6.964-6.071 6.072-1.415-1.415 6.071-6.07H5.086v-2h7.657v7.656h-2V6.964Z" fill="#FFF" fill-rule="nonzero"></path>
            </svg>
            </Link>
          </div>
          <div className="aspect-[4/5] mb-4">
            <Card className="h-full bg-white dark:bg-zinc-800 rounded overflow-hidden shadow-sm hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] hover:shadow-black/10 transition duration-300 mb-2">
              <Link href={item.path}>
                <CardHeader>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width="380"
                    height="380"
                    className="max-w-full h-full w-full object-cover object-top"
                  />
                </CardHeader>
              </Link>
            </Card>
          </div>
          <CardContent>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
        </div>
      </div>
       ))}
      
        
     
    </div>
    </section>
  );
};
export default CardItems;
