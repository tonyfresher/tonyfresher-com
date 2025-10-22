'use client'

import { ReactNode, useRef } from 'react'

import FocusMode from '@/components/focus-mode'
import Links from '@/components/links'
import Menu from '@/components/menu'
import { cn } from '@/lib/cn'
import { useScrollDetection } from '@/lib/use-scroll-detection'

export default function MainLayout({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLElement>(null)
    const scrolled = useScrollDetection(120, ref as React.RefObject<HTMLElement>)

    return (
        <main className="relative">
            <div
                className={cn(
                    'bg-secondary',
                    'min-h-screen',
                    'flex flex-col gap-10',
                    'md:grid md:grid-cols-6 md:justify-center md:gap-x-16',
                    'p-14 max-sm:p-6'
                )}
            >
                <Menu className="md:hidden" />
                <div
                    className={cn(
                        '[&>*,&>*>*]:animate-focus flex flex-col',
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
            <FocusMode
                variant={scrolled ? 'default' : 'clear'}
                className={cn(
                    'fixed',
                    'md:right-8 md:bottom-8',
                    'max-md:top-[50px] max-sm:top-[18px]',
                    scrolled
                        ? 'max-md:right-1/2 max-md:translate-x-1/2'
                        : 'max-md:max-md:right-[50px] max-sm:right-[18px]'
                )}
            />
        </main>
    )
}
