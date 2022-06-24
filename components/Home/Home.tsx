import Markdown from 'react-markdown';

import {cn} from 'lib/classname';

import Link from 'components/Link';
import Page from 'components/Page';

import Links from './Links';

import i18n from './i18n/ru';

import styles from './Home.module.css';

const home = cn('Home', styles);

export default function Home() {
    return (
        <Page direction="vertical" menu={i18n.menu}>
            <div className={home()}>
                <img
                    className={home('Photo', {shape: 'rect'})}
                    src="/anton-fresher.jpeg"
                    alt="Anton Fresher"
                />
                <div className={home('About')}>
                    <img
                        className={home('Photo', {shape: 'circle'})}
                        src="/anton-fresher.jpeg"
                        alt="Anton Fresher"
                    />
                    <Markdown renderers={{link: Link}}>{i18n.about}</Markdown>
                </div>
                <Links />
            </div>
        </Page>
    );
}
