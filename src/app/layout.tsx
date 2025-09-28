import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import Providers from './providers'

import '@/styles/global.css'

const description = "Hey, I'm Tony. I'm a product designer and developer."

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
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
