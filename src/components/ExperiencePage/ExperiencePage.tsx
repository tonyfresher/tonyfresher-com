import {NextSeo} from 'next-seo';
import {PropsWithChildren} from 'react';

import type {ExperienceMeta} from 'types';

import {cn} from 'lib/classname';

import Page from 'components/Page';

import styles from './ExperiencePage.module.css';

const experiencePageCn = cn('ExperiencePage', styles);

interface ExperiencePageProps extends PropsWithChildren {
    meta: ExperienceMeta;
}

export default function ExperiencePage({
    meta: {company, period},
    children: content
}: ExperiencePageProps) {
    return (
        <>
            <NextSeo
                title={company}
                openGraph={{
                    title: company,
                    site_name: 'Anton Fresher',
                    type: 'article',
                    locale: 'en_US'
                }}
            />
            <Page>
                <article className={experiencePageCn()}>
                    <h1 className={experiencePageCn('Company')}>{company}</h1>
                    <span className={experiencePageCn('Period')}>{period}</span>
                    <div className={experiencePageCn('Content')}>{content}</div>
                </article>
            </Page>
        </>
    );
}
