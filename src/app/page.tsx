"use client"
import CardItems from "@/components/CardItems";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
const Home = () => {
    const [metadata, setMetadata] = useState({
        title: 'Help Center Design',
        description: 'Help Center Design HomePage'
    });

    useEffect(() => {
        const newMetadata = {
            title: 'Help Center Design',
            description: 'Help Center Design HomePage'
        };
        if (metadata.title !== newMetadata.title || metadata.description !== newMetadata.description) {
            setMetadata(newMetadata);
        }
    }, []);
    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Helmet>
            <div className="min-h-screen flex-1">
                <Hero />
                <CardItems />
            </div>
        </>
    );
}
export default Home;