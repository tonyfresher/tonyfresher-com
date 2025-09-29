import { cn } from '@/lib/cn'

import About from './components/about.mdx'
import Footer from './components/footer.mdx'
import Links from './components/links'

export default function HomePage() {
    return (
        <div
            className={cn(
                'col-[2/-2]',
                'text-[length:var(--h2-font-size)]',
                'leading-[var(--text-line-height)]',
                'max-[540px]:text-[length:var(--text-font-size)]',
                'max-[540px]:leading-[var(--text-line-height)]'
            )}
        >
            <div
                className={cn(
                    'relative',
                    '[&>p]:m-0',
                    '[&>p+p]:mt-[1em]',
                    '[&_img]:mx-[0.1em] [&_img]:inline-block [&_img]:h-10 [&_img]:w-10 [&_img]:rounded-xl [&_img]:align-bottom',
                    'max-[960px]:[&_img]:h-9',
                    'max-[960px]:[&_img]:w-9'
                )}
            >
                <About />
            </div>
            <Links />
            <div className="mt-16 text-[color:var(--color-content-secondary)] max-[960px]:mt-10">
                <Footer />
            </div>
        </div>
    )
}
