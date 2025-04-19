import mdx from '@next/mdx';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    experimental: {
        optimizeCss: false
    },
    images: {
        domains: ['localhost'],
        unoptimized: true
    }
};

export default withMDX(nextConfig);