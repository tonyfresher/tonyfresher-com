import Markdown from 'react-markdown';

import {cn} from 'lib/classname';
import {computeReadTime} from 'lib/content';
import {formatDate} from 'lib/format';

import Link from 'components/Link';
import Page from 'components/Page';

import i18n from './i18n/ru';
import {PostProps} from './types';

import styles from './Post.module.css';

const post = cn('Post', styles);

export default function Post({title, date, content}: PostProps) {
    const readTime = computeReadTime(content);

    return (
        <Page direction="horizontal">
            <article className={post()}>
                <div className={post('Info')}>
                    <time dateTime={date}>{formatDate(date)}</time>
                    {', '}
                    <span>
                        {i18n.readTime.replace('%s', readTime.toString())}
                    </span>
                </div>
                <h1 className={post('Title')}>{title}</h1>
                <Markdown className={post('Content')} renderers={{link: Link}}>
                    {content}
                </Markdown>
            </article>
        </Page>
    );
}
