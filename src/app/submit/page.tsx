"use client"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
const SubmitForm = () => {
    const newMetadata = {
        title: 'Submit Your Website',
        description: 'Submit your website to be featured on our website.',
        image: 'https://example.com/path-to-your-image.jpg' // Replace with your image URL
    };
    const [metadata, setMetadata] = useState(newMetadata);
    useEffect(() => {
        if (metadata.title !== newMetadata.title || metadata.description !== newMetadata.description) {
            setMetadata(newMetadata);
        }
    }, [newMetadata]);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        website_name: '',
        website_url: '',
        website_description: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        if (response.ok) {
            alert('Form submitted successfully.');
        } else {
            alert('There was an error submitting the form.');
        }
    };

    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:image" content={metadata.image} />
            </Helmet>

            <section className='container'>
                <div className="mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <span className="text-normal uppercase text-gray-500">Submit</span>
                            <h1 className="text-4xl font-bold py-4">{`Think your website is a good fit?`}</h1>
                            <p className="text-lg text-gray-600">{`We carefully select the best website inspiration, and beautiful design is very important to us. If accepted, your website will be featured within 3 working days.`}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 p-4 shadow-lg rounded-lg">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Your name*</label>
                                <Input name="name" value={formState.name} onChange={handleChange} required placeholder="name" className="mt-1 block w-full px-3 py-2" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-gray-700 block text-sm font-semibold">Email*</label>
                                <Input name="email" value={formState.email} onChange={handleChange} required placeholder="example@gmail.com" className="mt-1 block w-full px-3 py-2" />
                            </div>
                            <div>
                                <label htmlFor="websiteName" className="text-gray-700 block text-sm font-semibold">Website name*</label>
                                <Input name="website_name" value={formState.website_name} onChange={handleChange} required placeholder="example.com" className="mt-1 block w-full px-3 py-2" />

                            </div>
                            <div>
                                <label htmlFor="websiteLink" className="text-gray-700 block text-sm font-semibold">Website link*</label>
                                <Input name="website_url" value={formState.website_url} onChange={handleChange} required placeholder="https://example.com" className="mt-1 block w-full px-3 py-2" />
                            </div>
                            <div>
                                <label htmlFor="description" className="text-gray-700 block text-sm font-semibold">Website description*</label>
                                <Textarea name="website_description" value={formState.website_description} onChange={handleChange} required
                                    placeholder="Enter website's description" className="mt-1 block w-full px-3 py-2"
                                />
                            </div>
                            <Button type="submit" className="w-full flex justify-center py-2 px-4">Submit</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubmitForm;