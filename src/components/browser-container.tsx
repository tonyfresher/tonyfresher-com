'use client'

import { ImgHTMLAttributes, PropsWithChildren, useEffect, useState } from 'react'

import Video, { VideoProps } from '@/components/video'
import { cn } from '@/lib/cn'

interface BrowserContainerProps extends PropsWithChildren {
    type: 'image' | 'video' | 'gallery'
    aspectRatio?: string
}

const baseContainerClass = cn('bg-glassy rounded-md p-2')

const baseWindowClass = cn(
    'w-full overflow-hidden rounded-[5px]',
    'shadow-[0_0_6px_rgba(0,0,0,0.16)]'
)

export function BrowserContainer({ type, aspectRatio, children }: BrowserContainerProps) {
    return (
        <div
            className={cn(
                baseContainerClass,
                type === 'gallery' &&
                    'grid [grid-template-columns:176px_1fr] gap-2 max-[960px]:grid-cols-1'
            )}
        >
            <div
                className={cn(baseWindowClass, type === 'image' && 'overflow-y-auto')}
                style={{ aspectRatio }}
            >
                {children}
            </div>
        </div>
    )
}

interface BrowserContainerImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: string
}

export function BrowserContainerImage({
    aspectRatio,
    className,
    ...props
}: BrowserContainerImageProps) {
    return (
        <BrowserContainer type="image" aspectRatio={aspectRatio}>
            <img className={cn('block w-full', className)} {...props} />
        </BrowserContainer>
    )
}

export function BrowserContainerVideo(props: VideoProps) {
    return (
        <BrowserContainer type="video">
            <Video {...props} />
        </BrowserContainer>
    )
}

interface GalleryItem {
    label: string
    src: string
}

interface BrowserContainerGalleryProps {
    title: string
    items: GalleryItem[]
}

const sidebarClassName = cn('flex flex-col')
const dotsClassName = cn('m-2 flex gap-[6px] max-[960px]:hidden')
const dotClassName = cn('bg-glassy h-3 w-3 rounded-full')
const sectionTitleClassName = cn(
    'mx-2 mt-4 mb-3 text-[12px] leading-none font-bold',
    'text-muted-foreground',
    'max-[960px]:hidden'
)
const tabsClassName = cn(
    'flex flex-col gap-1 overflow-y-auto pr-1',
    'max-[960px]:-m-2 max-[960px]:flex-row max-[960px]:gap-x-1 max-[960px]:gap-y-0 max-[960px]:p-2',
    'max-[960px]:overflow-x-auto max-[960px]:overflow-y-hidden'
)
const tabBaseClass = cn(
    'flex items-center gap-2 rounded-sm border-0 bg-transparent p-2 text-left',
    'font-sans text-[14px] leading-4 font-[var(--text-font-weight)]',
    'transition-transform duration-100 ease-out'
)
const tabSelectedClass = cn('bg-white shadow-[0_2px_1px_rgba(0,0,0,0.06)]')
const tabUnselectedClass = cn(
    'hover:bg-glassy cursor-pointer',
    'active:scale-98 active:bg-white active:shadow-[0_2px_1px_rgba(0,0,0,0.06)]',
    'max-[960px]:bg-glassy'
)
const tabFaviconClass = cn('h-4 w-4 max-[960px]:hidden')
const tabLabelClass = cn('truncate')

export function BrowserContainerGallery({ title, items }: BrowserContainerGalleryProps) {
    const [selectedTab, setSelectedTab] = useState(items[0])
    const [autoplay, setAutoplay] = useState(true)

    useEffect(() => {
        if (!autoplay) {
            return
        }

        const interval = setInterval(() => {
            const currentIndex = items.findIndex(({ src }) => src === selectedTab.src)

            setSelectedTab(items[(currentIndex + 1) % items.length])
        }, 5000)

        return () => clearInterval(interval)
    }, [autoplay, items, selectedTab.src])

    return (
        <div
            className={cn(
                baseContainerClass,
                'grid [grid-template-columns:176px_1fr] gap-2 max-[960px]:grid-cols-1'
            )}
            onClick={() => setAutoplay(false)}
        >
            <div className={sidebarClassName}>
                <div className={dotsClassName}>
                    <div className={dotClassName} />
                    <div className={dotClassName} />
                    <div className={dotClassName} />
                </div>
                <span className={sectionTitleClassName}>{title}</span>
                <div className={tabsClassName}>
                    {items.map(tab => {
                        const isSelected = tab.src === selectedTab.src

                        return (
                            <button
                                key={tab.label}
                                className={cn(
                                    tabBaseClass,
                                    isSelected ? tabSelectedClass : tabUnselectedClass
                                )}
                                onClick={() => setSelectedTab(tab)}
                                title={tab.label}
                            >
                                <img
                                    className={tabFaviconClass}
                                    src="/tripleten/favicon.svg"
                                    alt="Favicon"
                                />
                                <span className={tabLabelClass}>{tab.label}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
            <img
                className={cn(baseWindowClass, 'block max-h-full object-cover')}
                src={selectedTab.src}
                alt={selectedTab.label}
            />
        </div>
    )
}
