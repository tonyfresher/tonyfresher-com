import { PropsWithChildren } from 'react'

import Page from 'components/Page'
import PageMenu from 'components/PageMenu'
import { computeReadTime } from 'lib/content'
import { formatDate } from 'lib/format'
import type { WritingMeta } from 'types'
import { isBookMeta } from 'types'

const strings = {
    readTime: '%s min'
}

export interface WritingPageProps<T extends WritingMeta> extends PropsWithChildren {
    meta: T
}

const contentClassName = [
    'mt-16',
    '[&>*]:mt-6',
    '[&>:first-child]:mt-0',
    '[&>hr]:mx-auto [&>hr]:my-8 [&>hr]:h-0.5 [&>hr]:w-full [&>hr]:border-0',
    '[&>hr]:bg-[color:var(--color-content-secondary)] [&>hr]:opacity-20',
    '[&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-[length:var(--h2-font-size)] [&>h2]:leading-[var(--header-line-height)]',
    '[&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:text-[length:var(--text-font-size)] [&>h3]:leading-[var(--header-line-height)]',
    '[&>a>img]:block',
    '[&>img]:w-full',
    '[&>ul]:pl-5',
    '[&>p+ul]:mt-[-0.5em]'
].join(' ')

export default function WritingPage<T extends WritingMeta>({
    meta,
    children: content
}: WritingPageProps<T>) {
    const readTime = computeReadTime('')

    return (
        <Page>
            <PageMenu />
            <article className="col-[2/-2] flex flex-col">
                <div className="text-[color:var(--color-content-secondary)] max-[960px]:absolute max-[960px]:top-0 max-[960px]:right-0 max-[960px]:text-right max-[960px]:whitespace-nowrap">
                    <time dateTime={meta.date}>{formatDate(meta.date)}</time>
                    {', '}
                    <span>{strings.readTime.replace('%s', readTime.toString())}</span>
                </div>
                <h1 className="mt-16 text-[length:var(--h1-font-size)] leading-[var(--header-line-height)] max-[960px]:mt-0">
                    {meta.title}
                </h1>
                {isBookMeta(meta) && (
                    <div className="mt-10 flex items-center text-[color:var(--color-content-secondary)]">
                        {meta.image && (
                            <img className="mr-3 h-20" src={`/book-covers/${meta.image}`} alt="Cover" />
                        )}
                        <div className="grid gap-1">
                            <span className="text-[color:var(--color-content-primary)]">{meta.name}</span>
                            <span>{meta.author}</span>
                            {meta.year && <span>{meta.year}</span>}
                        </div>
                    </div>
                )}
                <div className={contentClassName}>{content}</div>
            </article>
        </Page>
    )
}
