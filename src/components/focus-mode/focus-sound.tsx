'use client'

import { useEffect, useRef } from 'react'

const SOUND_PATH = '/sounds/meditation.mp3'

interface FocusSoundProps {
    isActive: boolean
}

export default function FocusSound({ isActive }: FocusSoundProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        // Stop current audio if playing
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }

        // Start audio if focus mode is active
        if (isActive) {
            const audio = new Audio(SOUND_PATH)
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
    }, [isActive])

    return null
}
