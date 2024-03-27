/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost', 'helpcenter.design'],
        loader: 'imgix',
        path: './media',
    },
    reactStrictMode: true,
};

export default nextConfig;