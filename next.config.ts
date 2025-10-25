import type { NextConfig } from 'next'

import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
    async rewrites() {
        return [
            {
                source: '/ingest/static/:path*',
                destination: 'https://us-assets.i.posthog.com/static/:path*'
            },
            {
                source: '/ingest/:path*',
                destination: 'https://us.i.posthog.com/:path*'
            }
        ]
    },
    skipTrailingSlashRedirect: true
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        providerImportSource: '@/app/mdx-components',
        remarkPlugins: ['remark-gfm'],
        rehypePlugins: ['rehype-slug']
    }
})

export default withMDX(nextConfig)
