import type { CSSProperties, ReactNode } from 'react'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import EmojiFavicon from '@/components/emoji-favicon'
import PageMenu from '@/components/page-menu'
import { cn } from '@/lib/cn'

import './global.css'

const title = 'Anton Fresher'
const description = "Hey! I'm Anton, a product designer and engineer."

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
            <body>
                <EmojiFavicon />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <main
                        className={cn(
                            'box-border min-h-screen',
                            'grid justify-center gap-x-16',
                            'grid-cols-[repeat(6,minmax(0,128px))]',
                            'px-[var(--page-padding-x)] py-[var(--page-padding-y)]',
                            'text-[length:var(--text-font-size)] leading-[var(--text-line-height)]',
                            'bg-[var(--color-background-surface)] text-[color:var(--color-content-primary)]',
                            'max-[960px]:flex max-[960px]:flex-col max-[960px]:gap-0'
                        )}
                    >
                        <PageMenu />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}
