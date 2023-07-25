interface PageMeta {
    id: string;
}

export interface WritingMeta extends PageMeta {
    title: string;
    description?: string;
    image?: string;
    date: string;
}

export interface BookMeta extends WritingMeta {
    name: string;
    author: string;
    year?: string;
    backgroundColor: string;
    foregroundColor: string;
}

export interface WorkDescriptionMeta extends PageMeta {
    product: string;
    link: string;
    period: string;
}

export function isBookMeta(writing: WritingMeta): writing is BookMeta {
    return Boolean((writing as BookMeta).author);
}
