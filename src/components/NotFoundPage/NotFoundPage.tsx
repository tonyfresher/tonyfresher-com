import React from 'react';

import {cn} from 'lib/classname';

import Page from 'components/Page';
import PageMenu from 'components/PageMenu';

import styles from './NotFoundPage.module.css';

const notFoundPageCn = cn('NotFoundPage', styles);

const strings = {
    text: '404 — Page not found'
};

export default function NotFoundPage() {
    return (
        <Page>
            <PageMenu />
            <h1 className={notFoundPageCn()}>{strings.text}</h1>
        </Page>
    );
}
