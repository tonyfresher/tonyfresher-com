import {cn} from 'lib/classname';
import NextLink from 'next/link';

import {LinkProps} from './types';

import styles from './Link.module.css';

const link = cn('Link', styles);

export default function Link({
    children,
    className = '',
    color = 'blue',
    display = 'inline',
    href
}: LinkProps) {
    const mixedClassName = `${link({color, display})} ${className}`;

    const isLinkRelative = href.startsWith('/');

    if (isLinkRelative) {
        return (
            <NextLink href={href} className={mixedClassName}>
                {children}
            </NextLink>
        );
    }

    return (
        <a
            className={mixedClassName}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}
