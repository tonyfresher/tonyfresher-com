import {CSSProperties, ReactNode} from 'react';

import {cn} from 'lib/cn';

export interface PageProps {
    children: ReactNode;
    theme?: 'light' | 'dark';
}

const baseClassName = cn(
    'min-h-screen box-border',
    'grid justify-center gap-x-16',
    'grid-cols-[repeat(6,minmax(0,128px))]',
    'px-[var(--page-padding-x)] py-[var(--page-padding-y)]',
    'text-[length:var(--text-font-size)] leading-[var(--text-line-height)]',
    'bg-[var(--color-background-surface)] text-[color:var(--color-content-primary)]',
    'max-[960px]:flex max-[960px]:flex-col max-[960px]:gap-0'
);

const darkThemeStyles = {
    '--color-content-primary-rgb': '255, 255, 255',
    '--color-content-primary': 'rgb(255, 255, 255)',
    '--color-content-secondary': 'rgba(255, 255, 255, 0.3)',
    '--color-background-default': 'rgb(0, 0, 0)',
    '--color-background-surface': 'rgb(10, 10, 10)'
} as const;

export default function Page({children, theme = 'light'}: PageProps) {
    return (
        <main
            className={baseClassName}
            style={
                theme === 'dark'
                    ? (darkThemeStyles as CSSProperties)
                    : undefined
            }
        >
            {children}
        </main>
    );
}
