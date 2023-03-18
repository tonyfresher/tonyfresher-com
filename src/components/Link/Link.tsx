import {PropsWithChildren} from 'react';
import NextLink from 'next/link';

import {cn} from 'lib/classname';

import styles from './Link.module.css';

const link = cn('Link', styles);

export type LinkProps = PropsWithChildren<{
    className?: string;
    href: string;
    view?: 'clear' | 'filled';
    color?: string;
    display?: 'inline' | 'inline-block';
}>;

export default function Link({
    children,
    className = '',
    view = 'filled',
    color,
    display = 'inline',
    href
}: LinkProps) {
    const mixedClassName = `${link({view, display})} ${className}`;

    const isLinkRelative = href.startsWith('/');

    if (isLinkRelative) {
        return (
            <NextLink
                href={href}
                className={mixedClassName}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                style={{'--color': color}}
            >
                {children}
            </NextLink>
        );
    }

    return (
        <a
            className={mixedClassName}
            style={{'--color': color}}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
