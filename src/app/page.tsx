"use client"
import CardItems from "@/components/CardItems";
import Hero from "@/components/Hero";
import { useEffect, useState, useMemo } from "react";
import { Helmet } from 'react-helmet';
const Home = () => {
    const newMetadata = useMemo(() => ({
        title: 'The best Help Center Site Examples for Design Inspiration - Help Center Design',
        description: 'Looking for help center page inspiration? Look no further. Help Center Hive curates and showcases the best help center and support center designs on the web.',
        image: 'https://example.com/path-to-your-image.jpg' // Replace with your image URL
    }), []);
    const [metadata, setMetadata] = useState(newMetadata);
    useEffect(() => {
        if (metadata.title !== newMetadata.title || metadata.description !== newMetadata.description) {
            setMetadata(newMetadata);
        }
    }, [newMetadata, metadata.description, metadata.title]);
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