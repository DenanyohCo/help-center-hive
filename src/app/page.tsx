"use client"
import CardItems from "@/components/CardItems";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
const Home = () => {
    const newMetadata = {
        title: 'Help Center Design',
        description: 'Help Center Design HomePage',
        image: 'https://example.com/path-to-your-image.jpg' // Replace with your image URL
    };
    const [metadata, setMetadata] = useState(newMetadata);
    useEffect(() => {
        if (metadata.title !== newMetadata.title || metadata.description !== newMetadata.description) {
            setMetadata(newMetadata);
        }
    }, [newMetadata]);
    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:image" content={metadata.image} />
            </Helmet>
            <div className="min-h-screen flex-1">
                <Hero />
                <CardItems />
            </div>
        </>
    );
}
export default Home;