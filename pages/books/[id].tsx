import type {GetStaticPaths, GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';

import type {Book} from 'types';

import {getBookIds} from 'lib/api';
import {getBook} from 'lib/content';

import WritingComponent from 'components/Writing';

interface BookPageProps {
    book: Book;
}

export default function BookPage({book}: BookPageProps) {
    return (
        <>
            <NextSeo
                title={book.title}
                description={book.description}
                openGraph={{
                    title: book.title,
                    description: book.description,
                    site_name: 'Антон Фрешер',
                    type: 'article',
                    locale: 'ru_RU',
                    images: [
                        {
                            url: `/book-covers/${book.image}`,
                            alt: book.title
                        }
                    ]
                }}
            />
            <WritingComponent writing={book} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const bookIds = getBookIds();

    return {
        paths: bookIds.map(id => ({params: {id}})),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<BookPageProps> = async ({
    params: {id}
}) => {
    const book = await getBook(id as string);

    return {
        revalidate: 60 * 60,
        props: {book}
    };
};
