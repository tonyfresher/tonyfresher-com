import { cn } from '@/lib/cn'

export default function TypingMessage() {
    return (
        <div className="flex items-center gap-1 px-4 py-4.5">
            <div
                className={cn(
                    'bg-muted-foreground size-2 rounded-full',
                    'animate-[pulse_1s_ease-in-out_0s_infinite]'
                )}
            />
            <div
                className={cn(
                    'bg-muted-foreground size-2 rounded-full',
                    'animate-[pulse_1s_ease-in-out_200ms_infinite]'
                )}
            />
            <div
                className={cn(
                    'bg-muted-foreground size-2 rounded-full',
                    'animate-[pulse_1s_ease-in-out_400ms_infinite]'
                )}
            />
        </div>
    )
}
