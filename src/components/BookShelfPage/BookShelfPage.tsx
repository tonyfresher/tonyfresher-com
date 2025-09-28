import Page from 'components/Page'
import groupBy from 'lodash/groupBy'
import type { BookMeta } from 'types'

export interface BookShelfPageProps {
    items: BookMeta[]
}

export default function BookShelfPage({ items }: BookShelfPageProps) {
    const groupedItems = groupBy(items, item => new Date(item.date).getFullYear())

    return (
        <Page theme="dark">
            <div className="col-[2/-2] flex flex-col">
                {Object.entries(groupedItems).map(([year, books]) => (
                    <section className="mt-10 first:mt-0 max-[540px]:mt-8" key={year}>
                        <h2
                            className="mt-0 mb-4 text-[length:var(--h2-font-size)] leading-[var(--header-line-height)] text-[color:var(--color-content-secondary)]"
                            id={year}
                        >
                            {year}
                        </h2>
                        <div className="flex w-full flex-wrap max-[540px]:flex-col">
                            {books.map(book => (
                                <a
                                    className="mt-2 mr-2 flex min-w-[52px] flex-col items-center rounded-lg bg-white/10 px-4 py-8 text-left text-inherit no-underline transition-transform duration-100 ease-out [writing-mode:vertical-rl] hover:-translate-y-2 hover:scale-105 max-[540px]:m-0 max-[540px]:mx-[calc(var(--page-padding-x)*-1)] max-[540px]:mt-1 max-[540px]:flex-row max-[540px]:items-start max-[540px]:gap-2 max-[540px]:px-5 max-[540px]:py-5 max-[540px]:text-left max-[540px]:[writing-mode:unset] max-[540px]:[&+a]:mt-1"
                                    key={book.id}
                                >
                                    <h3 className="m-0 flex-[2] text-inherit">
                                        <span className="block text-inherit">{book.name}</span>
                                    </h3>
                                    <span className="mt-2 max-w-[240px] flex-[1] text-right text-[18px] max-[540px]:mt-1 max-[540px]:max-w-full max-[540px]:text-left max-[540px]:opacity-50">
                                        {book.author}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </Page>
    )
}
