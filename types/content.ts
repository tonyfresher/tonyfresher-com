export interface Article {
    id: string;
    header: string;
    content?: string;
    createdAt?: string;
}

export interface Post {
    title: string;
    description?: string;
    image?: string;
    date: string;
    content: string;
}

export interface Book extends Post {
    nameRu: string;
    nameEn: string;
    author: string;
    year: string;
    backgroundColor: string;
    foregroundColor: string;
}
