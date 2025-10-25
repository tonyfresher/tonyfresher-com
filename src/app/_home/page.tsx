import { cn } from '@/lib/cn'

import About from './components/about.mdx'
import CV from './components/cv'
import Education from './components/education'
import Footer from './components/footer.mdx'
import Work from './components/work'

export const strings = {
    name: 'Anton Fresher',
    emoji: ';-)'
}

export default function HomePage() {
    return (
        <div className="3xl:col-span-2 col-span-4 flex flex-col gap-y-24 text-xl lg:col-span-3">
            <div className="flex flex-col">
                <h1 className="group font-display m-0 mb-6 overflow-visible text-[52px] leading-none">
                    {strings.name}
                    <span className="ml-4 hidden group-hover:inline">{strings.emoji}</span>
                </h1>
                <div
                    className={cn(
                        'relative mb-10 leading-relaxed',
                        '[&>p]:m-0',
                        '[&>p+p]:mt-4',
                        '[&_img]:mx-0.5 [&_img]:inline-block [&_img]:size-7 [&_img]:rounded-sm [&_img]:align-top'
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
