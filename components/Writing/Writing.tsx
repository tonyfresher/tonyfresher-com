import Markdown from 'react-markdown';

import {cn} from 'lib/classname';
import {computeReadTime} from 'lib/content';
import {formatDate} from 'lib/format';

import Link from 'components/Link';
import Page from 'components/Page';

import i18n from './i18n/ru';
import {WritingProps} from './types';

import styles from './Writing.module.css';

const writing = cn('Writing', styles);

export default function Writing({title, date, content}: WritingProps) {
    const readTime = computeReadTime(content);

    return (
        <Page direction="horizontal">
            <article className={writing()}>
                <div className={writing('Info')}>
                    <time dateTime={date}>{formatDate(date)}</time>
                    {', '}
                    <span>
                        {i18n.readTime.replace('%s', readTime.toString())}
                    </span>
                </div>
                <h1 className={writing('Title')}>{title}</h1>
                <Markdown
                    className={writing('Content')}
                    renderers={{link: Link}}
                >
                    {content}
                </Markdown>
            </article>
        </Page>
    );
}
