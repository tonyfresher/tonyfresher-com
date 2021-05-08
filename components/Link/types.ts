import {PropsWithChildren} from 'react';

export type LinkProps = PropsWithChildren<{
    className?: string;
    href: string;
    color?: 'blue' | 'inherit';
    display?: 'inline' | 'inline-block';
}>;
