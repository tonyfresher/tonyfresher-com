'use client'

import { ReactNode, useRef } from 'react'

import useSound from 'use-sound'

import FocusMode from '@/components/focus-mode'
import Links from '@/components/links'
import Menu from '@/components/menu'
import { cn } from '@/lib/cn'
import { useScrollDetection } from '@/lib/use-scroll-detection'

export default function MainLayout({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLElement>(null)
    const scrolled = useScrollDetection(120, ref as React.RefObject<HTMLElement>)

    const [playClick] = useSound('/sounds/click.mp3')
    const handleClick = () => playClick()

    return (
        <main className="relative" onClick={handleClick}>
            <div
                className={cn(
                    'bg-secondary',
                    'min-h-screen',
                    'flex flex-col gap-10',
                    'md:grid md:grid-cols-6 md:justify-center md:gap-x-8 lg:gap-x-16',
                    'p-16 max-sm:p-6'
                )}
            >
                <Menu className="md:hidden" />

                <div
                    className={cn(
                        'flex flex-col',
                        '[&>*,&>*>*]:blur-in-xs [&>*,&>*>*]:fade-in [&>*,&>*>*]:animate-in [&>*,&>*>*]:fill-mode-both [&>*,&>*>*]:delay-200 [&>*,&>*>*]:duration-200 [&>*,&>*>*]:ease-in-out',
                        'md:col-span-5 md:row-span-5',
                        'md:grid md:grid-cols-5 md:gap-x-8 lg:gap-x-16'
                    )}
                >
                    {children}
                </div>

                <div className="flex flex-col gap-16 md:sticky md:top-16 md:col-start-6 md:row-span-5 md:row-start-1 md:self-start">
                    <Menu className="hidden md:flex" />
                    <Links />
                </div>
            </div>

            <FocusMode
                variant={scrolled ? 'default' : 'clear'}
                className={cn(
                    'fixed',
                    'md:right-11 md:bottom-11',
                    'max-md:top-[50px] max-md:right-[50px] max-sm:top-[18px] max-sm:right-[18px]'
                )}
            />
        </main>
    )
}
