import Link from 'components/Link';

import {cn} from 'lib/classname';

import i18n from './i18n/ru';
import {LogoProps} from './types';

import styles from './Logo.module.css';

const logo = cn('Logo', styles);

export default function Logo({view = 'default'}: LogoProps) {
    return (
        <Link className={logo({view})} href="/">
            {i18n.name}
        </Link>
    );
}
