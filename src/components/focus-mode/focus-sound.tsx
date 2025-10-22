'use client'

import { useEffect, useRef } from 'react'

const SOUND_PATH = '/focus-mode/meditation.mp3'

interface FocusSoundProps {
    isEnabled: boolean
}

export default function FocusSound({ isEnabled }: FocusSoundProps) {
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
            audio.volume = 0.5
            audio.loop = true

            audio.play()

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
