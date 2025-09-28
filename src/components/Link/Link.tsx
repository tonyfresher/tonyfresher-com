import {CSSProperties, PropsWithChildren} from 'react';
import NextLink from 'next/link';

import {cn} from 'lib/cn';

export type LinkProps = PropsWithChildren<{
    className?: string;
    href: string;
    view?: 'clear' | 'filled';
    color?: string;
    display?: 'inline' | 'inline-block';
}>;

const baseClassName = cn(
    'no-underline text-inherit',
    'px-1 transition duration-150 ease-out',
    'rounded-[calc(var(--text-font-size)*0.3)]',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color,var(--color-content-primary))]'
);

function getDisplayClass(display: LinkProps['display']) {
    return display === 'inline-block' ? 'inline-block -mx-1' : 'inline';
}

function getViewClass(view: LinkProps['view']) {
    if (view === 'filled') {
        return cn(
            'bg-[var(--color,var(--color-background-default))]',
            'border border-[color:var(--color,var(--color-background-glassy))]',
            'border-b-[3px] border-b-[color:rgba(0,0,0,0.15)]',
            'hover:brightness-95 active:brightness-90'
        );
    }

    return cn(
        'text-[color:var(--color,var(--color-content-primary))]',
        'hover:bg-[var(--color-background-glassy)]'
    );
}

export default function Link({
    children,
    className = '',
    view = 'clear',
    color,
    display = 'inline',
    href
}: LinkProps) {
    const mixedClassName = cn(
        baseClassName,
        getDisplayClass(display),
        getViewClass(view),
        className
    );

    const style = color
        ? ({'--color': color} as CSSProperties)
        : undefined;

    const isLinkRelative = href.startsWith('/');

    if (isLinkRelative) {
        return (
            <NextLink href={href} className={mixedClassName} style={style}>
                {children}
            </NextLink>
        );
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
    );
}
