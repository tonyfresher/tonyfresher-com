import type { NextConfig } from 'next'

import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
    pageExtensions: ['md', 'mdx', 'ts', 'tsx']
}

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        providerImportSource: '@/app/mdx-components',
        remarkPlugins: ['remark-gfm']
    }
})

export default withMDX(nextConfig)
