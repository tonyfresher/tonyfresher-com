import type {AppProps} from 'next/app';

import {YMInitializer} from 'react-yandex-metrika';

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
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </>
    );
}
