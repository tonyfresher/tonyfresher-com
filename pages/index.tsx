import {NextSeo} from 'next-seo';

import Home from 'components/Home';

const DESCRIPTION =
    'Дизайнер и разработчик. Делаю интерфейсы в Яндекс.Практикуме. Закончил матмех в Екатеринбурге, живу в Москве.';

export default function HomePage() {
    return (
        <>
            <NextSeo
                title="Антон Фрешер"
                description={DESCRIPTION}
                openGraph={{
                    description: DESCRIPTION,
                    images: [
                        {
                            url: '/anton-fresher.jpeg',
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
