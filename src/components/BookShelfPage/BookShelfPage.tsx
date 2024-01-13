import {NextSeo} from 'next-seo';
import groupBy from 'lodash/groupBy';

import type {BookMeta} from 'types';

import {cn} from 'lib/classname';

import Page from 'components/Page';

import styles from './BookShelfPage.module.css';

const bookShelfPageCn = cn('BookShelfPage', styles);

export interface BookShelfPageProps {
    items: BookMeta[];
}

export default function BookShelfPage({items}: BookShelfPageProps) {
    const groupedItems = groupBy(items, item =>
        new Date(item.date).getFullYear()
    );

    return (
        <>
            <NextSeo
                title="Books — Tony Fresher"
                openGraph={{
                    title: 'Books',
                    site_name: 'Tony Fresher',
                    type: 'website',
                    locale: 'en_US'
                }}
            />
            <Page theme="dark">
                <div className={bookShelfPageCn()}>
                    {Object.entries(groupedItems).map(([year, books]) => (
                        <section
                            className={bookShelfPageCn('Section')}
                            key={year}
                        >
                            <h2
                                className={bookShelfPageCn('SectionName')}
                                id={year}
                            >
                                {year}
                            </h2>
                            <div className={bookShelfPageCn('SectionBooks')}>
                                {books.map(book => (
                                    <a
                                        className={bookShelfPageCn(
                                            'BookSpine',
                                            {
                                                disabled: 'yes'
                                            }
                                        )}
                                        key={book.id}
                                    >
                                        <h3
                                            className={bookShelfPageCn(
                                                'BookHeader'
                                            )}
                                        >
                                            <span
                                                className={bookShelfPageCn(
                                                    'BookName'
                                                )}
                                            >
                                                {book.name}
                                            </span>
                                        </h3>
                                        <span
                                            className={bookShelfPageCn(
                                                'BookAuthor'
                                            )}
                                        >
                                            {book.author}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </Page>
        </>
    );
}
