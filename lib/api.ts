import fs from 'fs';

export function getAllIds(collection: 'writing' | 'books'): string[] {
    return fs
        .readdirSync(`content/${collection}`)
        .map(filename => filename.replace(/\.[^/.]+$/, ''));
}

export function getWritingIds(): string[] {
    return getAllIds('writing');
}

export function getBookIds(): string[] {
    return getAllIds('books');
}
