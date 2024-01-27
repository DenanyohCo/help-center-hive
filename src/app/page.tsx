import CardItems from "@/components/CardItems";
import Hero from "@/components/Hero";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <div className="flex-1 min-h-screen">
      <Hero />
      <CardItems />
      <NewsletterCTA />
    </div>
  );
}
