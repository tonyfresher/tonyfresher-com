import {ReactNode} from 'react';

interface PageMenuItem {
    label: string;
    link: string;
}
export interface PageProps {
    menu?: PageMenuItem[];
    children: ReactNode;
    direction?: 'vertical' | 'horizontal';
}
