'use client'

interface FocusOverlayProps {
    isEnabled: boolean
}

export default function FocusOverlay({ isEnabled }: FocusOverlayProps) {
    if (!isEnabled) {
        return null
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-[999]">
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
        </div>
    )
}
