import fs from 'fs';

import {BookMeta, ExperienceMeta, WritingMeta} from 'types';

async function getMeta(collection: 'writing', id: string): Promise<WritingMeta>;
async function getMeta(collection: 'books', id: string): Promise<BookMeta>;
async function getMeta(
    collection: 'experience',
    id: string
): Promise<ExperienceMeta>;
async function getMeta<T>(collection: string, id: string): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {meta} = await import(`src/pages/${collection}/${id}.mdx`);

    return meta as T;
}

export async function getWritingMeta(id: string): Promise<WritingMeta> {
    return getMeta('writing', id);
}

export async function getBookMeta(id: string): Promise<BookMeta> {
    return getMeta('books', id);
}

export async function getExperienceMeta(id: string): Promise<ExperienceMeta> {
    return getMeta('experience', id);
}

export function getAllIds(
    collection: 'writing' | 'books' | 'experience'
): string[] {
    return fs
        .readdirSync(`src/pages/${collection}`)
        .filter(filename => filename.match(/\.mdx?$/))
        .map(filename => filename.replace(/\.[^/.]+$/, ''));
}

export function getWritingIds(): string[] {
    return getAllIds('writing');
}

export function getBookIds(): string[] {
    return getAllIds('books');
}

export function getExperienceIds(): string[] {
    return getAllIds('experience');
}
