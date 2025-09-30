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

export interface LinksProps {
    className?: string
}

export default function Links({ className }: LinksProps) {
    return (
        <div
            className={`flex flex-row flex-wrap gap-4 text-xl md:flex-col md:gap-y-4 ${className || ''}`}
        >
            {strings.links.map(({ service, link }) => (
                <Link
                    className="w-max whitespace-nowrap"
                    key={service}
                    href={link}
                    display="inline-block"
                >
                    {service}
                </Link>
            ))}
        </div>
    )
}
