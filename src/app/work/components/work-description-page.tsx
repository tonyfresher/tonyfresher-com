import { PropsWithChildren } from 'react'

import Link from '@/components/link'
import TableOfContents from '@/components/table-of-contents'
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
        <>
            <article className="mdx-content contents">
                <h1
                    className={cn(
                        'group col-span-5 -mx-4 -my-8 w-fit px-4 py-8',
                        'font-display text-8xl leading-none max-lg:text-6xl max-md:text-5xl'
                    )}
                >
                    <Link
                        href="/"
                        className="mr-2 hidden group-hover:inline-block hover:bg-transparent"
                    >
                        ←
                    </Link>
                    <span className="inline-block">{product}</span>
                </h1>
                <div className="text-muted-foreground col-span-5 mt-11 mb-2 flex flex-col gap-0.5 max-md:mt-8">
                    <div>{period}</div>
                    <div>
                        <Link href={link} display="inline-block">
                            {productUrl.hostname}
                        </Link>
                    </div>
                </div>
                {content}
            </article>

            <TableOfContents />
        </>
    )
}
