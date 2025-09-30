import { PropsWithChildren } from 'react'

import Link from '@/components/link'
import { cn } from '@/lib/cn'
import type { WorkDescriptionMeta } from '@/types'

interface WorkDescriptionPageProps extends PropsWithChildren {
    meta: WorkDescriptionMeta
}

const articleClassName = cn(
    'mdx-content',
    'contents',
    'text-xl',
    '[&>*:not(.wide-block)]:col-span-4'
)

export default function WorkDescriptionPage({
    meta: { product, link, period },
    children: content
}: WorkDescriptionPageProps) {
    const productUrl = new URL(link)

    return (
        <article className={articleClassName}>
            <h1 className="font-display col-span-5 m-0 text-5xl font-semibold">{product}</h1>
            <div className="text-muted-foreground col-span-5 mt-10 mb-14 flex flex-col gap-2">
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
