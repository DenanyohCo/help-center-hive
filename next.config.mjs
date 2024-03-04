/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost', 'https://www.helpcenter.design'],
        loader: 'imgix',
        path: './media',
    },
};

export default nextConfig;