'use client'

import { useEffect, useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/cn'

const strings = {
    contents: 'Overview'
}

function useHeaders() {
    const [loaded, setLoaded] = useState(false)
    const [headers, setHeaders] = useState<Element[]>([])
    const [currentHeader, setCurrentHeader] = useState<Element | null>(null)

    useEffect(() => {
        if (document.readyState === 'complete') {
            setLoaded(true)
        } else {
            const callback = () => setLoaded(true)

            window.addEventListener('load', callback)
            return () => window.removeEventListener('load', callback)
        }
    }, [])

    useEffect(() => {
        if (!loaded) return

        const headerElements = Array.from(document.querySelectorAll('article > h2'))
        setHeaders(headerElements)

        // Set up intersection observer to track visible sections
        const observer = new IntersectionObserver(
            entries => {
                const windowHeight = window.innerHeight

                const entry = entries.reduce((closest, current) => {
                    const closestDistance = Math.abs(closest.boundingClientRect.top - windowHeight)
                    const currentDistance = Math.abs(current.boundingClientRect.top - windowHeight)

                    return currentDistance < closestDistance ? current : closest
                })

                // Ignore top of the page intersections
                if (entry.boundingClientRect.top <= entry.boundingClientRect.height) {
                    return
                }
                // Scrolling down
                else if (entry.isIntersecting && entry.boundingClientRect.bottom <= windowHeight) {
                    setCurrentHeader(entry.target)
                }
                // Scrolling up
                else if (!entry.isIntersecting && entry.boundingClientRect.top >= windowHeight) {
                    const currentIndex = headerElements.findIndex(h => h.id === entry.target.id)
                    setCurrentHeader(headerElements[Math.max(currentIndex - 1, 0)])
                }
                // Initial scroll
                else {
                    setCurrentHeader(entry.target)
                }
            },
            { threshold: [0, 1] }
        )

        headerElements.forEach(header => observer.observe(header))

        return () => observer.disconnect()
    }, [loaded])

    return { headers, currentHeader }
}

export default function TableOfContents() {
    const { headers, currentHeader } = useHeaders()
    const [open, setOpen] = useState(false)

    const handleItemClickFactory = (sectionId: string) => (e: Event) => {
        e.preventDefault()

        const item = document.getElementById(sectionId)

        if (!item) return

        const itemPosition = item.getBoundingClientRect().top
        const offsetPosition = itemPosition + window.pageYOffset - 64

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }

    if (headers.length < 2) return null

    return (
        <div className="fixed top-1/2 left-3 -translate-y-1/2 max-sm:hidden">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <div
                        className="flex cursor-pointer flex-col gap-2"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        {headers.map(header => (
                            <div
                                key={header.id}
                                className={cn(
                                    'h-0.5 w-3 transition-colors duration-200 ease-out',
                                    currentHeader?.id === header.id
                                        ? 'bg-foreground'
                                        : 'bg-accent-secondary'
                                )}
                            />
                        ))}
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    side="right"
                    sideOffset={-16}
                    align="center"
                    className="min-w-48"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <DropdownMenuLabel>{strings.contents}</DropdownMenuLabel>
                    {headers.map(header => (
                        <DropdownMenuItem
                            key={header.id}
                            onSelect={handleItemClickFactory(header.id)}
                            className={cn(currentHeader?.id === header.id && 'font-semibold')}
                        >
                            {header.textContent}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
