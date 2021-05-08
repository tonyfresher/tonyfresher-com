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
                    className={home('Photo', {size: 'cropped'})}
                    src="/me-cropped.jpg"
                    alt="Me"
                />
                <div className={home('About')}>
                    <div className={home('AboutText')}>
                        <Markdown renderers={{link: Link}}>
                            {i18n.about}
                        </Markdown>
                    </div>
                    <img
                        className={home('Photo', {size: 'full'})}
                        src="/me-full.jpg"
                        alt="Me"
                    />
                </div>
                <Links />
                <p className={home('FooterNote')}>{i18n.lastNameNote}</p>
            </div>
        </Page>
    );
}
