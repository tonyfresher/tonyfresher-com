import { RefObject, useEffect, useState } from 'react'

export function useScrollDetection(
    threshold: number = 8,
    scrollElement?: RefObject<HTMLElement>
): boolean {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const element = scrollElement?.current || window

        const onScroll = () => {
            const scrollTop =
                element === window ? window.scrollY : (element as HTMLElement).scrollTop
            setScrolled(scrollTop > threshold)
        }

        // Check initial scroll position
        onScroll()

        // Add scroll listener with passive option for better performance
        element.addEventListener('scroll', onScroll, { passive: true })

        return () => element.removeEventListener('scroll', onScroll)
    }, [threshold, scrollElement])

    return scrolled
}
