import { type ElementType } from 'react'

export type VibeType = 'rain' | 'halo'

export interface Vibe {
    type: VibeType
    name: string
    icon: ElementType
    sound?: string // Path to audio file in /public
}
