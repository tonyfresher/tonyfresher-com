import matter from 'gray-matter';

import {Book, Post} from 'types';

async function getContent(collection: 'posts', slug: string): Promise<Post>;
async function getContent(collection: 'books', slug: string): Promise<Book>;
async function getContent<T extends Post>(
    collection: string,
    slug: string
): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {default: file} = await import(
        `content/${collection}/${slug}/${slug}.md`
    );

    const {data, content} = matter(file);

    return {
        ...data,
        content
    } as T;
}

export async function getPost(slug: string): Promise<Post> {
    return getContent('posts', slug);
}

const WORD_REGEXP = /[a-zа-яё]+/gi;
const WORDS_PER_MINUTE = 200;

export function computeReadTime(content: string) {
    const wordCount = content.match(WORD_REGEXP).length;

    return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
