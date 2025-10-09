import { HomeSmile, Wind01 } from '@untitledui/icons'

import type { Vibe } from '@/types'

export const VIBES: Vibe[] = [
    {
        type: 'halo',
        name: 'Focused',
        icon: Wind01,
        sound: '/sounds/meditation.mp3'
    },
    {
        type: 'rain',
        name: 'Homey',
        icon: HomeSmile,
        sound: '/sounds/rain-and-thunder.mp3'
    }
]
