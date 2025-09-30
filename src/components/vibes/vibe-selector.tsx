'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/cn'
import type { Vibe } from '@/types/vibe'

import { VIBES } from './config'
import VibeOverlay from './vibe-overlay'
import VibeSound from './vibe-sound'

const strings = {
    selectVibe: 'Select vibe'
}

interface VibeMenuProps {
    currentVibe: Vibe | null
    onVibeSelect: (vibe: Vibe | null) => void
}

function VibeMenu({ currentVibe, onVibeSelect }: VibeMenuProps) {
    return (
        <div
            className={cn(
                'bg-background border-border absolute mb-3 rounded-lg border backdrop-blur-sm',
                'min-w-[240px] shadow-lg',
                // Position menu above button by default
                'right-0 bottom-full'
            )}
        >
            <div className="p-2">
                {VIBES.map(vibe => (
                    <button
                        key={vibe.type}
                        onClick={() => onVibeSelect(vibe)}
                        className={cn(
                            'hover:bg-glassy w-full rounded-md px-3 py-2 text-left transition-colors',
                            currentVibe?.type === vibe.type && 'bg-glassy'
                        )}
                    >
                        <div className="font-medium">{vibe.name}</div>
                    </button>
                ))}
            </div>
        </div>
    )
}

interface VibeSelectorProps {
    className?: string
}

export default function VibeSelector({ className }: VibeSelectorProps) {
    const [currentVibe, setCurrentVibe] = useState<Vibe | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    const handleSelectClick = (e: React.MouseEvent) => {
        // Check if click was on the X icon area
        const target = e.target as HTMLElement
        if (target.closest('[data-remove-vibe]')) {
            handleVibeSelect(null)
            return
        }

        setIsMenuOpen(!isMenuOpen)
    }

    const handleVibeSelect = (vibe: Vibe | null) => {
        setCurrentVibe(vibe)
        setIsMenuOpen(false)
    }

    return (
        <>
            <VibeSound vibe={currentVibe} />
            <VibeOverlay vibe={currentVibe} />

            <div ref={menuRef} className={cn('relative', className)}>
                {isMenuOpen && (
                    <VibeMenu currentVibe={currentVibe} onVibeSelect={handleVibeSelect} />
                )}

                <button
                    onClick={handleSelectClick}
                    className={cn(
                        'bg-background text-xl',
                        'flex h-14 items-center justify-center rounded-md px-4',
                        'shadow-lg transition-all duration-200',
                        'active:scale-98',
                        !isMenuOpen && 'hover:scale-102'
                    )}
                >
                    <div className="flex items-center gap-2">
                        {currentVibe ? (
                            <>
                                <span>{currentVibe.name}</span>
                                {currentVibe.sound && (
                                    <button
                                        onClick={e => {
                                            e.stopPropagation()
                                            handleVibeSelect(null)
                                        }}
                                        className="ml-2 flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-gray-200"
                                        aria-label="Remove vibe"
                                    >
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 6L6 18" />
                                            <path d="M6 6l12 12" />
                                        </svg>
                                    </button>
                                )}
                            </>
                        ) : (
                            <span>{strings.selectVibe}</span>
                        )}
                    </div>
                </button>
            </div>
        </>
    )
}
