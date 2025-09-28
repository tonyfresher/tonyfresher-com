'use client'

import { useEffect } from 'react'

import { usePathname } from 'next/navigation'

function getEmoji(pathname: string): string {
    if (pathname.includes('/work')) {
        return '🤔'
    }

    if (pathname.includes('/writing')) {
        return '✏️'
    }

    if (pathname.includes('/books')) {
        return '📚'
    }

    return '✋'
}

function updateFavicon(emoji: string) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`
    const href = `data:image/svg+xml,${encodeURIComponent(svg)}`

    let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')

    if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
    }

    link.href = href
}

export default function EmojiFavicon() {
    const pathname = usePathname()

    useEffect(() => {
        updateFavicon(getEmoji(pathname))
    }, [pathname])

    return null
}
