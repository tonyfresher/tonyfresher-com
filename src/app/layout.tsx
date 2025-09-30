import type { ReactNode } from 'react'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Instrument_Sans } from 'next/font/google'

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
            <body className={`${instrumentSans.variable} font-regular font-sans antialiased`}>
                <EmojiFavicon />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div
                        className={cn(
                            'min-h-screen',
                            'flex flex-col gap-10',
                            'md:grid md:grid-cols-[repeat(6,minmax(0,128px))] md:justify-center md:gap-x-16',
                            'mobile:p-6 p-14',
                            'bg-secondary'
                        )}
                    >
                        <Menu className="md:hidden" />
                        {children}
                        <div className="flex flex-col gap-16 md:sticky md:top-14 md:-col-end-1 md:row-span-full md:row-start-1 md:self-start">
                            <Menu className="hidden md:flex" />
                            <Links />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
