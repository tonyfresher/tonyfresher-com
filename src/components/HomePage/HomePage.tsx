import {NextSeo} from 'next-seo';

import {cn} from 'lib/classname';

import Page from 'components/Page';

import Links from './Links';
import About from './About.mdx';

import styles from './HomePage.module.css';

const homePageCn = cn('HomePage', styles);

const strings = {
    menu: [{label: 'Anton Fresher', link: '/'}],
    description: "Hey, I'm Anton. I'm a product designer and developer."
};

export default function HomePage() {
    return (
        <>
            <NextSeo
                title="Anton Fresher"
                description={strings.description}
                openGraph={{
                    description: strings.description,
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
            <Page direction="vertical" menu={strings.menu}>
                <div className={homePageCn()}>
                    <div className={homePageCn('About')}>
                        <About />
                    </div>
                    <Links />
                </div>
            </Page>
        </>
    );
}
