import {useRouter} from 'next/router';

import Link from 'components/Link';

import {cn} from 'lib/classname';

import {PageProps} from './types';

import styles from './Page.module.css';

const page = cn('Page', styles);

const DEFAULT_MENU = [
    {label: 'Anton Fresher', link: '/'},
    {label: 'Work', link: '/work'}
];

export default function Page({
    children,
    menu = DEFAULT_MENU,
    theme = 'light'
}: PageProps) {
    const router = useRouter();

    return (
        <div className={page({theme})}>
            <div className={page('Container')}>
                <div className={page('Menu')}>
                    {menu.map(({label, link}) => (
                        <div
                            className={page('MenuLink', {
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
                <main className={page('Content')}>{children}</main>
            </div>
        </div>
    );
}
