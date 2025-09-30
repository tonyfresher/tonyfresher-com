import type { ReactNode } from 'react'

import type { MDXComponents } from 'mdx/types'

import Link from '@/components/link'

const components = {
    a: ({
        children,
        className,
        href
    }: {
        children: ReactNode
        className?: string
        href?: string
    }) => (
        <Link className={className} view="underlined" href={href ?? '#'}>
            {children}
        </Link>
    )
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
    return components
}
