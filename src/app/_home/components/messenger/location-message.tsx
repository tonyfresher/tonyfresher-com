'use client'

import Image from 'next/image'

import { motion } from 'motion/react'

import { cn } from '@/lib/cn'

function MapPreview() {
    return (
        <div className="relative h-20 w-80 overflow-hidden max-sm:w-48">
            <Image className="object-cover" src="/about/map.png" alt="Map" fill preload />
            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-radial-[ellipse_at_center] from-transparent from-30% to-black/10" />
            {/* Blue dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-5 w-5 items-center justify-center">
                    {/* Ripple */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-blue-400/50"
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            delay: 3,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: 'easeOut'
                        }}
                    />
                    {/* White outer ring */}
                    <div
                        className={cn(
                            'absolute h-full w-full rounded-full',
                            'bg-white',
                            'shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_8px_-2px_rgba(0,0,0,0.2)]'
                        )}
                    />
                    {/* Light blue base */}
                    <div
                        className={cn(
                            'absolute h-3 w-3 rounded-full bg-blue-400',
                            'shadow-[0_1px_4px_0_rgba(0,0,0,0.2)]'
                        )}
                    />
                    {/* Top gradient */}
                    <div className="absolute h-3 w-3 rounded-full bg-gradient-to-b from-white/30 to-transparent to-50%" />
                    {/* Bottom gradient */}
                    <div className="absolute h-3 w-3 rounded-full bg-gradient-to-t from-blue-600 to-transparent to-50%" />
                    {/* Inner reflection */}
                    <div className="absolute h-2.5 w-2.5 rounded-full bg-gradient-to-b from-blue-700 to-blue-400 [mask-image:radial-gradient(circle,black_50%,transparent_70%)]" />
                </div>
            </div>
        </div>
    )
}

interface LocationMessageProps {
    text: string
}

export default function LocationMessage({ text }: LocationMessageProps) {
    return (
        <div>
            <MapPreview />

            <div className="px-4 py-2">
                <div className="">{text}</div>
            </div>
        </div>
    )
}
