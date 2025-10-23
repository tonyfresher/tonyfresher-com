'use client'

import { useEffect, useRef, useState } from 'react'

import { Maximize02, XClose } from '@untitledui/icons'

import { cn } from '@/lib/cn'

const strings = {
    onboarding: 'Use your time wisely',
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

const SOUND_PATH = '/focus-mode/meditation.mp3'

interface FocusSoundProps {
    isEnabled: boolean
}

function FocusSound({ isEnabled }: FocusSoundProps) {
    const ref = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Stop current audio if playing
        if (ref.current) {
            ref.current.pause()
            ref.current.currentTime = 0
        }

        // Start audio if focus mode is active
        if (isEnabled) {
            const audio = new Audio(SOUND_PATH)
            audio.loop = true

            audio.play()
            audio.volume = 0.25

            ref.current = audio
        }

        return () => {
            if (ref.current) {
                ref.current.pause()
                ref.current = null
            }
        }
    }, [isEnabled])

    return null
}

const FOCUS_MODE_STORAGE_KEY = 'focus-mode-used'

function useShowOnboarding(
    onboardingEnabled: boolean,
    focusModeEnabled: boolean,
    buttonVariant: 'default' | 'clear'
) {
    const [hasBeenUsed, setHasBeenUsed] = useState(false)

    const shouldShowOnboarding =
        onboardingEnabled && buttonVariant === 'default' && !focusModeEnabled && !hasBeenUsed

    useEffect(() => {
        if (localStorage.getItem(FOCUS_MODE_STORAGE_KEY) === 'true') {
            setHasBeenUsed(true)
        }
    }, [])

    const hideOnboarding = () => {
        localStorage.setItem(FOCUS_MODE_STORAGE_KEY, 'true')
        setHasBeenUsed(true)
    }

    return {
        shouldShowOnboarding,
        hideOnboarding
    }
}

interface FocusModeProps {
    className?: string
    variant?: 'default' | 'clear'
    withOnboarding?: boolean
}

export default function FocusMode({
    className,
    variant = 'default',
    withOnboarding = false
}: FocusModeProps) {
    const [isEnabled, setIsEnabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const { shouldShowOnboarding, hideOnboarding } = useShowOnboarding(
        withOnboarding,
        isEnabled,
        variant
    )

    const handleEnable = () => {
        hideOnboarding()
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
        'h-12 w-30',
        'max-md:h-10 max-md:w-28',
        'hover:bg-bright hover:text-bright-foreground hover:inset-shadow-button-bright hover:shadow-lg hover:brightness-95',
        'cursor-pointer active:scale-98',
        variant === 'default' &&
            'bg-bright text-bright-foreground inset-shadow-button-bright shadow-lg'
    )

    const videoStyles = cn(
        'aspect-square size-50 max-md:size-40',
        'bg-bright text-bright-foreground shadow-xl'
    )

    return (
        <div className={cn('z-10 flex items-center gap-4', className)}>
            <FocusOverlay isEnabled={isEnabled} />
            <FocusSound isEnabled={isEnabled} />

            {shouldShowOnboarding && (
                <span className="text-muted-foreground w-24 text-right leading-tight max-md:hidden">
                    {strings.onboarding}
                </span>
            )}

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
                        <Maximize02 className="size-5" strokeWidth={2.2} />
                        <span className="truncate px-1">{strings.focus}</span>
                    </button>
                )}
            </div>
        </div>
    )
}
