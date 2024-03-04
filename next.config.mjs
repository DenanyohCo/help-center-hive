/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost', process.env.NEXT_PUBLIC_URL],
        // loader: 'imgix',
        // path: './media',
    },
};

export default nextConfig;