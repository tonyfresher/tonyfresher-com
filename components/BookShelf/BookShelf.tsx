import groupBy from 'lodash/groupBy';

import {cn} from 'lib/classname';

import Page from 'components/Page';

import i18n from './i18n/en';

import type {BookShelfProps} from './types';

import styles from './BookShelf.module.css';

const bookShelf = cn('BookShelf', styles);

function getBookLink(id: string): string {
    return `/books/${id}`;
}

export default function BookShelf({items}: BookShelfProps) {
    const groupedItems = groupBy(items, item =>
        new Date(item.date).getFullYear()
    );

    return (
        <Page direction="vertical" menu={i18n.menu} theme="dark">
            <div className={bookShelf()}>
                {Object.entries(groupedItems).map(([year, books]) => (
                    <section className={bookShelf('Section')} key={year}>
                        <h2 className={bookShelf('SectionName')} id={year}>
                            {year}
                        </h2>
                        <div className={bookShelf('SectionBooks')}>
                            {books.map(book => (
                                <a
                                    className={bookShelf('BookSpine', {
                                        disabled: book.content ? 'no' : 'yes'
                                    })}
                                    href={
                                        book.content
                                            ? getBookLink(book.id)
                                            : undefined
                                    }
                                    key={book.id}
                                    style={
                                        book.content
                                            ? {
                                                  background:
                                                      book.backgroundColor,
                                                  color: book.foregroundColor
                                              }
                                            : undefined
                                    }
                                >
                                    <h3 className={bookShelf('BookHeader')}>
                                        {book.nameEn && (
                                            <span
                                                className={bookShelf(
                                                    'BookName',
                                                    {lang: 'en'}
                                                )}
                                            >
                                                {book.nameEn}
                                            </span>
                                        )}
                                        <span
                                            className={bookShelf('BookName', {
                                                lang: 'ru'
                                            })}
                                        >
                                            {book.nameRu}
                                        </span>
                                    </h3>
                                    <span className={bookShelf('BookAuthor')}>
                                        {book.author}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </Page>
    );
}
