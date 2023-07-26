import {ReactNode} from 'react';

import {cn} from 'lib/classname';

import styles from './Page.module.css';

const page = cn('Page', styles);

export interface PageProps {
    children: ReactNode;
    theme?: 'light' | 'dark';
}

export default function Page({children, theme = 'light'}: PageProps) {
    return <main className={page({theme})}>{children}</main>;
}
