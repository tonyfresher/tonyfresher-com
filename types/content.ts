export interface Article {
    id: string;
    header: string;
    content?: string;
    createdAt?: string;
}

export interface Writing {
    title: string;
    description?: string;
    image?: string;
    date: string;
    content: string;
}

export interface Book extends Writing {
    nameRu: string;
    nameEn: string;
    author: string;
    year: string;
    backgroundColor: string;
    foregroundColor: string;
}
