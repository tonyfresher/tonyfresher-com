import {NextSeo} from 'next-seo';

import Home from 'components/Home';

const DESCRIPTION = "Hey, I'm Anton. I'm a product designer and developer.";

export default function HomePage() {
    return (
        <>
            <NextSeo
                title="Anton Fresher"
                description={DESCRIPTION}
                openGraph={{
                    description: DESCRIPTION,
                    images: [
                        {
                            url: '/anton-fresher.jpeg',
                            alt: 'Anton Fresher'
                        }
                    ],
                    locale: 'en_US',
                    site_name: 'Anton Fresher',
                    title: 'Anton Fresher',
                    type: 'website'
                }}
            />
            <Home />
        </>
    );
}
