interface PageMeta {
    id: string
}

export interface WritingMeta extends PageMeta {
    title: string
    description?: string
    image?: string
    date: string
}

export interface WorkDescriptionMeta extends PageMeta {
    product: string
    link: string
    period: string
}
