import Head from 'next/head';
import {useRouter} from 'next/router';
import {DefaultSeo} from 'next-seo';

function getEmoji(route: string): string {
    if (route.includes('/work')) {
        return '🤔';
    }

    if (route.includes('/writing')) {
        return '✏️';
    }

    if (route.includes('/books')) {
        return '📚';
    }

    return '✋';
}

export default function Seo() {
    const router = useRouter();

    const emoji = getEmoji(router.route);

    return (
        <>
            <DefaultSeo
                title="Tony Fresher"
                openGraph={{
                    locale: 'en_US',
                    site_name: 'Tony Fresher',
                    type: 'website'
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
