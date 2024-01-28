import CardItems from "@/components/CardItems";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <div className="min-h-screen flex-1">
            <Hero />
            <CardItems />
        </div>
    );
}
