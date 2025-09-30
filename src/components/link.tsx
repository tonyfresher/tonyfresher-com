import { CSSProperties, PropsWithChildren } from 'react'

import NextLink from 'next/link'

import { cn } from '@/lib/cn'

export type LinkProps = PropsWithChildren<{
    className?: string
    href: string
    view?: 'clear' | 'underlined'
    display?: 'inline' | 'inline-block'
}>

export default function Link({
    children,
    className = '',
    view = 'clear',
    display = 'inline',
    href
}: LinkProps) {
    const mixedClassName = cn(
        // Base styles
        'transition duration-50 ease-out',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[currentColor]',

        // Display
        display === 'inline-block' && 'inline-block',

        // View variants
        view === 'underlined' &&
            'decoration-glassy-secondary hover:decoration-ring underline decoration-2 underline-offset-4',
        view === 'clear' && 'hover:bg-glassy -mx-1 rounded-xs px-1',

        className
    )

    const isLinkRelative = href.startsWith('/')

    if (isLinkRelative) {
        return (
            <NextLink href={href} className={mixedClassName}>
                {children}
            </NextLink>
        )
    }

    return (
        <a className={mixedClassName} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}
