import type { NextConfig } from 'next'

import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
    /* config options here */
}

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: { providerImportSource: '@mdx-js/react', remarkPlugins: [remarkGfm] }
})

export default withMDX(nextConfig)
