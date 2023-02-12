interface Page {
    id: string;
    content?: string;
}

export interface Writing extends Page {
    title: string;
    description?: string;
    image?: string;
    date: string;
}

export interface Book extends Writing {
    nameRu: string;
    nameEn?: string;
    author: string;
    year?: string;
    backgroundColor: string;
    foregroundColor: string;
}

export interface Experience extends Page {
    company: string;
    period: string;
}

export function isBook(writing: Writing): writing is Book {
    return Boolean((writing as Book).author);
}
