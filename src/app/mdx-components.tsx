import type { ReactNode } from 'react'

import type { MDXComponents } from 'mdx/types'

import Link from '@/components/link'

const components: MDXComponents = {
    a: ({
        children,
        className,
        href
    }: {
        children: ReactNode
        className?: string
        href?: string
    }) => (
        <Link className={className} view="filled" href={href ?? '#'}>
            {children}
        </Link>
    )
}

export function useMDXComponents(): MDXComponents {
    return components
}
