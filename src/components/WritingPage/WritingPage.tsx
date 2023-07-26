import {PropsWithChildren} from 'react';
import {NextSeo} from 'next-seo';

import type {WritingMeta} from 'types';
import {isBookMeta} from 'types';

import {cn} from 'lib/classname';
import {computeReadTime} from 'lib/content';
import {formatDate} from 'lib/format';

import Page from 'components/Page';
import PageMenu from 'components/PageMenu';

import styles from './WritingPage.module.css';

const writingPageCn = cn('WritingPage', styles);

const strings = {
    readTime: '%s min'
};

export interface WritingPageProps<T extends WritingMeta>
    extends PropsWithChildren {
    meta: T;
}

export default function WritingPage<T extends WritingMeta>({
    meta,
    children: content
}: WritingPageProps<T>) {
    const readTime = computeReadTime('');

    return (
        <>
            <NextSeo
                title={meta.title}
                description={meta.description}
                openGraph={{
                    title: meta.title,
                    description: meta.description,
                    site_name: 'Anton Fresher',
                    type: 'article',
                    locale: 'en_US',
                    ...(meta.image && {
                        images: [
                            {
                                url: `/${meta.id}/images/${meta.image}`,
                                alt: meta.title
                            }
                        ]
                    })
                }}
            />
            <Page>
                <PageMenu />
                <article className={writingPageCn()}>
                    <div className={writingPageCn('Info')}>
                        <time dateTime={meta.date}>
                            {formatDate(meta.date)}
                        </time>
                        {', '}
                        <span>
                            {strings.readTime.replace(
                                '%s',
                                readTime.toString()
                            )}
                        </span>
                    </div>
                    <h1 className={writingPageCn('Title')}>{meta.title}</h1>
                    {isBookMeta(meta) && (
                        <div className={writingPageCn('BookPreview')}>
                            {meta.image && (
                                <img
                                    className={writingPageCn('BookCover')}
                                    src={`/book-covers/${meta.image}`}
                                    alt="Cover"
                                />
                            )}
                            <div className={writingPageCn('BookMeta')}>
                                <span className={writingPageCn('BookName')}>
                                    {meta.name}
                                </span>
                                <span>{meta.author}</span>
                                {meta.year && <span>{meta.year}</span>}
                            </div>
                        </div>
                    )}
                    <div className={writingPageCn('Content')}>{content}</div>
                </article>
            </Page>
        </>
    );
}
