import matter from 'gray-matter';

import {Book, Writing} from 'types';

async function getContent(collection: 'writing', id: string): Promise<Writing>;
async function getContent(collection: 'books', id: string): Promise<Book>;
async function getContent<T extends Writing>(
    collection: string,
    id: string
): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {default: file} = await import(`content/${collection}/${id}.md`);

    const {data, content} = matter(file);

    return {
        ...data,
        id,
        content
    } as T;
}

export async function getWriting(id: string): Promise<Writing> {
    return getContent('writing', id);
}

export async function getBook(id: string): Promise<Book> {
    return getContent('books', id);
}

const WORD_REGEXP = /[a-zа-яё]+/gi;
const WORDS_PER_MINUTE = 200;

export function computeReadTime(content: string) {
    const wordCount = content.match(WORD_REGEXP).length;

    return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
