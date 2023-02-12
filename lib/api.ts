import fs from 'fs';

export function getAllIds(
    collection: 'writings' | 'books' | 'experiences'
): string[] {
    return fs
        .readdirSync(`content/${collection}`)
        .map(filename => filename.replace(/\.[^/.]+$/, ''));
}

export function getWritingIds(): string[] {
    return getAllIds('writings');
}

export function getBookIds(): string[] {
    return getAllIds('books');
}

export function getExperienceIds(): string[] {
    return getAllIds('experiences');
}
