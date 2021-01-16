import matter from 'gray-matter';

import {Book, Post} from '../types';

async function getContent(collection: 'posts', slug: string): Promise<Post>;
async function getContent(collection: 'books', slug: string): Promise<Book>;
async function getContent<T extends Post>(
    collection: string,
    slug: string
): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const file = await import(`../../content/${collection}/${slug}/${slug}.md`);

    const {data, content} = matter(file);

    return {
        ...data,
        content
    } as T;
}

export async function getPost(slug: string): Promise<Post> {
    return getContent('posts', slug);
}
