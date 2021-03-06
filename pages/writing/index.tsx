import sortBy from 'lodash/sortBy';
import type {GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';

import {Writing} from 'types';

import {getWritingIds} from 'lib/api';
import {getWriting} from 'lib/content';

import WritingList from 'components/WritingList';

interface WritingListPageProps {
    items: Writing[];
}

export default function WritingListPage({items}: WritingListPageProps) {
    return (
        <>
            <NextSeo
                title="Пишу — Антон Фрешер"
                openGraph={{
                    title: 'Пишу',
                    site_name: 'Антон Фрешер',
                    type: 'website',
                    locale: 'ru_RU'
                }}
            />
            <WritingList items={items} />
        </>
    );
}

export const getStaticProps: GetStaticProps<WritingListPageProps> = async () => {
    const writingIds = getWritingIds();
    const writing = await Promise.all(writingIds.map(id => getWriting(id)));
    const items = sortBy(writing, 'date').reverse();

    return {
        revalidate: 60 * 60,
        props: {items}
    };
};
