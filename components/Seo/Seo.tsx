import Head from 'next/head';
import {useRouter} from 'next/router';
import {DefaultSeo} from 'next-seo';

function getEmoji(route: string): string {
    if (route.includes('/writing')) {
        return '📖';
    }

    return '✋';
}

export default function Seo() {
    const router = useRouter();

    const emoji = getEmoji(router.route);

    return (
        <>
            <DefaultSeo
                title="Антон Фрешер"
                description="Дизайнер и разработчик."
                openGraph={{
                    description: 'Дизайнер и разработчик.',
                    locale: 'ru_RU',
                    site_name: 'Антон Фрешер',
                    title: 'Антон Фрешер',
                    type: 'website',
                    url: 'https://tonyfresher.com'
                }}
            />
            <Head>
                <link
                    rel="icon"
                    href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
                />
            </Head>
        </>
    );
}
