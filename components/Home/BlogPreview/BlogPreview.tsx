import {cn} from 'lib/classname';

import Link from 'components/Link';

import {formatDate} from 'lib/format';

import i18n from './i18n/ru';

import {ArticlePreviewProps} from './types';

import styles from '../Home.module.css';

const blogPreview = cn('BlogPreview', styles);

function getPostLink(id: string): string {
    return `/posts/${id}`;
}

function ArticlePreview({id, header, content, createdAt}: ArticlePreviewProps) {
    return (
        <div className={blogPreview('Article')}>
            <h3 className={blogPreview('ArticleHeader')}>
                <Link color="black" href={getPostLink(id)}>
                    {header}
                </Link>
            </h3>
            {content && (
                <p className={blogPreview('ArticleContent')}>
                    {content}
                    {createdAt && (
                        <span className={blogPreview('ArticleDate')}>
                            {formatDate(createdAt, true)}
                        </span>
                    )}
                </p>
            )}
        </div>
    );
}

export default function BlogPreview() {
    return (
        <div className={blogPreview()}>
            <h2 className={blogPreview('Header')}>{i18n.header}</h2>
            {i18n.articles.map(article => (
                <ArticlePreview
                    content={article.content}
                    createdAt={article.createdAt}
                    header={article.header}
                    id={article.id}
                    key={article.id}
                />
            ))}
        </div>
    );
}
