import Link from 'components/Link';

import {cn} from 'utils/classname';

import i18n from './i18n/ru';
import {LogoProps} from './types';

import styles from './Logo.module.css';

const logo = cn('Logo', styles);

export default function Logo(props: LogoProps) {
    const {view = 'default'} = props;

    return (
        <Link className={logo({view})} href="/">
            {i18n.name}
        </Link>
    );
}
