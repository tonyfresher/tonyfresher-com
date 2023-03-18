import type {GetStaticProps} from 'next';
import sortBy from 'lodash/sortBy';

import type {BookMeta} from 'types';

import {getBookIds, getBookMeta} from 'lib/api';

import BookShelfPage from 'components/BookShelfPage';

interface Props {
    items: BookMeta[];
}

export default function BookShelfPageComponent({items}: Props) {
    return <BookShelfPage items={items} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const bookIds = getBookIds();
    const books = await Promise.all(bookIds.map(id => getBookMeta(id)));
    const items = sortBy(books, 'date').reverse();

    return {
        revalidate: 60 * 60,
        props: {items}
    };
};
