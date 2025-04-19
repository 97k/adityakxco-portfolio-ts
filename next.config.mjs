import mdx from '@next/mdx';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: 'standalone',
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    experimental: {
        optimizeCss: true
    },
    images: {
        domains: ['localhost'],
        unoptimized: true
    }
};

export default withMDX(nextConfig);