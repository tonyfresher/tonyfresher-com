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
                title="Polka — Anton Fresher"
                openGraph={{
                    title: 'Polka',
                    site_name: 'Anton Fresher',
                    type: 'website',
                    locale: 'en_US'
                }}
            />
            <BookShelf items={items} />
        </>
    );
}

export const getStaticProps: GetStaticProps<BookShelfPageProps> = async () => {
    const bookIds = getBookIds();
    const books = await Promise.all(bookIds.map(id => getBook(id)));
    const items = sortBy(books, 'date').reverse();

    return {
        revalidate: 60 * 60,
        props: {items}
    };
};
