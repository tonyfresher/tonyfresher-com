import type {AppProps} from 'next/app';

import {MDXProvider} from '@mdx-js/react';

import {YMInitializer} from 'react-yandex-metrika';

import Link from 'components/Link';
import Seo from 'components/Seo';

import 'styles/global.css';

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            {process.env.NODE_ENV === 'production' && (
                <YMInitializer
                    accounts={[47324241]}
                    options={{webvisor: true}}
                    version="2"
                />
            )}
            <Seo />
            <MDXProvider
                components={{
                    a: ({children, className, href}) => (
                        <Link
                            className={className}
                            color="#9bc5f3"
                            href={href ?? ''}
                        >
                            {children}
                        </Link>
                    )
                }}
            >
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
            </MDXProvider>
        </>
    );
}
