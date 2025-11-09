import type { ReactNode } from 'react'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import EmojiFavicon from '@/components/emoji-favicon'
import ScrollToTop from '@/components/scroll-to-top'
import { cn } from '@/lib/cn'

import './global.css'
import MainWrapper from './main-wrapper'

const title = 'Anton Fresher'
const description = "Hey! I'm Anton, a product designer and engineer"

export const metadata: Metadata = {
    title: {
        default: title,
        template: `%s — ${title}`
    },
    description,
    openGraph: {
        title,
        description,
        locale: 'en_US',
        siteName: title,
        type: 'website'
    }
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn('font-regular font-sans antialiased')}>
                <EmojiFavicon />
                <ScrollToTop />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <MainWrapper>{children}</MainWrapper>
                </ThemeProvider>
            </body>
        </html>
    )
}
