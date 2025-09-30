import { PropsWithChildren } from 'react'

import Link from '@/components/link'
import type { WorkDescriptionMeta } from '@/types'

interface WorkDescriptionPageProps extends PropsWithChildren {
    meta: WorkDescriptionMeta
}

const articleClassName = [
    'contents',
    'text-2xl',
    '[&>*:not(.wide-block)]:col-span-4',
    '[&>*+p:not(:first-child)]:mt-6',
    '[&>p:first-of-type]:mt-0',
    '[&>hr]:mx-auto [&>hr]:my-16 [&>hr]:h-0.5 [&>hr]:w-full [&>hr]:border-0',
    '[&>hr]:bg-gradient-to-r [&>hr]:from-[color:var(--color-content-secondary)] [&>hr]:via-[color:var(--color-content-secondary)] [&>hr]:to-transparent',
    '[&>hr]:bg-[length:40px_2px] [&>hr]:opacity-20',
    '[&>h2]:mt-20 [&>h2]:text-[length:var(--h2-font-size)] [&>h2]:leading-[var(--header-line-height)]',
    '[&>h3]:mt-12 [&>h3]:text-[length:var(--text-font-size)] [&>h3]:leading-[var(--header-line-height)]',
    '[&>p>img]:w-full',
    '[&>p>img]:rounded-lg [&>p>img]:border [&>p>img]:border-[color:var(--color-background-glassy)]',
    '[&>p>video]:rounded-lg [&>p>video]:border [&>p>video]:border-[color:var(--color-background-glassy)]',
    '[&>p>a>img]:block',
    '[&>ul]:pl-8 [&>ol]:pl-8',
    '[&>ul>li+li]:mt-2 [&>ol>li+li]:mt-2'
].join(' ')

export default function WorkDescriptionPage({
    meta: { product, link, period },
    children: content
}: WorkDescriptionPageProps) {
    const productUrl = new URL(link)

    return (
        <article className={articleClassName}>
            <h1 className="col-span-5 m-0 text-4xl font-semibold">{product}</h1>
            <div className="text-muted-foreground col-span-5 mt-8 mb-14 flex flex-col gap-2">
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
