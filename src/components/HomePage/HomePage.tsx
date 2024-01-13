import {NextSeo} from 'next-seo';

import {cn} from 'lib/classname';

import Page from 'components/Page';
import PageMenu from 'components/PageMenu';

import Links from './Links';
import About from './About.mdx';
import Footer from './Footer.mdx';

import styles from './HomePage.module.css';

const homePageCn = cn('HomePage', styles);

const strings = {
    description: "Hey, I'm Tony. I'm a product designer and developer."
};

export default function HomePage() {
    return (
        <>
            <NextSeo
                title="Tony Fresher"
                description={strings.description}
                openGraph={{
                    description: strings.description,
                    images: [
                        {
                            url: '/me.jpeg',
                            alt: 'Tony Fresher'
                        }
                    ],
                    locale: 'en_US',
                    site_name: 'Tony Fresher',
                    title: 'Tony Fresher',
                    type: 'website'
                }}
            />
            <Page>
                <PageMenu />
                <div className={homePageCn()}>
                    <div className={homePageCn('About')}>
                        <About />
                    </div>
                    <Links />
                    <div className={homePageCn('Footer')}>
                        <Footer />
                    </div>
                </div>
            </Page>
        </>
    );
}
