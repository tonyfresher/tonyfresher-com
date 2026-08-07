import PortfolioSection from './portfolio-section'

const strings = {
    title: 'Projects',
    items: [
        {
            product: 'Moi Computer',
            description: 'An interface you build together\nwith your agent',
            period: '2026',
            logo: '/work/moi.png',
            link: '/work/moi'
        }
    ]
}

export default function Projects() {
    return <PortfolioSection title={strings.title} items={strings.items} />
}
