'use client'

import { useEffect, useRef } from 'react'

import type { Vibe } from '@/types/vibe'

interface VibeSoundProps {
    vibe: Vibe | null
}

export default function VibeSound({ vibe }: VibeSoundProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Stop current audio if playing
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }

        // Start new audio if vibe is selected and has a sound
        if (vibe?.sound) {
            const audio = new Audio(vibe.sound)
            audio.volume = 0.5
            audio.loop = true

            audio.play().catch(error => {
                console.warn('Audio playback failed:', error)
            })

            audioRef.current = audio
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [vibe])

    return null
}
