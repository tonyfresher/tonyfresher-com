'use client'

import type { Vibe } from '@/types/vibe'

const HALO_COLORS = {
    purple: 'rgb(168, 85, 247)',
    blue: 'rgb(59, 130, 246)',
    green: 'rgb(34, 197, 94)',
    orange: 'rgb(255, 89, 0)'
} as const

const BLUR_SIZES = {
    sm: '20px',
    md: '40px',
    lg: '60px',
    xl: '80px'
} as const

// Default configurations for each vibe type
const VIBE_CONFIGS = {
    rain: {
        intensity: 'medium' as 'low' | 'medium' | 'high'
    },
    halo: {
        color: 'purple' as keyof typeof HALO_COLORS,
        blur: 'xl' as keyof typeof BLUR_SIZES
    }
}

interface VibeOverlayProps {
    vibe: Vibe | null
}

export default function VibeOverlay({ vibe }: VibeOverlayProps) {
    if (!vibe) {
        return null
    }

    switch (vibe.type) {
        case 'rain':
            return <RainOverlay />
        case 'halo':
            return <HaloOverlay />
        default:
            return null
    }
}

function RainOverlay() {
    const { intensity } = VIBE_CONFIGS.rain
    const animationDuration = intensity === 'high' ? '0.5s' : '1s'

    return (
        <OverlayContainer>
            <BackgroundTint opacity={0.2} color="rgb(23, 37, 84)" />
            <RainEffect duration={animationDuration} />
            <RainFilter />
        </OverlayContainer>
    )
}

function RainEffect({ duration }: { duration: string }) {
    return (
        <div className="absolute inset-0">
            <div
                className="h-full w-full animate-pulse"
                style={{
                    background: `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 255, 255, 0.03) 2px,
                        rgba(255, 255, 255, 0.03) 4px
                    )`,
                    animationDuration: duration
                }}
            />
        </div>
    )
}

function RainFilter() {
    return (
        <svg className="absolute inset-0 h-full w-full opacity-30">
            <filter id="rain-blur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            </filter>
        </svg>
    )
}

function HaloOverlay() {
    const { color, blur } = VIBE_CONFIGS.halo
    const colorValue = HALO_COLORS[color]
    const blurValue = BLUR_SIZES[blur]

    return (
        <OverlayContainer>
            <InnerGlow color={colorValue} blur={blurValue} />
            <EdgeGlows color={colorValue} blur={blurValue} />
        </OverlayContainer>
    )
}

function InnerGlow({ color, blur }: { color: string; blur: string }) {
    return (
        <div
            className="absolute inset-0"
            style={{
                boxShadow: `inset 0 0 ${blur} ${color}40`,
                borderRadius: '0'
            }}
        />
    )
}

function EdgeGlows({ color, blur }: { color: string; blur: string }) {
    const edges = [
        { position: 'top-0 left-0', size: 'h-full w-1', direction: 'to bottom' },
        { position: 'top-0 right-0', size: 'h-full w-1', direction: 'to bottom' },
        { position: 'top-0 left-0', size: 'h-1 w-full', direction: 'to right' },
        { position: 'bottom-0 left-0', size: 'h-1 w-full', direction: 'to right' }
    ]

    return (
        <div className="absolute inset-0 rounded-none">
            {edges.map((edge, index) => (
                <EdgeGlow
                    key={index}
                    position={edge.position}
                    size={edge.size}
                    direction={edge.direction}
                    color={color}
                    blur={blur}
                />
            ))}
        </div>
    )
}

function EdgeGlow({
    position,
    size,
    direction,
    color,
    blur
}: {
    position: string
    size: string
    direction: string
    color: string
    blur: string
}) {
    return (
        <div
            className={`absolute ${position} ${size}`}
            style={{
                background: `linear-gradient(${direction}, transparent, ${color}80, transparent)`,
                filter: `blur(${blur})`
            }}
        />
    )
}

function OverlayContainer({ children }: { children: React.ReactNode }) {
    return <div className="pointer-events-none fixed inset-0 z-40">{children}</div>
}

function BackgroundTint({ opacity, color }: { opacity: number; color: string }) {
    return <div className="absolute inset-0" style={{ backgroundColor: color, opacity }} />
}
