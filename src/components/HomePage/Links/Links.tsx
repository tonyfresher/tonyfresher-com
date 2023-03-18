import {cn} from 'lib/classname';

import Link from 'components/Link';

import styles from '../HomePage.module.css';

const links = cn('Links', styles);

const strings = {
    links: [
        {
            service: 'Twitter',
            link: 'https://www.twitter.com/tonyfresher/',
            username: '@tonyfresher'
        },
        {
            service: 'Instagram',
            link: 'https://instagram.com/tonyfresher',
            username: '@tonyfresher'
        },
        {
            service: 'Linkedin',
            link: 'https://www.linkedin.com/in/tonyfresher/',
            username: '@tonyfresher'
        },
        {
            service: 'Telegram',
            link: 'https://t.me/tonyfresher',
            username: '@tonyfresher'
        },
        {
            service: 'E-mail',
            link: 'mailto:hey@tonyfresher.com',
            username: 'hey@tonyfresher.com'
        }
    ]
};

export default function Links() {
    return (
        <div className={links()}>
            {strings.links.map(({service, link, username}) => (
                <div className={links('Link')} key={service}>
                    <Link view="clear" href={link}>
                        {service}
                    </Link>
                    <span className={links('LinkUsername')}>{username}</span>
                </div>
            ))}
        </div>
    );
}
