import About from './components/about.mdx'
import Education from './components/education'
import CVMessage from './components/messenger/cv-message'
import LocationMessage from './components/messenger/location-message'
import Messenger from './components/messenger/messenger'
import TextMessage from './components/messenger/text-message'
import Work from './components/work'

const strings = {
    name: 'Anton Fresher',
    messages: [
        {
            id: '1',
            content: <TextMessage text="Hey! I'm Anton, a  product designer and engineer" />,
            delay: 1200
        },
        {
            id: '2',
            content: <TextMessage text="Curious to explore, build, jam, and connect" />,
            delay: 800
        },
        {
            id: '3',
            content: <LocationMessage text="Now in Berlin" />,
            delay: 1200
        },
        {
            id: '4',
            content: <CVMessage />,
            delay: 1200
        }
    ]
}

export default function HomePage() {
    return (
        <div className="3xl:col-span-2 col-span-4 flex flex-col gap-y-20 lg:col-span-3">
            <div className="flex flex-col gap-8">
                <h1 className="font-display -mx-4 my-0 overflow-visible px-4 text-5xl leading-none">
                    {strings.name}
                </h1>
                <Messenger messages={strings.messages} />
            </div>
            <Work />
            <Education />
            <About />
        </div>
    )
}
