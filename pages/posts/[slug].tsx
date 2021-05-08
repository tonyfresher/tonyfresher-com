import type {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import {NextSeo} from 'next-seo';

import type {Post} from 'types';

import {getAllPostIds} from 'lib/api';
import {getPost} from 'lib/content';

import PostComponent from 'components/Post';

type PostPageProps = Post;

export default function PostPage({
    title,
    description,
    image,
    date,
    content
}: PostPageProps) {
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
            <PostComponent
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
    const postIds = getAllPostIds();

    return {
        paths: postIds.map(slug => ({params: {slug}})),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({params: {slug}}) => {
    const post = await getPost(slug as string);

    return {
        revalidate: 60 * 60,
        props: post
    };
};
