import fs from 'fs'

import { BookMeta, WorkDescriptionMeta, WritingMeta } from '@/types'

const COLLECTION_DIRECTORIES = {
    writing: 'src/app/writing',
    books: 'src/app/books',
    work: 'src/app/work'
} as const

type CollectionName = keyof typeof COLLECTION_DIRECTORIES

async function importCollectionModule(collection: CollectionName, id: string) {
    switch (collection) {
        case 'books':
            return import(`@/app/books/${id}/page.mdx`)
        case 'writing':
            return import(`@/app/writing/${id}/page.mdx`)
        case 'work':
            return import(`@/app/work/${id}/page.mdx`)
        default:
            throw new Error(`Unknown collection: ${collection}`)
    }
}

async function getMeta(collection: 'writing', id: string): Promise<WritingMeta>
async function getMeta(collection: 'books', id: string): Promise<BookMeta>
async function getMeta(collection: 'work', id: string): Promise<WorkDescriptionMeta>
async function getMeta<T>(collection: CollectionName, id: string): Promise<T> {
    const module = await importCollectionModule(collection, id)
    const meta = module.meta as T

    return {
        ...meta,
        id
    }
}

export async function getBookMeta(id: string): Promise<BookMeta> {
    return getMeta('books', id)
}

export function getAllIds(collection: CollectionName): string[] {
    const directory = COLLECTION_DIRECTORIES[collection]

    return fs
        .readdirSync(directory, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
}

export function getBookIds(): string[] {
    return getAllIds('books')
}
