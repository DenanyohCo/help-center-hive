"use client"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/contact', {
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
    const newMetadata = {
        title: 'contact us',
        description: 'Do you have feedback, want to collaborate or advertise? Please complete the below and we\'ll be in touch.',
        image: 'https://example.com/path-to-your-image.jpg'
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
            <section className='container'>
                <div className="flex items-center justify-center min-h-screen py-16 px-4">
                    <div className="w-full max-w-lg">
                        <div className="text-center">
                            <span className="text-normal uppercase text-gray-500">CONTACT</span>
                            <h1 className="text-4xl font-semibold text-gray-900">{`How can we help?`}</h1>
                            <p className="mt-2 text-gray-600">{`Do you have feedback, want to collaborate or advertise? Please complete the below and we'll be in touch.`}</p>
                        </div>
                        <form className="mt-8 bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
                            <div className="grid gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Your name*</label>
                                    <Input name="name" value={formState.name} onChange={handleChange} required placeholder="Your name" className="mt-1 block w-full px-3 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email*</label>
                                    <Input name="email" value={formState.email} onChange={handleChange} required placeholder="example@email.com" className="mt-1 block w-full px-3 py-2" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your message*</label>
                                    <Textarea name="message" value={formState.message} onChange={handleChange} required placeholder="Enter your message" className="mt-1 block w-full px-3 py-2" />
                                </div>
                                <div>
                                    <Button type="submit" className="w-full flex justify-center py-2 px-4">Submit</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;