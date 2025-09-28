import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import EmojiFavicon from '@/components/emoji-favicon'

import './global.css'

const description = "Hey, I'm Tony. I'm a product designer and engineer."

export const metadata: Metadata = {
    title: {
        default: 'Tony Fresher',
        template: '%s — Tony Fresher'
    },
    description,
    openGraph: {
        title: 'Tony Fresher',
        description,
        locale: 'en_US',
        siteName: 'Tony Fresher',
        type: 'website'
    }
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <EmojiFavicon />
                {children}
            </body>
        </html>
    )
}
