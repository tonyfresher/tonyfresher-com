'use client'

import { useState } from 'react'

import { XClose } from '@untitledui/icons'

import { cn } from '@/lib/cn'

const strings = {
    focus: 'Focus',
    stop: 'Stop'
}

interface FocusOverlayProps {
    isEnabled: boolean
}

function FocusOverlay({ isEnabled }: FocusOverlayProps) {
    return (
        <div
            className={cn(
                'pointer-events-none fixed inset-0',
                'transition-[box-shadow] duration-1000 ease-in-out',
                isEnabled
                    ? 'animate-glow shadow-[inset_0_0_32px_24px_var(--bright)] max-md:shadow-[inset_0_0_16px_16px_var(--bright)]'
                    : 'shadow-[inset_0_0_0px_0px_transparent]'
            )}
        />
    )
}

interface FocusModeProps {
    className?: string
    variant?: 'default' | 'clear'
}

export default function FocusMode({ className, variant = 'default' }: FocusModeProps) {
    const [isEnabled, setIsEnabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleEnable = () => {
        setIsEnabled(true)
        setIsLoading(true)
    }

    const handleDisable = () => {
        setIsEnabled(false)
        setIsLoading(false)
    }

    const handleVideoLoaded = () => {
        setIsLoading(false)
    }

    const buttonStyles = cn(
        'h-12 w-24',
        'max-md:h-10 max-md:w-22',
        'hover:bg-bright hover:text-bright-foreground hover:inset-shadow-button-bright hover:shadow-lg hover:brightness-95',
        'cursor-pointer active:scale-98',
        variant === 'default' &&
            'bg-bright text-bright-foreground inset-shadow-button-bright shadow-lg'
    )

    const videoStyles = cn('bg-bright text-bright-foreground aspect-square size-40 shadow-xl')

    return (
        <div className={cn('z-1', className)}>
            <div
                className={cn(
                    'relative flex items-center justify-center overflow-hidden rounded-lg max-md:rounded-md',
                    'transition-all duration-200 ease-out',
                    isEnabled ? videoStyles : buttonStyles
                )}
            >
                {isEnabled ? (
                    <>
                        {isLoading && (
                            <div className="border-bright-foreground absolute size-6 animate-spin rounded-full border-2 border-t-transparent" />
                        )}

                        <video
                            className="aspect-square size-full object-cover brightness-80"
                            onCanPlay={handleVideoLoaded}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/focus-mode/minecraft.webm" type="video/webm" />
                        </video>

                        <button
                            type="button"
                            onClick={handleDisable}
                            className={cn(
                                'absolute top-1.5 right-1.5',
                                'flex items-center gap-1 p-1.5 pl-3',
                                'bg-bright inset-shadow-button-bright rounded-sm shadow-lg',
                                'text-base leading-none font-medium',
                                'cursor-pointer'
                            )}
                            aria-label={strings.stop}
                        >
                            {strings.stop}
                            <XClose className="size-5" strokeWidth={2} />
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        onClick={handleEnable}
                        className={cn(
                            'flex h-full items-center gap-1 px-4 text-xl',
                            'cursor-[inherit] max-md:gap-1 max-md:px-3'
                        )}
                    >
                        <span className="truncate px-1">{strings.focus}</span>
                    </button>
                )}
            </div>

            <FocusOverlay isEnabled={isEnabled} />
        </div>
    )
}
