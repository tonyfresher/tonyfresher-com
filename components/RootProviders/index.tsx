import {QueryClient, QueryClientProvider} from 'react-query';

import Seo from './Seo';

import type {RootProvidersProps} from './types';

const queryClient = new QueryClient();

export default function RootProviders({children}: RootProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Seo />
            {children}
        </QueryClientProvider>
    );
}
