import { cn } from '@/lib/cn'

import CV from './cv-message'
import TextMessage from './text-message'

const strings = {
    photoAlt: 'Anton Fresher',
    messages: [
        <TextMessage key="1" text="Hey! I'm Anton, a product designer and engineer" />,
        <TextMessage
            key="2"
            text="Over the past 8 years in tech, I’ve learned I fit right in with fast-paced early-stage teams, helping navigate uncertainty and build products people love"
        />,
        <TextMessage
            key="3"
            text="In many parts of my life, I’m a generalist. I love moving across roles and functions to ship high-quality products, find creative solutions, and—most importantly—have fun along the way"
        />,
        <CV key="4" />
    ]
}

export default function About() {
    return (
        <div className={cn('flex items-start gap-3', 'max-sm:flex-col-reverse max-sm:items-start')}>
            <img
                alt={strings.photoAlt}
                className={cn(
                    'box-content size-8 rounded-full',
                    'max-sm:border-secondary max-sm:-mt-8 max-sm:-ml-4 max-sm:border-4'
                )}
                src="/me.jpeg"
            />
            <div className="flex flex-1 flex-col items-start gap-1">
                {strings.messages.map((message, index) => (
                    <div
                        key={index}
                        className={cn(
                            'bg-accent/60 w-fit overflow-hidden',
                            'rounded-xs rounded-r-xl first:rounded-tl-xl last:rounded-bl-xl'
                        )}
                    >
                        {message}
                    </div>
                ))}
            </div>
        </div>
    )
}
