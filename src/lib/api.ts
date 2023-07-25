import fs from 'fs';

import {BookMeta, WorkDescriptionMeta, WritingMeta} from 'types';

async function getMeta(collection: 'writing', id: string): Promise<WritingMeta>;
async function getMeta(collection: 'books', id: string): Promise<BookMeta>;
async function getMeta(
    collection: 'work',
    id: string
): Promise<WorkDescriptionMeta>;
async function getMeta<T>(collection: string, id: string): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {meta} = await import(`src/pages/${collection}/${id}.mdx`);

    return meta as T;
}

export async function getBookMeta(id: string): Promise<BookMeta> {
    return getMeta('books', id);
}

export function getAllIds(collection: 'writing' | 'books' | 'work'): string[] {
    return fs
        .readdirSync(`src/pages/${collection}`)
        .filter(filename => filename.match(/\.mdx?$/))
        .map(filename => filename.replace(/\.[^/.]+$/, ''));
}

export function getBookIds(): string[] {
    return getAllIds('books');
}
