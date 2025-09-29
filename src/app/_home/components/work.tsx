import Link from '@/components/link'

const strings = {
    title: 'Work',
    items: [
        {
            product: 'TripleTen',
            description: 'A family of beginner-friendly\nonline coding bootcamps',
            period: '2022 — present',
            cover: {
                desktop: '/work/tripleten-desktop.svg',
                mobile: '/work/tripleten-mobile.svg'
            },
            link: '/work/tripleten'
        },
        {
            product: 'Yandex Practicum',
            description: 'Online learning platform',
            period: '2021 — 2022',
            link: 'https://practicum.yandex.ru'
        },
        {
            product: 'Yandex Surveys',
            description: 'Quick surveys and tests',
            period: '2018 — 2021',
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
                    className="-m-4 grid gap-6 rounded-lg p-4 max-[960px]:m-0 max-[960px]:flex max-[960px]:flex-col max-[960px]:gap-4 max-[960px]:p-0"
                    display="inline-block"
                >
                    {cover && (
                        <>
                            <img
                                className="col-start-1 row-start-1 w-full max-[960px]:hidden"
                                src={cover.desktop}
                                alt="Cover"
                            />
                            <img
                                className="col-start-1 row-start-1 hidden w-full max-[960px]:block"
                                src={cover.mobile}
                                alt="Cover"
                            />
                        </>
                    )}
                    <div className="z-10 col-start-1 row-start-1 flex max-w-[328px] flex-col max-[960px]:max-w-full">
                        <h2 className="m-0 font-semibold">{product}</h2>
                        <span className="mt-4 whitespace-pre-line text-[color:var(--color-content-secondary)] max-[960px]:whitespace-normal">
                            {description}
                        </span>
                        <span className="mt-2 text-[color:var(--color-content-secondary)]">
                            {period}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
