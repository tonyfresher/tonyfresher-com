import {ReactNode} from 'react';

export interface PageProps {
    children: ReactNode;
    direction?: 'vertical' | 'horizontal';
}
