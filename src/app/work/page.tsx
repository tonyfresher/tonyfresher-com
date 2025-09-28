import type { Metadata } from 'next'

import WorkOverviewPage from '@/components/WorkOverviewPage'

export const metadata: Metadata = {
    title: 'Work',
    openGraph: {
        title: 'Work',
        siteName: 'Tony Fresher',
        type: 'website'
    }
}

export default function Page() {
    return <WorkOverviewPage />
}
