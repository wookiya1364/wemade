/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cache.wemixplay.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.apple.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
