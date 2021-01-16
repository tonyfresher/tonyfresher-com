import {useRouter} from 'next/router';

import Logo from 'components/Logo';

import {cn} from 'utils/classname';

import {PageProps} from './types';

import styles from './Page.module.css';

const page = cn('Page', styles);

export default function Page(props: PageProps) {
    const {children, direction = 'vertical'} = props;

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
