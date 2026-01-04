'use client'

import { ImgHTMLAttributes, PropsWithChildren, useEffect, useState } from 'react'

import Video, { VideoProps } from '@/components/video'
import { cn } from '@/lib/cn'

interface MacintoshContainerProps extends PropsWithChildren {
    aspectRatio?: string
    onClick?: () => void
}

const slotBorderStyles = cn('border-[#B7B4AE] border-t-[#8C887D] border-b-[#CAC8C3] bg-[#B7B4AE]')

function MacintoshContainer({ aspectRatio, children, onClick }: MacintoshContainerProps) {
    return (
        <div
            className={cn(
                'relative w-full',
                'rounded-2xl p-8',
                'max-sm:rounded-lg max-sm:p-2',
                'bg-gradient-to-b from-[#E6E4DB] to-[#D3D1CD]',
                'shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.12),0_8px_24px_rgba(0,0,0,0.16),0_48px_112px_rgba(0,0,0,0.2),inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.07)]'
            )}
            onClick={onClick}
        >
            <div className={cn('relative rounded-sm border-24', slotBorderStyles)}>
                <div
                    className={cn(
                        'bg-primary',
                        '-m-3 rounded-3xl px-3 py-6',
                        'max-sm:-m-4 max-sm:rounded-xl max-sm:px-1 max-sm:py-3'
                    )}
                >
                    <div
                        className="overflow-hidden rounded-sm"
                        style={aspectRatio ? { aspectRatio } : undefined}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <div className={cn('relative my-12 flex items-center justify-end', 'max-sm:my-8')}>
                <div
                    className={cn(
                        '-mr-62 h-8 w-24 rounded-[3px] border-12',
                        'h-6 max-sm:-mr-60',
                        slotBorderStyles
                    )}
                />
                <div className={cn('bg-primary mx-3 h-2 w-56 rounded-[2px]', 'max-sm:mx-2')} />
            </div>
        </div>
    )
}

interface MacintoshContainerImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    aspectRatio?: string
}

export function MacintoshContainerImage({
    aspectRatio,
    className,
    ...props
}: MacintoshContainerImageProps) {
    return (
        <MacintoshContainer aspectRatio={aspectRatio}>
            <img className={cn('block w-full', className)} {...props} />
        </MacintoshContainer>
    )
}

export function MacintoshContainerVideo(props: VideoProps) {
    return (
        <MacintoshContainer>
            <Video {...props} />
        </MacintoshContainer>
    )
}

interface GalleryItem {
    label: string
    src: string
}

interface MacintoshContainerGalleryProps {
    title: string
    items: GalleryItem[]
}

export function MacintoshContainerGallery({ title, items }: MacintoshContainerGalleryProps) {
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
        <MacintoshContainer onClick={() => setAutoplay(false)}>
            <div className="flex h-full flex-col bg-[#1A1A1A]">
                {/* Browser Tabs */}
                <div
                    className={cn(
                        'flex w-full items-center gap-1 overflow-x-auto bg-[#1A1A1A] p-1.5',
                        'border-b border-white/5'
                    )}
                >
                    {items.map(tab => {
                        const isSelected = tab.src === selectedTab.src

                        return (
                            <button
                                key={tab.label}
                                className={cn(
                                    'flex max-w-[140px] min-w-0 shrink-0 items-center gap-2 rounded-[4px] px-3 py-1.5',
                                    'text-[10px] leading-tight font-medium transition-all duration-200',
                                    'cursor-pointer select-none',
                                    'border border-transparent',
                                    isSelected
                                        ? 'border-white/10 bg-[#2A2A2A] text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]'
                                        : 'bg-transparent text-[#8A8680] hover:bg-white/5 hover:text-white/70'
                                )}
                                onClick={() => setSelectedTab(tab)}
                                title={tab.label}
                            >
                                <div
                                    className={cn(
                                        'h-1.5 w-1.5 rounded-full',
                                        isSelected ? 'bg-[#FF5F57]' : 'bg-[#4C4C4C]'
                                    )}
                                />
                                <span className="truncate">{tab.label}</span>
                            </button>
                        )
                    })}
                </div>

                {/* Content Area */}
                <div className="relative flex-1 overflow-hidden bg-[#000]">
                    <img
                        className={cn(
                            'block max-h-full w-full object-cover',
                            'transition-opacity duration-300'
                        )}
                        src={selectedTab.src}
                        alt={selectedTab.label}
                    />
                </div>
            </div>
        </MacintoshContainer>
    )
}
