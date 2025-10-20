import { cn } from '@/lib/cn'

import About from './components/about.mdx'
import CV from './components/cv'
import Education from './components/education'
import Footer from './components/footer.mdx'
import Work from './components/work'

export const strings = {
    name: 'Anton Fresher'
}

export default function HomePage() {
    return (
        <div className="col-span-3 flex flex-col gap-y-24 text-xl">
            <div className="col-span-5 flex flex-col gap-y-10">
                <h1 className="font-display font-regular m-0 text-5xl">{strings.name}</h1>
                <div
                    className={cn(
                        'relative leading-relaxed',
                        '[&>p]:m-0',
                        '[&>p+p]:mt-4',
                        '[&_img]:mx-1 [&_img]:inline-block [&_img]:size-8 [&_img]:rounded-md [&_img]:align-top'
                    )}
                >
                    <About />
                </div>
                <CV />
            </div>
            <Work />
            <Education />
            <div className="text-muted-foreground mt-10">
                <Footer />
            </div>
        </div>
    )
}
