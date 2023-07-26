import {useRouter} from 'next/router';

import Link from 'components/Link';

import {cn} from 'lib/classname';

import styles from './PageMenu.module.css';

const pageMenu = cn('PageMenu', styles);

const DEFAULT_MENU = [
    {label: 'Anton Fresher', link: '/'}
];

interface PageMenuItem {
    label: string;
    link: string;
}
export interface PageMenuProps {
    items?: PageMenuItem[];
}

export default function Page({items = DEFAULT_MENU}: PageMenuProps) {
    const router = useRouter();

    return (
        <div className={pageMenu()}>
            {items.map(({label, link}) => (
                <div
                    className={pageMenu('Link', {
                        current: link === router.pathname
                    })}
                    key={link}
                >
                    <Link display="inline-block" href={link}>
                        {label}
                    </Link>
                </div>
            ))}
        </div>
    );
}
