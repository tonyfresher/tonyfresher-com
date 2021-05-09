import type {GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';

import {Writing} from 'types';

import {getAllWritingIds} from 'lib/api';
import {getWriting} from 'lib/content';

import WritingList from 'components/WritingList';

interface WritingListPageProps {
    items: Writing[];
}

export default function WritingListPage({items}: WritingListPageProps) {
    return (
        <>
            <NextSeo
                title="Книжная полка — Антон Фрешер"
                openGraph={{
                    title: 'Книжная полка',
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
    const slugs = getAllWritingIds();
    const items = await Promise.all(slugs.map(slug => getWriting(slug)));

    return {
        revalidate: 60 * 60,
        props: {items}
    };
};
