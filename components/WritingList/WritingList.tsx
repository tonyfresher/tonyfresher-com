import {cn} from 'lib/classname';

import Link from 'components/Link';
import Page from 'components/Page';

import {formatDate} from 'lib/format';

import i18n from './i18n/ru';

import {WritingPreviewProps, WritingListProps} from './types';

import styles from './WritingList.module.css';

const writingList = cn('WritingList', styles);

function getWritingLink(id: string): string {
    return `/writing/${id}`;
}

function WritingPreview({
    id,
    title,
    description,
    date,
    image
}: WritingPreviewProps) {
    return (
        <div className={writingList('WritingPreview')}>
            <div className={writingList('WritingMeta')}>
                <h3 className={writingList('WritingTitle')}>
                    <Link color="inherit" href={getWritingLink(id)}>
                        {title}
                    </Link>
                </h3>
                <p className={writingList('WritingDescription')}>
                    {description}
                    <span className={writingList('WritingDate')}>
                        {formatDate(date, true)}
                    </span>
                </p>
            </div>
            <img
                className={writingList('WritingImage')}
                src={`/${id}/images/${image}`}
                alt={image}
            />
        </div>
    );
}

export default function WritingList({items}: WritingListProps) {
    return (
        <Page direction="vertical" menu={i18n.menu}>
            <div className={writingList()}>
                {items.map(writing => (
                    <WritingPreview
                        date={writing.date}
                        description={writing.description}
                        id={writing.id}
                        image={writing.image}
                        key={writing.title}
                        title={writing.title}
                    />
                ))}
            </div>
        </Page>
    );
}
