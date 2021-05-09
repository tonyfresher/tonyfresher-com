import {ReactNode} from 'react';

interface PageMenuItem {
    label: string;
    link: string;
}
export interface PageProps {
    children: ReactNode;
    direction?: 'vertical' | 'horizontal';
    menu?: PageMenuItem[];
    theme?: 'light' | 'dark';
}
