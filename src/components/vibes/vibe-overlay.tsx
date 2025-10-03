'use client'

import type { Vibe } from '@/types/vibe'

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
    return (
        <OverlayContainer>
            <div className="absolute inset-0 bg-slate-950/70" />
            <div
                className="absolute inset-0 animate-pulse opacity-60"
                style={{
                    background: `repeating-linear-gradient(
                        100deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 255, 255, 0.08) 2px,
                        rgba(255, 255, 255, 0.08) 4px
                    )`
                }}
            />
            <div
                className="absolute inset-0 opacity-30 mix-blend-screen"
                style={{
                    background:
                        'radial-gradient(circle at 50% 20%, rgba(148, 163, 184, 0.4), transparent 60%)'
                }}
            />
        </OverlayContainer>
    )
}

function HaloOverlay() {
    return (
        <OverlayContainer>
            <div className="absolute inset-0 bg-purple-500/15" />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(circle at center, rgba(168, 85, 247, 0.35), transparent 70%)'
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    boxShadow: '0 0 120px 60px rgba(168, 85, 247, 0.25)'
                }}
            />
        </OverlayContainer>
    )
}

function OverlayContainer({ children }: { children: React.ReactNode }) {
    return <div className="pointer-events-none fixed inset-0 z-10">{children}</div>
}
