import CardItems from "@/components/CardItems";
import Hero from "@/components/Hero";
import WebsiteCollection from "@/components/WebsiteCollection";
export default function Home() {
    return (
        <div className="min-h-screen flex-1">
            <Hero />
            <CardItems />
            <WebsiteCollection
                title="Example Title"
                subtitle="Example Subtitle"
                query={{
                    limit: 1,
                    sort: "asc",
                }}
            />
        </div>
    );
}
