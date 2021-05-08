import type {GetStaticPaths, GetStaticProps} from 'next';

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
    return (
        <>
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
