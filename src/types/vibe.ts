export type VibeType = 'rain' | 'halo'

export interface Vibe {
    type: VibeType
    name: string
    sound?: string // Path to audio file in /public
}
