'use client'

import Link from '@/components/link'
import { cn } from '@/lib/cn'

const DEFAULT_MENU = [
    { label: 'Index', link: '/' },
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
        <nav className={cn('flex flex-row items-end gap-4 md:flex-col', className)}>
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
