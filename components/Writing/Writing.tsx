import Markdown from 'react-markdown';

import type {Writing} from 'types';
import {isBook} from 'types';

import {cn} from 'lib/classname';
import {computeReadTime} from 'lib/content';
import {formatDate} from 'lib/format';

import Link from 'components/Link';
import Page from 'components/Page';

import i18n from './i18n/en';
import {WritingProps} from './types';

import styles from './Writing.module.css';

const writingCn = cn('Writing', styles);

export default function WritingComponent<T extends Writing>({
    writing
}: WritingProps<T>) {
    if (!writing.content) {
        return null;
    }

    const readTime = computeReadTime(writing.content);

    return (
        <Page direction="horizontal">
            <article className={writingCn()}>
                <div className={writingCn('Info')}>
                    <time dateTime={writing.date}>
                        {formatDate(writing.date)}
                    </time>
                    {', '}
                    <span>
                        {i18n.readTime.replace('%s', readTime.toString())}
                    </span>
                </div>
                <h1 className={writingCn('Title')}>{writing.title}</h1>
                {isBook(writing) && (
                    <div className={writingCn('BookPreview')}>
                        {writing.image && (
                            <img
                                className={writingCn('BookCover')}
                                src={`/book-covers/${writing.image}`}
                                alt="Обложка"
                            />
                        )}
                        <div className={writingCn('BookMeta')}>
                            <span className={writingCn('BookName')}>
                                {writing.nameEn ?? writing.nameRu}
                            </span>
                            <span>{writing.author}</span>
                            {writing.year && <span>{writing.year}</span>}
                        </div>
                    </div>
                )}
                <Markdown
                    className={writingCn('Content')}
                    components={{
                        a: ({children, className, href}) => (
                            <Link className={className} href={href}>
                                {children}
                            </Link>
                        )
                    }}
                >
                    {writing.content}
                </Markdown>
            </article>
        </Page>
    );
}
