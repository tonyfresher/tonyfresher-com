import type {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {NextSeo} from 'next-seo';

import type {Writing} from 'types';

import {getAllWritingIds} from 'lib/api';
import {getWriting} from 'lib/content';

import WritingComponent from 'components/Writing';

type WritingPageProps = Writing;

export default function WritingPage({
    title,
    description,
    image,
    date,
    content
}: WritingPageProps) {
    const router = useRouter();

    const slug = router.query.slug as string;

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    title,
                    description,
                    site_name: 'Антон Фрешер',
                    type: 'article',
                    locale: 'ru_RU',
                    images: [
                        {
                            url: `/${slug}/images/${image}`,
                            alt: title
                        }
                    ]
                }}
            />
            <WritingComponent
                id={slug}
                title={title}
                description={description}
                image={image}
                date={date}
                content={content}
            />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const writingIds = getAllWritingIds();

    return {
        paths: writingIds.map(slug => ({params: {slug}})),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<WritingPageProps> = async ({
    params: {slug}
}) => {
    const writing = await getWriting(slug as string);

    return {
        revalidate: 60 * 60,
        props: writing
    };
};
