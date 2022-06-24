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
                title="Writing — Anton Fresher"
                openGraph={{
                    title: 'Writing',
                    site_name: 'Anton Fresher',
                    type: 'website',
                    locale: 'en_US'
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
