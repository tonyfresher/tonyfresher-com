import {NextSeo} from 'next-seo';
import {PropsWithChildren} from 'react';

import type {WorkDescriptionMeta} from 'types';

import {cn} from 'lib/classname';

import Page from 'components/Page';
import PageMenu from 'components/PageMenu';
import Link from 'components/Link';

import styles from './WorkDescriptionPage.module.css';

const workDescriptionPageCn = cn('WorkDescriptionPage', styles);

interface WorkDescriptionPageProps extends PropsWithChildren {
    meta: WorkDescriptionMeta;
}

export default function WorkDescriptionPage({
    meta: {product, link, period},
    children: content
}: WorkDescriptionPageProps) {
    const productUrl = new URL(link);

    return (
        <>
            <NextSeo
                title={product}
                openGraph={{
                    title: product,
                    site_name: 'Anton Fresher',
                    type: 'article',
                    locale: 'en_US'
                }}
            />
            <Page>
                <PageMenu />
                <article className={workDescriptionPageCn()}>
                    <h1 className={workDescriptionPageCn('Title')}>
                        {product}
                    </h1>
                    <div className={workDescriptionPageCn('Meta')}>
                        <div className={workDescriptionPageCn('MetaItem')}>
                            {period}
                        </div>
                        <div className={workDescriptionPageCn('MetaItem')}>
                            <Link href={link} display="inline-block">
                                {productUrl.hostname}
                            </Link>
                        </div>
                    </div>
                    {content}
                </article>
            </Page>
        </>
    );
}
