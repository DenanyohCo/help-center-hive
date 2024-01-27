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
    },
    {
      title: "Official Apple Support",
      description: "Support for apple products and software",
      img: "/images/apple.jpeg",
      link: "https://support.apple.com/",
    },
    {
      title: "BigCommerce Help Center",
      description: "Help Center for customers and partners",
      img: "/images/bigcommerce.jpeg",
      link: "https://support.bigcommerce.com/s/?language=en_US",
    },
    {
      title: "Care Help Center",
      description: "For Care families, caregivers & partners",
      img: "/images/care.jpeg",
      link: "https://help.care.com/s/",
    },
    {
      title: "Credit Karma Help Center",
      description: "Provides support to Credit Karma users",
      img: "/images/creditkarma.jpeg",
      link: "https://support.creditkarma.com/s/",
    },
    {
      title: "Ecobee Support",
      description: "Help Center for Ecobee products",
      img: "/images/ecobee.jpeg",
      link: "https://support.ecobee.com/s/",
    },
    {
      title: "Figma Help Center",
      description: "Help for designers and product teams",
      img: "/images/figma.jpeg",
      link: "https://help.figma.com/hc/en-us",
    },
    {
      title: "Hulu Help Center",
      description: "Hulu Help Center for Customers",
      img: "/images/hulu.jpeg",
      link: "https://help.hulu.com/s/",
    },

    {
      title: "Lumino Health",
      description: "Help for Lumino Health customers",
      img: "/images/luminohealth.jpeg",
      link: "https://luminohealth.sunlife.ca/s/",
    },
    {
      title: "Nextdoor Help Center",
      description: "Help for Nextdoor users",
      img: "/images/nextdoor.jpeg",
      link: "https://help.nextdoor.com/s/",
    },
    {
      title: "Salesforce Help Center",
      description: "Help for Salesforce customers & partners",
      img: "/images/salesforce.jpeg",
      link: "https://help.salesforce.com/s/",
    },
    {
      title: "Sonos Help & Support",
      description: "Support and chat for sonos products",
      img: "/images/sonos.jpeg",
      link: "https://support.sonos.com/en-in/home",
    },
    {
      title: "Square Support",
      description: "Support for Square customers",
      img: "/images/square-support.jpeg",
      link: "https://squareup.com/help/us/en",
    },
    {
      title: "Xero Central",
      description: "Expert help for Xero customers",
      img: "/images/xerocentral.jpeg",
      link: "https://central.xero.com/s/",
    },
  ];
  return (
    <div className="container grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3 mb-40">
      {cardItems.map((item, index) => (
        <Card key={index} className="w-full h-auto">
          <Link href={item.link}>
            <CardHeader>
              <Image
                src={item.img}
                alt={item.title}
                width="380"
                height="300"
                className="max-w-none h-96 w-full object-cover"
              />
            </CardHeader>
          </Link>
          <CardContent>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default CardItems;
