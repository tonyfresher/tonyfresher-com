import type {GetStaticPaths, GetStaticProps} from 'next';
import {NextSeo} from 'next-seo';

import type {Writing} from 'types';

import {getWritingIds} from 'lib/api';
import {getWriting} from 'lib/content';

import WritingComponent from 'components/Writing';

interface WritingPageProps {
    writing: Writing;
}

export default function WritingPage({writing}: WritingPageProps) {
    return (
        <>
            <NextSeo
                title={writing.title}
                description={writing.description}
                openGraph={{
                    title: writing.title,
                    description: writing.description,
                    site_name: 'Антон Фрешер',
                    type: 'article',
                    locale: 'ru_RU',
                    images: [
                        {
                            url: `/${writing.id}/images/${writing.image}`,
                            alt: writing.title
                        }
                    ]
                }}
            />
            <WritingComponent writing={writing} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const writingIds = getWritingIds();

    return {
        paths: writingIds.map(id => ({params: {id}})),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<WritingPageProps> = async ({
    params: {id}
}) => {
    const writing = await getWriting(id as string);

    return {
        revalidate: 60 * 60,
        props: {writing}
    };
};
