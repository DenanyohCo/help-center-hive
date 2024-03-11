/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['localhost', 'https://www.helpcenter.design'],
        loader: 'imgix',
        path: '../media',
    },
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/help-center-hive' : '',
};

export default nextConfig;