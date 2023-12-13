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
                'A family of beginner-friendly\nonline coding bootcamps',
            period: '2022 — present',
            cover: {
                desktop: '/work/tripleten-desktop.svg',
                mobile: '/work/tripleten-mobile.svg'
            },
            link: '/work/tripleten'
        },
        {
            product: 'Yandex Practicum',
            description: 'Online learning platform',
            period: '2021 — 2022',
            link: 'https://practicum.yandex.ru',
            cover: {
                desktop: '/work/yandex-practicum-desktop.svg',
                mobile: '/work/yandex-practicum-mobile.svg'
            }
        },
        {
            product: 'Yandex Surveys',
            description: 'Quick surveys and tests',
            period: '2018 — 2021',
            link: 'https://surveys.yandex.com',
            cover: {
                desktop: '/work/yandex-surveys-desktop.svg',
                mobile: '/work/yandex-surveys-mobile.svg'
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
                            <Link
                                key={product}
                                href={link}
                                className={workOverviewPageCn('Item')}
                                display="inline-block"
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
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </Page>
        </>
    );
}
