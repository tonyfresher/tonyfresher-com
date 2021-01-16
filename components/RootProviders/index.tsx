import Seo from './Seo';

import type {RootProvidersProps} from './types';

export default function RootProviders({children}: RootProvidersProps) {
    return (
        <>
            <Seo />
            {children}
        </>
    );
}
