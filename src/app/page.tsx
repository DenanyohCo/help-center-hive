import CardItems from "@/components/CardItems";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex-1 min-h-screen">
      <Hero />
      <CardItems />
    </div>
  );
}
