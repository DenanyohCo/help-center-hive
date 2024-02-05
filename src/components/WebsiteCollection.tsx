import Link from "next/link";

interface WebsiteCollectionProps {
    title: string;
    subtitle: string;
    href: string;
}
const WebsiteCollection = (props: WebsiteCollectionProps) => {
    const { title, subtitle, href } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Link href={href}>Learn more</Link>
        </div>
    );
};
export default WebsiteCollection;
