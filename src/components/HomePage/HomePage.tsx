import Page from 'components/Page'
import PageMenu from 'components/PageMenu'

import About from './About.mdx'
import Footer from './Footer.mdx'
import Links from './Links'

const strings = {
    description: "Hey, I'm Tony. I'm a product designer and developer."
}

const aboutWrapperClassName = [
    'relative',
    '[&>p]:m-0',
    '[&>p+ p]:mt-[1em]',
    '[&_img]:mx-[0.1em]',
    '[&_img]:align-bottom',
    '[&_img]:h-10',
    '[&_img]:w-10',
    '[&_img]:rounded-full',
    'max-[960px]:[&_img]:h-9',
    'max-[960px]:[&_img]:w-9'
].join(' ')

export default function HomePage() {
    return (
        <Page>
            <PageMenu />
            <div
                className={[
                    'col-[2/-2]',
                    'text-[length:var(--h2-font-size)]',
                    'leading-[var(--text-line-height)]',
                    'max-[540px]:text-[length:var(--text-font-size)]',
                    'max-[540px]:leading-[var(--text-line-height)]'
                ].join(' ')}
            >
                <div className={aboutWrapperClassName}>
                    <About />
                </div>
                <Links />
                <div className="mt-16 text-[color:var(--color-content-secondary)] max-[960px]:mt-10">
                    <Footer />
                </div>
            </div>
        </Page>
    )
}
