'use client'

import { useState } from 'react'

import { Maximize02, XClose } from '@untitledui/icons'

import { cn } from '@/lib/cn'

import FocusOverlay from './focus-overlay'
import FocusSound from './focus-sound'

const strings = {
    focus: 'Focus',
    close: 'Close'
}

interface FocusModeProps {
    className?: string
    variant?: 'default' | 'clear'
}

export default function FocusMode({ className, variant = 'default' }: FocusModeProps) {
    const [isEnabled, setIsEnabled] = useState(false)

    const handleEnable = () => {
        setIsEnabled(true)
    }

    const handleDisable = () => {
        setIsEnabled(false)
    }

    const buttonStyles = cn(
        'h-14 w-32',
        'max-md:h-10 max-md:w-25',
        'hover:bg-bright hover:text-bright-foreground hover:shadow-lg',
        'active:scale-98',
        variant === 'default' && 'bg-bright text-bright-foreground shadow-lg'
    )

    const videoStyles = cn(
        'bg-bright text-bright-foreground border-bright size-50 border-6 shadow-lg'
    )

    return (
        <>
            <FocusSound isEnabled={isEnabled} />
            {/* <FocusOverlay isEnabled={isEnabled} /> */}

            <div
                className={cn(
                    'relative flex items-center justify-center overflow-hidden rounded-lg',
                    'transition-[width,height,background,color,box-shadow] duration-200 ease-in-out',
                    isEnabled ? videoStyles : buttonStyles,
                    className
                )}
            >
                {isEnabled ? (
                    <>
                        <video
                            className="aspect-square size-full object-cover"
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
                                'absolute -top-1.5 -right-1.5',
                                'flex items-center gap-1 p-1.5 pl-[10px]',
                                'bg-bright rounded-bl-md',
                                'text-base leading-none font-medium',
                                'cursor-pointer'
                            )}
                            aria-label={strings.close}
                        >
                            {strings.close}
                            <XClose className="size-5" strokeWidth={2.1} />
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        onClick={handleEnable}
                        className={cn(
                            'flex h-full items-center gap-1 px-5 text-xl',
                            'max-md:gap-1 max-md:px-3',
                            'cursor-pointer'
                        )}
                    >
                        <Maximize02 className="size-5" strokeWidth={2.1} />
                        <span className="truncate px-1">{strings.focus}</span>
                    </button>
                )}
            </div>
        </>
    )
}
