'use client'

import type { ReactNode } from 'react'

import { MDXProvider } from '@mdx-js/react'
import EmojiFavicon from '@/components/EmojiFavicon'
import Link from '@/components/Link'
import { YMInitializer } from 'react-yandex-metrika'

const mdxComponents = {
    a: ({ children, className, href }: { children: ReactNode; className?: string; href?: string }) => (
        <Link className={className} view="filled" href={href ?? '#'}>
            {children}
        </Link>
    )
}

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <>
            {process.env.NODE_ENV === 'production' && (
                <YMInitializer accounts={[47324241]} options={{ webvisor: true }} version="2" />
            )}
            <EmojiFavicon />
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </>
    )
}
