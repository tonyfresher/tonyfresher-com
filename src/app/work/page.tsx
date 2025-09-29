import type { Metadata } from 'next'

import WorkOverviewPage from '@/components/work-overview-page'

export const metadata: Metadata = {
    title: 'Work',
    openGraph: {
        title: 'Work',
        siteName: 'Anton Fresher',
        type: 'website'
    }
}

export default function Page() {
    return <WorkOverviewPage />
}
