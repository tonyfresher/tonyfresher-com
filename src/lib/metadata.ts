import type { Metadata } from 'next'

import type { ArticleMeta } from '@/types'

const baseOpenGraph = {
    siteName: 'Anton Fresher',
    locale: 'en_US'
} as const

export function buildArticleMetadata(meta: ArticleMeta): Metadata {
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
                        url: `/${meta.id}/${meta.image}`,
                        alt: meta.title
                    }
                ]
            })
        }
    }
}
