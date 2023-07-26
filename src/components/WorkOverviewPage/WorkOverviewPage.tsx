import {NextSeo} from 'next-seo';

import {cn} from 'lib/classname';

import Page from 'components/Page';
import PageMenu from 'components/PageMenu';

import styles from './WorkOverviewPage.module.css';

const workOverviewPageCn = cn('WorkOverviewPage', styles);

export default function WorkOverviewPage() {
    return (
        <>
            <NextSeo
                title={'Work — Anton Fresher'}
                openGraph={{
                    title: 'Work — Anton Fresher',
                    site_name: 'Anton Fresher',
                    type: 'website',
                    locale: 'en_US'
                }}
            />
            <Page>
                <PageMenu />
                <article className={workOverviewPageCn()}></article>
            </Page>
        </>
    );
}
