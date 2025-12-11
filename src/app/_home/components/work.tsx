import Link from '@/components/link'
import { cn } from '@/lib/cn'

const strings = {
    title: 'Work',
    items: [
        {
            product: 'TripleTen',
            description: 'AI-powered tech\neducation platform',
            period: '2022-2025',
            cover: {
                desktop: '/work/tripleten-desktop.svg',
                mobile: '/work/tripleten-mobile.svg'
            },
            link: '/work/tripleten'
        },
        {
            product: 'Yandex Practicum',
            description: 'Online education for digital professions',
            period: '2021-2022',
            logo: '/work/practicum.svg',
            link: 'https://practicum.yandex.ru'
        },
        {
            product: 'Yandex Surveys',
            description: 'Easy-to-use research toolset',
            period: '2018-2021',
            logo: '/work/surveys.svg',
            link: 'https://surveys.yandex.com'
        }
    ]
}

export default function Work() {
    return (
        <div className="flex flex-col gap-10">
            <h2>{strings.title}</h2>
            {strings.items.map(({ product, description, period, cover, logo, link }) => (
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
                                alt="Cover"
                            />
                            <img
                                className="col-start-1 row-start-1 hidden w-full max-lg:block"
                                src={cover.mobile}
                                alt="Cover"
                            />
                        </>
                    )}
                    {logo && (
                        <img
                            className={cn(
                                'size-14 shrink-0 opacity-95',
                                'lg:ml-8 lg:size-24 lg:p-2 lg:group-odd:rotate-5 lg:group-even:-rotate-5'
                            )}
                            src={logo}
                            alt="Logo"
                        />
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
