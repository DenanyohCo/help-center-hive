/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost'],
        loader: 'imgix',
        path: './media',
    },
};

export default nextConfig;