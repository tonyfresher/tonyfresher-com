'use client'

import { useState } from 'react'

import { Maximize02, XClose } from '@untitledui/icons'

import { cn } from '@/lib/cn'

import FocusOverlay from './focus-overlay'
import FocusSound from './focus-sound'

interface FocusModeProps {
    className?: string
    variant?: 'default' | 'clear'
}

export default function FocusMode({ className, variant = 'default' }: FocusModeProps) {
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    const handleClose = () => {
        setIsActive(false)
    }

    return (
        <>
            <FocusSound isActive={isActive} />
            <FocusOverlay isActive={isActive} />

            <div className={cn('relative flex items-center gap-2', className)}>
                {!isActive ? (
                    <button
                        type="button"
                        onClick={handleToggle}
                        className={cn(
                            'flex h-14 items-center gap-1 rounded-lg px-5 text-xl transition-all',
                            'hover:bg-bright hover:text-bright-foreground hover:shadow-lg',
                            'max-md:h-10 max-md:gap-1 max-md:rounded-md max-md:px-3',
                            'active:scale-98',
                            'cursor-pointer',
                            variant === 'default' && 'bg-bright text-bright-foreground shadow-lg'
                        )}
                    >
                        <Maximize02 className="size-5" strokeWidth={2.1} />
                        <span className="truncate px-1">Focus</span>
                    </button>
                ) : (
                    <div
                        className={cn(
                            'bg-bright relative overflow-hidden rounded-lg shadow-lg',
                            'h-32 w-48',
                            'max-md:h-28 max-md:w-40'
                        )}
                    >
                        {/* Video placeholder - will be added later */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                            <span className="text-muted-foreground text-sm">
                                Video will be here
                            </span>
                        </div>

                        {/* Close button */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className={cn(
                                'absolute top-2 right-2 z-10',
                                'flex size-8 items-center justify-center',
                                'bg-background/80 rounded-md backdrop-blur-sm',
                                'hover:bg-background transition-colors',
                                'max-md:size-7'
                            )}
                            aria-label="Close focus mode"
                        >
                            <XClose className="size-5 max-md:size-4" />
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
