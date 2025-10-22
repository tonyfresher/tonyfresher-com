'use client'

import { type CSSProperties, type ReactNode, useMemo } from 'react'

import type { Vibe } from '@/types/vibe'

interface VibeOverlayProps {
    vibe: Vibe | null
}

interface RainDropConfig {
    id: number
    left: number
    delay: number
    duration: number
    length: number
    opacity: number
    scaleX: number
}

const DROP_COUNT = 180

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
    const drops = useMemo(() => createRainDrops(DROP_COUNT), [])

    return (
        <OverlayContainer>
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-200/20 via-transparent to-transparent mix-blend-screen" />
                {drops.map(drop => {
                    const style: CSSProperties & { '--x-scale': string } = {
                        left: `${drop.left}%`,
                        animationDelay: `${drop.delay}s`,
                        animationDuration: `${drop.duration}s`,
                        height: `${drop.length}px`,
                        opacity: drop.opacity,
                        '--x-scale': drop.scaleX.toString()
                    }

                    return <span key={drop.id} className="vibe-rain-drop" style={style} />
                })}
            </div>
            <style jsx global>{`
                .vibe-rain-drop {
                    pointer-events: none;
                    position: absolute;
                    top: -160px;
                    width: 3px;
                    background: linear-gradient(
                        180deg,
                        rgba(148, 163, 184, 0) 0%,
                        rgba(148, 163, 184, 0.45) 40%,
                        rgba(226, 232, 240, 0.95) 100%
                    );
                    box-shadow: 0 20px 12px -12px rgba(148, 163, 184, 0.45);
                    border-radius: 999px;
                    filter: drop-shadow(0 0 4px rgba(148, 163, 184, 0.4));
                    animation-name: vibe-rain-fall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    animation-fill-mode: forwards;
                    transform: translate3d(0, 0, 0) scaleX(var(--x-scale, 1));
                    will-change: transform, opacity;
                }

                @keyframes vibe-rain-fall {
                    0% {
                        transform: translate3d(-5vw, -120vh, 0) scaleX(var(--x-scale, 1));
                    }
                    100% {
                        transform: translate3d(5vw, 120vh, 0) scaleX(var(--x-scale, 1));
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .vibe-rain-drop {
                        animation-duration: 2s;
                    }
                }
            `}</style>
        </OverlayContainer>
    )
}

function createRainDrops(count: number): RainDropConfig[] {
    return Array.from({ length: count }, (_, index) => {
        const random = mulberry32(index + 1)

        return {
            id: index,
            left: random() * 100,
            delay: -random() * 4,
            duration: 0.8 + random() * 0.7,
            length: 80 + random() * 60,
            opacity: 0.25 + random() * 0.4,
            scaleX: 0.7 + random() * 0.5
        }
    })
}

function mulberry32(seed: number) {
    let t = seed + 0x6d2b79f5
    return function () {
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
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

function OverlayContainer({ children }: { children: ReactNode }) {
    return <div className="pointer-events-none fixed inset-0 z-[999]">{children}</div>
}
