/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    unoptimized: true,
    domains: ['localhost', {vercel.app}],
    loader: 'imgix',
    path: './media',
    },
    };
    
    export default nextConfig;