/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cache.wemixplay.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
