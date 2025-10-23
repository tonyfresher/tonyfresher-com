'use client'

import { AnchorHTMLAttributes, MouseEvent } from 'react'

import NextLink from 'next/link'

import useSound from 'use-sound'

import { cn } from '@/lib/cn'

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    href: string
    view?: 'clear' | 'underlined'
    display?: 'inline' | 'inline-block'
}

export default function Link({
    children,
    className = '',
    view = 'clear',
    display = 'inline',
    href,
    rel,
    target,
    onClick,
    ...rest
}: LinkProps) {
    const [playClick] = useSound('/sounds/click.mp3')

    const mixedClassName = cn(
        // Base styles
        'transition duration-50 ease-out',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[currentColor]',

        // Display
        display === 'inline-block' && 'inline-block',

        // View variants
        view === 'underlined' &&
            'decoration-accent-secondary hover:decoration-ring underline decoration-2 underline-offset-4',
        view === 'clear' && 'hover:bg-accent -mx-1 rounded-xs px-1',

        className
    )

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        playClick()
        onClick?.(e)
    }

    const isLinkRelative = href.startsWith('/')

    if (isLinkRelative) {
        return (
            <NextLink
                href={href}
                className={mixedClassName}
                target={target}
                rel={rel}
                onClick={handleClick}
                {...rest}
            >
                {children}
            </NextLink>
        )
    }

    return (
        <a
            className={mixedClassName}
            href={href}
            target={target ?? '_blank'}
            rel={rel ?? 'noopener noreferrer'}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </a>
    )
}
