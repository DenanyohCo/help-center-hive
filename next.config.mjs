/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'helpcenter.design'],
        loader: 'imgix',
        path: './media',
    },
};
export default nextConfig;