/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost', 'www.helpcenter.design'],
        loader: 'imgix',
        path: './media',
    },
};

export default nextConfig;