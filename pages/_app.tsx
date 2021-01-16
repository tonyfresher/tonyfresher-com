import type {AppProps} from 'next/app';

import RootProviders from 'components/RootProviders';

import 'styles/global.css';

export default function App({Component, pageProps}: AppProps) {
    return (
        <RootProviders>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </RootProviders>
    );
}
