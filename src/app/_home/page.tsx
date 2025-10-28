import About from './components/about'
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
            <div className="flex flex-col gap-8">
                <h1 className="group font-display m-0 overflow-visible text-[52px] leading-none">
                    {strings.name}
                    <span className="ml-4 hidden group-hover:inline">{strings.emoji}</span>
                </h1>
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
