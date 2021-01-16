import React from 'react';

import {cn} from 'lib/classname';

import i18n from './i18n/ru';

import styles from './NotFound.module.css';

const notFound = cn('NotFound', styles);

export default function NotFound() {
    return <h1 className={notFound()}>{i18n.text}</h1>;
}
