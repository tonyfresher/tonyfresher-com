import type { Metadata } from 'next'

import type { WorkDescriptionMeta, WritingMeta } from '@/types'

const baseOpenGraph = {
    siteName: 'Anton Fresher',
    locale: 'en_US'
} as const

export function buildArticleMetadata(meta: WritingMeta): Metadata {
    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            ...baseOpenGraph,
            type: 'article',
            title: meta.title,
            description: meta.description,
            ...(meta.image && {
                images: [
                    {
                        url: `/${meta.id}/images/${meta.image}`,
                        alt: meta.title
                    }
                ]
            })
        }
    }
}

export function buildWorkMetadata(meta: WorkDescriptionMeta): Metadata {
    return {
        title: meta.product,
        openGraph: {
            ...baseOpenGraph,
            type: 'article',
            title: meta.product
        }
    }
}
