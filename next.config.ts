import type { NextConfig } from 'next'

import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
    pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
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
