import { CSSProperties, PropsWithChildren } from 'react'

import NextLink from 'next/link'

import { cn } from '@/lib/cn'

export type LinkProps = PropsWithChildren<{
    className?: string
    href: string
    view?: 'clear' | 'filled'
    color?: string
    display?: 'inline' | 'inline-block'
}>

export default function Link({
    children,
    className = '',
    view = 'clear',
    color,
    display = 'inline',
    href
}: LinkProps) {
    const mixedClassName = cn(
        // Base styles
        'transition duration-150 ease-out',
        'rounded-xs px-1',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color,currentColor)]',

        // Display
        display === 'inline-block' && '-mx-1 inline-block',

        // View variants
        view === 'filled' && [
            'bg-[var(--color)]',
            'border border-b-[3px] border-[color:var(--color,var(--color-background-glassy))] border-b-[color:rgba(0,0,0,0.15)]',
            'hover:brightness-95 active:brightness-90'
        ],
        view === 'clear' && ['text-[color:var(--color,currentColor)]', 'hover:bg-glassy'],

        className
    )

    const style = color ? ({ '--color': color } as CSSProperties) : undefined

    const isLinkRelative = href.startsWith('/')

    if (isLinkRelative) {
        return (
            <NextLink href={href} className={mixedClassName} style={style}>
                {children}
            </NextLink>
        )
    }

    return (
        <a
            className={mixedClassName}
            style={style}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}
