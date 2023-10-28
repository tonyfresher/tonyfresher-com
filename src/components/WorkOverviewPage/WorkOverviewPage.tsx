import {NextSeo} from 'next-seo';

import {cn} from 'lib/classname';

import Page from 'components/Page';
import PageMenu from 'components/PageMenu';
import Link from 'components/Link';

import styles from './WorkOverviewPage.module.css';

const workOverviewPageCn = cn('WorkOverviewPage', styles);

const strings = {
    items: [
        {
            product: 'TripleTen',
            description:
                'A family of beginner-friendly online coding bootcamps',
            period: '2022 — present',
            cover: {
                desktop: '/tripleten/cover-desktop.svg',
                mobile: '/tripleten/cover-mobile.svg'
            },
            link: {
                label: 'Read more →',
                url: '/work/tripleten'
            }
        },
        {
            product: 'Yandex Practicum',
            description: 'Online learning platform',
            period: '2021 — 2022',
            link: {
                label: 'Visit site →',
                url: 'https://practicum.yandex.ru'
            }
        },
        {
            product: 'Yandex Surveys',
            description: 'Quick surveys and tests',
            period: '2018 — 2021',
            link: {
                label: 'Visit site →',
                url: 'https://surveys.yandex.com'
            }
        }
    ]
};

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
                <div className={workOverviewPageCn()}>
                    {strings.items.map(
                        ({product, description, period, cover, link}) => (
                            <div
                                className={workOverviewPageCn('Item')}
                                key={product}
                            >
                                {cover && (
                                    <>
                                        <img
                                            className={workOverviewPageCn(
                                                'ItemCover',
                                                {device: 'desktop'}
                                            )}
                                            src={cover.desktop}
                                            alt="Cover"
                                        />
                                        <img
                                            className={workOverviewPageCn(
                                                'ItemCover',
                                                {device: 'mobile'}
                                            )}
                                            src={cover.mobile}
                                            alt="Cover"
                                        />
                                    </>
                                )}
                                <div className={workOverviewPageCn('ItemMeta')}>
                                    <h2
                                        className={workOverviewPageCn(
                                            'ItemTitle'
                                        )}
                                    >
                                        {product}
                                    </h2>
                                    <span
                                        className={workOverviewPageCn(
                                            'ItemDescription'
                                        )}
                                    >
                                        {description}
                                    </span>
                                    <span
                                        className={workOverviewPageCn(
                                            'ItemPeriod'
                                        )}
                                    >
                                        {period}
                                    </span>
                                    <Link
                                        className={workOverviewPageCn(
                                            'ItemLink'
                                        )}
                                        href={link.url}
                                        display="inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </Page>
        </>
    );
}
