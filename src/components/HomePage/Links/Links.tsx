import Link from 'components/Link';

const strings = {
    links: [
        {
            service: 'E-mail',
            link: 'mailto:hey@tonyfresher.com'
        },
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
            service: 'Letterboxd',
            link: 'https://letterboxd.com/tonyfresher/'
        }
    ]
};

export default function Links() {
    return (
        <div className="mt-16 flex flex-col gap-3 max-[960px]:mt-10">
            {strings.links.map(({service, link}) => (
                <Link
                    className="w-max"
                    key={service}
                    href={link}
                    display="inline-block"
                >
                    {service}
                </Link>
            ))}
        </div>
    );
}
