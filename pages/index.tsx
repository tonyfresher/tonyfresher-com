import {NextSeo} from 'next-seo';

import Home from 'components/Home';

export default function HomePage() {
    return (
        <>
            <NextSeo
                title="Антон Фрешер"
                description="Дизайнер и разработчик."
                openGraph={{
                    description: 'Дизайнер и разработчик.',
                    images: [
                        {
                            url: '/anton-fresher.jpg',
                            alt: 'Антон Фрешер'
                        }
                    ],
                    locale: 'ru_RU',
                    site_name: 'Антон Фрешер',
                    title: 'Антон Фрешер',
                    type: 'website'
                }}
            />
            <Home />
        </>
    );
}
