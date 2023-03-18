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

export interface ExperienceMeta extends PageMeta {
    company: string;
    period: string;
}

export function isBookMeta(writing: WritingMeta): writing is BookMeta {
    return Boolean((writing as BookMeta).author);
}
