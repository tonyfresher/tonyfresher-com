import sortBy from 'lodash/sortBy';
import type {GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';

import type {Book} from 'types';

import {getBookIds} from 'lib/api';
import {getBook} from 'lib/content';

import BookShelf from 'components/BookShelf';

interface BookShelfPageProps {
    items: Book[];
}

export default function BookShelfPage({items}: BookShelfPageProps) {
    return (
        <>
            <NextSeo
                title="Книжная полка — Антон Фрешер"
                openGraph={{
                    title: 'Книжная полка',
                    site_name: 'Антон Фрешер',
                    type: 'website',
                    locale: 'ru_RU'
                }}
            />
            <BookShelf items={items} />
        </>
    );
}

export const getStaticProps: GetStaticProps<BookShelfPageProps> = async () => {
    const bookIds = getBookIds();
    const items = await Promise.all(bookIds.map(id => getBook(id)));

    return {
        revalidate: 60 * 60,
        props: {items: sortBy(items, 'date')}
    };
};
