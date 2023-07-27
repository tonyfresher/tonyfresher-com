import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {providerImportSource: '@mdx-js/react', remarkPlugins: [remarkGfm]}
});

export default withMDX(nextConfig);
