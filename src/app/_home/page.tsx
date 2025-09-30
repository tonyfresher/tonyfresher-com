import { cn } from '@/lib/cn'

import About from './components/about.mdx'
import Education from './components/education'
import Footer from './components/footer.mdx'
import Work from './components/work'

export const strings = {
    name: 'Anton Fresher'
}

export default function HomePage() {
    return (
        <div className="col-span-4 flex flex-col gap-y-24 text-xl">
            <div
                className={cn(
                    'relative leading-relaxed',
                    '[&>p]:m-0',
                    '[&>p+p]:mt-4',
                    '[&_img]:mx-1 [&_img]:inline-block [&_img]:size-8 [&_img]:rounded-md [&_img]:align-top'
                )}
            >
                <h1 className="col-span-5 m-0 mb-10 text-4xl font-semibold">{strings.name}</h1>
                <About />
            </div>
            <Work />
            <Education />
            <div className="text-muted-foreground mt-10">
                <Footer />
            </div>
        </div>
    )
}
