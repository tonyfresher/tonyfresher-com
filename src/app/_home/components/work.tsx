import PortfolioSection from './portfolio-section'

const strings = {
    title: 'Work',
    items: [
        {
            product: 'TripleTen',
            description: 'The smartest way\nto learn tech skills',
            period: '2022–2025',
            cover: {
                desktop: '/work/tripleten-desktop.svg',
                mobile: '/work/tripleten-mobile.svg'
            },
            link: '/work/tripleten'
        },
        {
            product: 'Yandex Practicum',
            description: 'Online education for digital professions',
            period: '2021–2022',
            logo: '/work/practicum.svg',
            link: 'https://practicum.yandex.ru'
        },
        {
            product: 'Yandex Surveys',
            description: 'Easy-to-use research toolset',
            period: '2018–2021',
            logo: '/work/surveys.svg',
            link: 'https://surveys.yandex.com'
        }
    ]
}

export default function Work() {
    return <PortfolioSection title={strings.title} items={strings.items} />
}
