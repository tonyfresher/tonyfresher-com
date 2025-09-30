import type { ReactNode } from 'react'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Instrument_Sans, Slackey } from 'next/font/google'

import EmojiFavicon from '@/components/emoji-favicon'
import Links from '@/components/links'
import Menu from '@/components/menu'
import { cn } from '@/lib/cn'

import './global.css'

const instrumentSans = Instrument_Sans({
    subsets: ['latin-ext'],
    variable: '--font-instrument-sans',
    axes: ['wdth'],
    display: 'swap'
})

const slackey = Slackey({
    subsets: ['latin'],
    variable: '--font-slackey',
    weight: '400',
    display: 'swap'
})

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
            <body
                className={`${instrumentSans.variable} ${slackey.variable} font-regular font-sans antialiased`}
            >
                <EmojiFavicon />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div
                        className={cn(
                            'bg-secondary',
                            'min-h-screen',
                            'flex flex-col gap-10',
                            'md:grid md:grid-cols-[repeat(6,minmax(0,128px))] md:justify-center md:gap-x-16',
                            'p-14 max-sm:p-6'
                        )}
                    >
                        <Menu className="md:hidden" />
                        <div
                            className={cn(
                                'block',
                                'md:col-span-5 md:row-span-5',
                                'md:grid md:grid-cols-5 md:gap-x-16'
                            )}
                        >
                            {children}
                        </div>
                        <div className="flex flex-col gap-16 md:sticky md:top-14 md:col-start-6 md:row-span-5 md:row-start-1 md:self-start">
                            <Menu className="hidden md:flex" />
                            <Links />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
