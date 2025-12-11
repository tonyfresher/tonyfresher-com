import Link from '@/components/link'

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
            link: 'https://practicum.yandex.ru'
        },
        {
            product: 'Yandex Surveys',
            description: 'Easy-to-use research toolset',
            period: '2018-2021',
            link: 'https://surveys.yandex.com'
        }
    ]
}

export default function Work() {
    return (
        <div className="flex flex-col gap-10">
            <h2>{strings.title}</h2>
            {strings.items.map(({ product, description, period, cover, link }) => (
                <Link
                    key={product}
                    href={link}
                    className="-m-4 grid rounded-md p-4 max-lg:m-0 max-lg:flex max-lg:flex-col max-lg:gap-6 max-lg:p-0 max-lg:hover:bg-transparent"
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
