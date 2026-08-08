import { IconArrowUpRight } from '@tabler/icons-react'

import Link from '@/components/link'
import { cn } from '@/lib/cn'

const strings = {
    coverAlt: 'Project cover',
    logoAlt: 'Product logo'
}

export interface PortfolioItem {
    product: string
    description: string
    period: string
    link: string
    cover?: {
        desktop: string
        mobile: string
    }
    logo?: string
}

interface PortfolioSectionProps {
    title: string
    items: PortfolioItem[]
}

export default function PortfolioSection({ title, items }: PortfolioSectionProps) {
    return (
        <div className="flex flex-col gap-10">
            <h2>{title}</h2>
            {items.map(({ product, description, period, cover, logo, link }) => (
                <Link
                    key={product}
                    href={link}
                    className={cn(
                        'group',
                        '-m-4 grid grid-cols-[1fr_auto] rounded-md p-4',
                        'max-lg:m-0 max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:p-0 max-lg:hover:bg-transparent'
                    )}
                    display="inline-block"
                >
                    {cover && (
                        <>
                            <img
                                className="col-start-1 row-start-1 w-full max-lg:hidden"
                                src={cover.desktop}
                                alt={strings.coverAlt}
                            />
                            <img
                                className="col-start-1 row-start-1 hidden w-full max-lg:block"
                                src={cover.mobile}
                                alt={strings.coverAlt}
                            />
                        </>
                    )}
                    {logo && (
                        <div className="relative w-max">
                            <img
                                className={cn(
                                    'size-14 shrink-0',
                                    'lg:size-24 lg:p-2 lg:group-odd:rotate-5 lg:group-even:-rotate-5'
                                )}
                                src={logo}
                                alt={strings.logoAlt}
                            />
                            {!link.startsWith('/') && (
                                <IconArrowUpRight
                                    className={cn(
                                        'bg-background size-8 rounded-sm p-1 shadow-sm',
                                        'absolute -top-2 -right-2',
                                        'lg:top-0 lg:right-0',
                                        'lg:transition-transform lg:duration-200 lg:group-hover:scale-103 lg:group-hover:group-odd:-rotate-5 lg:group-hover:group-even:rotate-5'
                                    )}
                                    stroke={1.75}
                                />
                            )}
                        </div>
                    )}
                    <div
                        className={cn(
                            'col-start-1 row-start-1 flex flex-col',
                            cover && 'max-w-80 max-lg:max-w-full'
                        )}
                    >
                        <h3 className="m-0 font-semibold">{product}</h3>
                        <span className="mt-1 whitespace-pre-line max-sm:whitespace-normal">
                            {description}
                        </span>
                        <span className="text-muted-foreground mt-2">{period}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
