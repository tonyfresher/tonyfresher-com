import {useRouter} from 'next/router';

import Link from 'components/Link';

import {cn} from 'lib/classname';

import {PageProps} from './types';

import styles from './Page.module.css';

const page = cn('Page', styles);

const DEFAULT_MENU = [{label: 'Антон Фрешер', link: '/'}];

export default function Page({
    children,
    direction = 'vertical',
    menu = DEFAULT_MENU,
    theme = 'light'
}: PageProps) {
    const router = useRouter();

    return (
        <div className={page({direction, theme})}>
            <div className={page('Container')}>
                <div className={page('Menu')}>
                    {menu.map(({label, link}) => (
                        <div
                            className={page('MenuLink', {
                                bold: link === router.pathname
                            })}
                            key={link}
                        >
                            <Link
                                color="inherit"
                                display="inline-block"
                                href={link}
                            >
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
