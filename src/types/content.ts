interface PageMeta {
    id: string
}

export interface ArticleMeta extends PageMeta {
    title: string
    description?: string
    image?: string
    date?: string
}

export interface WorkDescriptionMeta extends ArticleMeta {
    link: string
    period: string
}
