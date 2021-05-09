import {NextSeo} from 'next-seo';

import Home from 'components/Home';

export default function HomePage() {
    return (
        <>
            <NextSeo
                title="Антон Фрешер"
                description="Дизайнер, разработчик и редактор."
                openGraph={{
                    title: 'Антон Фрешер',
                    description: 'Дизайнер, разработчик и редактор.',
                    site_name: 'Антон Фрешер',
                    type: 'website',
                    locale: 'ru_RU'
                }}
            />
            <Home />
        </>
    );
}
