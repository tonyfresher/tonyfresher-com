import {cn} from 'lib/classname';

import Link from 'components/Link';

import i18n from './i18n/ru';

import styles from '../Home.module.css';

const links = cn('Links', styles);

export default function Links() {
    return (
        <div className={links()}>
            {i18n.links.map(({service, link, username}) => (
                <div className={links('Link')} key={service}>
                    <Link href={link}>{service}</Link>
                    <span className={links('LinkUsername')}>{username}</span>
                </div>
            ))}
        </div>
    );
}
