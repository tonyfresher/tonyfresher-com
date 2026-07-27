import PortfolioSection from './portfolio-section'

const strings = {
    title: 'Projects',
    items: [
        {
            product: 'moi',
            description: 'UI for your AI',
            period: '2026',
            logo: '/work/moi.png',
            link: 'https://moi.computer'
        }
    ]
}

export default function Projects() {
    return <PortfolioSection title={strings.title} items={strings.items} />
}
