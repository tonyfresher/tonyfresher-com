export interface Writing {
    id: string;
    title: string;
    description?: string;
    image?: string;
    date: string;
    content: string;
}

export interface Book extends Writing {
    nameRu: string;
    nameEn?: string;
    author: string;
    year: string;
    backgroundColor: string;
    foregroundColor: string;
}

export function isBook(writing: Writing): writing is Book {
    return Boolean((writing as Book).author);
}
