import { cn } from '@/lib/cn'

import About from './components/about.mdx'
import Footer from './components/footer.mdx'
import Work from './components/work'

export default function HomePage() {
    return (
        <div className="col-span-5 flex flex-col gap-y-16 text-2xl leading-normal">
            <div
                className={cn(
                    'relative',
                    '[&>p]:m-0',
                    '[&>p+p]:mt-4',
                    '[&_img]:mx-1 [&_img]:inline-block [&_img]:size-8 [&_img]:rounded-md [&_img]:align-bottom'
                )}
            >
                <About />
            </div>
            <Work />
            <div className="text-muted-foreground">
                <Footer />
            </div>
        </div>
    )
}
