'use client'

import { usePathname } from 'next/navigation'

import Link from '@/components/link'
import { cn } from '@/lib/cn'

const DEFAULT_MENU = [
    { label: 'Anton Fresher', link: '/' },
    { label: 'Work', link: '/work' },
    { label: 'Newsletter', link: 'https://tonyfresher.substack.com' }
]

interface PageMenuItem {
    label: string
    link: string
}
export interface PageMenuProps {
    items?: PageMenuItem[]
}

export default function PageMenu({ items = DEFAULT_MENU }: PageMenuProps) {
    const pathname = usePathname()

    return (
        <nav
            className={cn(
                'col-[2/-2] mb-[var(--page-padding-y)] flex flex-wrap gap-x-5 gap-y-2',
                'whitespace-nowrap text-[color:var(--color-content-secondary)]'
            )}
        >
            {items.map(({ label, link }) => {
                const isCurrent = link === pathname

                return (
                    <Link
                        key={link}
                        href={link}
                        display="inline-block"
                        className={cn(
                            'text-inherit transition-colors duration-150 ease-out',
                            isCurrent && 'text-[color:var(--color-content-primary)]'
                        )}
                    >
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}
