import Link from '@/components/link'
import { cn } from '@/lib/cn'

const strings = {
    header: '404?',
    text: '← Go back'
}

export default function NotFoundPage() {
    return (
        <div
            className={cn(
                'col-span-2 flex min-h-full flex-1 flex-col justify-between gap-4',
                'font-display text-8xl leading-none max-lg:text-6xl max-md:text-5xl'
            )}
        >
            <h1>{strings.header}</h1>
            <Link href="/" className="w-min hover:bg-transparent">
                {strings.text}
            </Link>
        </div>
    )
}
