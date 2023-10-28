import {cn} from 'lib/classname';

import Link from 'components/Link';

import styles from '../HomePage.module.css';

const links = cn('Links', styles);

const strings = {
    links: [
        {
            service: 'Linkedin',
            link: 'https://www.linkedin.com/in/tonyfresher/'
        },
        {
            service: 'Twitter',
            link: 'https://www.twitter.com/tonyfresher/'
        },
        {
            service: 'Instagram',
            link: 'https://instagram.com/tonyfresher'
        },
        {
            service: 'Telegram',
            link: 'https://t.me/tonyfresher'
        },
        {
            service: 'E-mail',
            link: 'mailto:hey@tonyfresher.com'
        }
    ]
};

export default function Links() {
    return (
        <div className={links()}>
            {strings.links.map(({service, link}) => (
                <Link className={links('Link')} key={service} href={link}>
                    {service}
                </Link>
            ))}
        </div>
    );
}
