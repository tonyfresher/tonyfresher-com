'use client'

import Link from '@/components/link'

const DEFAULT_MENU = [
    { label: 'About', link: '/' },
    { label: 'Writing', link: 'https://tonyfresher.substack.com' }
]

interface PageMenuItem {
    label: string
    link: string
}
export interface PageMenuProps {
    items?: PageMenuItem[]
}

export default function Menu({ items = DEFAULT_MENU }: PageMenuProps) {
    return (
        <nav className="flex flex-col gap-y-4 text-2xl leading-relaxed">
            {items.map(({ label, link }) => {
                return (
                    <Link className="w-max" key={link} href={link} display="inline-block">
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}
