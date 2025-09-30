'use client'

import Link from '@/components/link'

const DEFAULT_MENU = [
    { label: 'About', link: '/' },
    { label: 'Notes', link: 'https://tonyfresher.substack.com' }
]

interface PageMenuItem {
    label: string
    link: string
}
export interface PageMenuProps {
    items?: PageMenuItem[]
    className?: string
}

export default function Menu({ items = DEFAULT_MENU, className }: PageMenuProps) {
    return (
        <nav className={`flex flex-row gap-4 text-xl md:flex-col md:gap-y-4 ${className || ''}`}>
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
