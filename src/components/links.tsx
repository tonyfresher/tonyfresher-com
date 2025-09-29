import Link from '@/components/link'

const strings = {
    links: [
        {
            service: 'E-mail',
            link: 'mailto:hey@tonyfresher.com'
        },
        {
            service: 'LinkedIn',
            link: 'https://www.linkedin.com/in/tonyfresher/'
        },
        {
            service: 'Instagram',
            link: 'https://instagram.com/tonyfresher'
        },
        {
            service: 'Twitter',
            link: 'https://www.twitter.com/tonyfresher/'
        },
        {
            service: 'Telegram',
            link: 'https://t.me/tonyfresher'
        }
    ]
}

export default function Links() {
    return (
        <div className="flex flex-col gap-y-4 text-2xl leading-relaxed">
            {strings.links.map(({ service, link }) => (
                <Link className="w-max" key={service} href={link} display="inline-block">
                    {service}
                </Link>
            ))}
        </div>
    )
}
