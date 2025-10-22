import { PropsWithChildren } from 'react'

import Link from '@/components/link'
import { cn } from '@/lib/cn'
import type { WorkDescriptionMeta } from '@/types'

interface WorkDescriptionPageProps extends PropsWithChildren {
    meta: WorkDescriptionMeta
}

export default function WorkDescriptionPage({
    meta: { product, link, period },
    children: content
}: WorkDescriptionPageProps) {
    const productUrl = new URL(link)

    return (
        <article
            className={cn(
                'mdx-content',
                'contents',
                'text-xl',
                '[&>*:not(.wide-block)]:col-span-4'
            )}
        >
            <h1 className="group font-display font-regular col-span-5 -my-5 w-fit py-5 text-[52px] leading-none">
                <Link
                    href="/"
                    className="mr-2 hidden group-hover:inline-block hover:bg-transparent"
                >
                    ←
                </Link>
                <span className="inline-block">{product}</span>
            </h1>
            <div className="text-muted-foreground col-span-5 mt-12 mb-8 flex flex-col gap-1">
                <div>{period}</div>
                <div>
                    <Link href={link} display="inline-block">
                        {productUrl.hostname}
                    </Link>
                </div>
            </div>
            {content}
        </article>
    )
}
