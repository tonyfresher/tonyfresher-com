import type { Metadata } from 'next'

import sortBy from 'lodash/sortBy'

import BookShelfPage from '@/components/BookShelfPage'
import { getBookIds, getBookMeta } from '@/lib/api'

export const revalidate = 60 * 60

export const metadata: Metadata = {
    title: 'Books',
    openGraph: {
        title: 'Books',
        siteName: 'Tony Fresher',
        type: 'website'
    }
}

export default async function Page() {
    const bookIds = getBookIds()
    const books = await Promise.all(bookIds.map(id => getBookMeta(id)))
    const items = sortBy(books, 'date').reverse()

    return <BookShelfPage items={items} />
}
