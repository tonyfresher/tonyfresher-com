import {useRouter} from 'next/router';

import Logo from 'components/Logo';

import {cn} from 'lib/classname';

import {PageProps} from './types';

import styles from './Page.module.css';

const page = cn('Page', styles);

export default function Page({children, direction = 'vertical'}: PageProps) {
    const router = useRouter();

    const logoView = router.pathname === '/' ? 'bold' : 'default';

    return (
        <div className={page({direction})}>
            <div className={page('Container')}>
                <Logo view={logoView} />
                <main className={page('Content')}>{children}</main>
            </div>
        </div>
    );
}
