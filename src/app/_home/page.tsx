import Education from './components/education'
import Footer from './components/footer.mdx'
import CVMessage from './components/messenger/cv-message'
import Messenger from './components/messenger/messenger'
import TextMessage from './components/messenger/text-message'
import Work from './components/work'

const strings = {
    name: 'Anton Fresher',
    messages: [
        {
            id: '1',
            content: <TextMessage text="Hey! I'm a product designer and engineer" />,
            delay: 1200
        },
        {
            id: '2',
            content: (
                <TextMessage text="Over the past 8 years in tech, I've learned I fit right in with fast-paced early-stage teams, helping navigate uncertainty and build products people love" />
            ),
            delay: 1800
        },
        {
            id: '3',
            content: (
                <TextMessage text="In many parts of my life, I'm a generalist. I love moving across roles and functions to ship great products, find creative solutions, and—most importantly—have fun along the way" />
            ),
            delay: 2000
        },
        {
            id: '4',
            content: <CVMessage />,
            delay: 1400
        }
    ]
}

export default function HomePage() {
    return (
        <div className="3xl:col-span-2 col-span-4 flex flex-col gap-y-20 text-xl lg:col-span-3">
            <div className="flex flex-col gap-8">
                <h1 className="font-display -mx-4 my-0 overflow-visible px-4 text-[52px] leading-none">
                    {strings.name}
                </h1>
                <Messenger messages={strings.messages} />
            </div>
            <Work />
            <Education />
            <div className="text-muted-foreground mt-8">
                <Footer />
            </div>
        </div>
    )
}
