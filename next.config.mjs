/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost', 'help-center-hive-production.up.railway.app'],
        loader: 'imgix',
        path: './media',
    },
};

export default nextConfig;