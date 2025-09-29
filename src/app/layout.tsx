import type { ReactNode } from 'react'

import type { Metadata } from 'next'

import EmojiFavicon from '@/components/emoji-favicon'

import './global.css'

const description = "Hey, I'm Anton. I'm a product designer and engineer."

export const metadata: Metadata = {
    title: {
        default: 'Anton Fresher',
        template: '%s — Anton Fresher'
    },
    description,
    openGraph: {
        title: 'Anton Fresher',
        description,
        locale: 'en_US',
        siteName: 'Anton Fresher',
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
